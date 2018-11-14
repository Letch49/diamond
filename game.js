import { disableButtons, setImg, table } from './src/functions.js';
import { drawCanvas, drawChests, clickChest, clearChest } from './src/gameEnigne.js';
/**
 * 
 * @param {string} cnv is id of canvas
 * @param {array:objects} table is array of objects. ex: {x, y, width, height, isCLick}
 * @param {int} start ???
 * @param {int} finish is the next element 
 * @param {int} size is a size of image, blocks
 * @param {array:objects} arrayOfImg is a uniq array of table
 */

const game = (cnv, ctx, table, finish = 3, size, len, gameMode, ArrayOfChests, gameFunctions, iter = 0, notClick = false, score = 1) => {
    const chest = setImg('images/chest-close.png');
    const chestEmpty = setImg('images/chest-empty.png');
    const chestDiamond = setImg('images/chest-ok.png');

    
    const arrayOfImages = ArrayOfChests;
    chest.onload = () => {
        drawChests(ctx, arrayOfImages, chest, size, iter, notClick);
    };

    cnv.addEventListener('click', (e) => {
        const click = clickChest(e, arrayOfImages, cnv, ctx, size, chestEmpty, chestDiamond, gameFunctions, score);

        setTimeout(() => {
            clearChest(ctx, arrayOfImages);
        }, 400);

        iter = click === false ? iter : iter !== len ? iter + 1 : iter;
        score = click === false ? score : score + 1;
        setTimeout(() => {
            game(cnv, ctx, table, finish, size, len,gameMode, arrayOfImages, gameFunctions, iter, click === false ? true : false, score);
        }, 500);

    }, { once: true });
};

/**
 * 
 * @param {string} cnvId is id of canvas
 */
const main = (cnvId, size) => {
    const compl = document.querySelectorAll('button');
    compl.forEach((el) => {
        el.addEventListener('click', () => {
            const mode = document.querySelector('#check');
            const gameMode = mode.checked === true ? 'def' : 'undef';
            const tbl = table(el.dataset.compl, size);
            disableButtons(compl);
            document.querySelector('.header').style.display = 'none';
            drawCanvas(cnvId, tbl, game, size, gameMode);
        });
    });
};

main('#cnv', 80);