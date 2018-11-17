export class Chests{
    constructor(table, size){
        this.len = table.slice().length;
        this.table = table.slice();
        this.size = size;
    }

    get arrayChests(){
        const table = this.table;
        const size = this.size;
        const arr = new Array();

        for(let i = 0; i < this.len; i++) {
            const rnd = Math.random() * 100;
            const el = table[i];
            arr.push({ x: el.x, y: el.y, isClick: false, height: size, width: size, isGold: rnd >= 50 ? true : false });
        }
        return new Chests(arr, size);
    }

    isClick(el, px, py, ctx, size, chestDiamond, chestEmpty) {
        const [xMin, xMax, yMin, yMax] = [el.x, el.x + el.width, el.y, el.y + el.height];
        if ((px >= xMin && px <= xMax) && (py >= yMin && py <= yMax) && el.isDraw === true) {
            if (el.isClick === true) {
                return true;
            }
            el.isClick = true; 
            ctx.clearRect(el.x, el.y, el.width, el.height);
            el.isGold ? ctx.drawImage(chestDiamond, el.x, el.y, size, size) : ctx.drawImage(chestEmpty, el.x, el.y, size, size);
        }
        return el;
    }


    get toArray(){
        return this.table;
    }
}

// export default DefinedChests;