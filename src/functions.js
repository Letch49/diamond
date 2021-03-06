export const onloadImg = (img, fn) => {
    img.onload = () => fn;
};

/**
 * 
 * @param {arrat} array to flat
 */
export const flatten = (array) => array.reduce((acc, el) => {
    if (Array.isArray(el)){
        flatten(el).forEach(element => {
            acc.push(element);
        });
        return acc;
    }
    return [...acc, el];
},[]);

/**
 * 
 * @param {array} elements disable buttons
 */
export const disableButtons = (elements) => {
    elements.forEach((el) => {
        el.disabled = true;
    });
};

/**
 * 
 * @param {array} a 
 * @return array with random elements
 */
export const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

/**
 * 
 * @param {string} src path to image
 */
export const setImg = (src) => {
    const img = new Image();
    img.src = src;
    return img;
};


/**
 * 
 * @param {int} num number of rows
 * @param {int} size px of image and one row
 */
export const table = (num, size) => {
    num = new Number(num) + 1;
    const arr = new Array();
    let temp_arr = new Array();

    for (let i = 1; i < num; i++) {
        for (let j = 1; j < num; j++) {
            temp_arr.push({ x: j * (size + 10), y: i * (size + 10), size: size });
        }
        arr.push(temp_arr);
        temp_arr = [];
    }

    return flatten(arr);
};

/**
 * 
 * @param {object} ctx context of canvas
 * @param {array} table array of rows
 * @param {int} size px of image and one row
 */
export const drawTable = (ctx, table, size) => {
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    for (let i = 0; i < table.length; i++) {
        const el = table[i];
        ctx.strokeRect(el.x, el.y, size, size);
    }
};