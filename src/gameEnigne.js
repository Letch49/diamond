import {shuffle, drawTable} from './functions.js';
import MicroModal from '../node_modules/micromodal/dist/micromodal.min.js';
import {Chests as C_def} from './obj/chest_defined.js';
import {Chests as C_rnd} from './obj/chest_random.js';

// const MictoModal = null;

/**
 * 
 * @param {string} cnvId is id of canvas
 * @param {array:objects} table is array of objects
 * @param {function} fn is get a `game`
 * @param {int} size px of image and one row
 * @param {class} gameMode selected class
 */

export const drawCanvas = (cnvId, table, fn, size, gameMode) => {
    const canvas = document.createElement('canvas');
    canvas.setAttribute('id', cnvId);
    canvas.setAttribute('width', (size + (table.length < 16 ? 60 : 35)) * Math.sqrt(table.length));
    canvas.setAttribute('height', (size + (table.length < 16 ? 60 : 35)) * Math.sqrt(table.length));
    const body = document.querySelector('#body');
    body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    drawTable(ctx, table, size);
    const Entry = gameMode === 'def' ? new C_def(table, size) : new C_rnd(table, size);
    const ArrayOfChests = Entry.arrayChests.table;
    
    return fn(canvas, ctx, table, 2, size, table.length, gameMode, ArrayOfChests, Entry);
};

/**
 * 
 * @param {array} table is array of objects
 * @param {int} end last value
 * @param {array} arr is array of uniq table
 */
export const drawChests = (ctx, arr, img, size, iter, notClick) => {
    const arrayDrawen = new Array();
    const arrayNotDrawen = new Array();
    arr.reduce((acc, el) => {
        el.isDraw === true ? arrayDrawen.push(el) : arrayNotDrawen.push(el);
    }, null);

    if (notClick === true) {
        arrayDrawen.forEach(e => {
            ctx.drawImage(img, e.x, e.y, size, size);
        });
        return arr;
    }

    const elems = shuffle(arrayNotDrawen);

    arrayDrawen.forEach(e => {
        ctx.drawImage(img, e.x, e.y, size, size);
    });

    if (iter === arr.length) {
        return arr;
    }

    if (iter === 0) {
        const e = elems[1];
        e.isDraw = true;
        ctx.drawImage(img, e.x, e.y, e.width, e.height);
    }
    const e1 = elems[0];
    e1.isDraw = true;
    ctx.drawImage(img, e1.x, e1.y, e1.width, e1.height);
    arr = arrayDrawen.concat(arrayNotDrawen);
    return arr;
};

/**
 * @returns return false if click not to chest;
 * @todo return gameWin and gameEnd
 */
export const clickChest = (ev, arr, cnv, ctx, size, chestEmpty, chestDiamond, ob, score) => {
    const x = ev.pageX - cnv.offsetLeft;
    const y = ev.pageY - cnv.offsetTop;
    
    for (let i = 0; i < arr.length; i++) {
        const el = ob.isClick(arr[i], x, y, ctx, size, chestDiamond, chestEmpty);
        if (arr.filter(e => x >= e.x && x <= e.x + e.width && y >= e.y && y <= e.y + e.height && e.isDraw === true).length === 0) {
            return false;
        }

        const scoreArea = document.querySelectorAll('.score');
        scoreArea.forEach(dom => dom.innerHTML = `Клики: ${score}`);

        if (el === true) {
            gameEnd(score);
        }
        if(arr.every(x => x.isClick === true)) {
            gameWin(score);
        }        
    }
};

/**
 * 
 * @param {object} ctx context of canvas
 * @param {array} arr array of chests
 */
export const clearChest = (ctx, arr) => {
    arr.forEach((el) => {
        ctx.clearRect(el.x, el.y, el.width, el.height);
    });
};


// TODO: Modal Area
const modal = (score, text) => {
    MicroModal.init();
    MicroModal.show('modal-1');
    const title = document.querySelector('.modal__title');
    title.innerHTML = text;
    const el = document.querySelector('.modal__p');
    el.innerHTML = `Ваш счёт: ${score}`;

    const btn = document.querySelector('.modal__btn');
    btn.addEventListener('click', () => location.reload());
};

const gameEnd = (score) => {
    modal(score, 'Очень жаль');
};

const gameWin = (score) => {
    modal(score, 'Поздравляем');
};