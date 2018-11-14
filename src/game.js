import { disableButtons, setImg, table } from './functions.js';
import { drawCanvas, drawChests, clickChest, clearChest } from './gameEnigne.js';

/**
 * 
 * @param {object} cnv canvas
 * @param {object} ctx canvas context
 * @param {array} table table
 * @param {???} finish not use in this ver
 * @param {int} size px of image and one row
 * @param {int} len length of table
 * @param {string} gameMode which class you selected
 * @param {array} ArrayOfChests array of chests
 * @param {class} gameFunctions selected class
 * @param {iterator} iter iterator of iterative process
 * @param {bool} notClick if not click to chest
 * @param {int} score counter of clicks
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
 * @param {int} size px of image and one row
 * 
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