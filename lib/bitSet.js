class BitSet {
    constructor(size){
        this.arr = new Array(size).fill(0);
        this.size = size;
        this.flag = false;
        this.onenum = 0;
    }
    fix(idx){
        if (!this.flag) {
            if (!this.arr[idx]) {
                this.arr[idx] = 1;
                this.onenum ++;
            }
        } else {
            if (this.arr[idx]) {
                this.arr[idx] = 0;
                this.onenum ++;
            }
        }
    }
    unfix(idx){
        if (!this.flag) {
            if (this.arr[idx]) {
                this.arr[idx] = 0;
                this.onenum --;
            }
        } else {
            if (!this.arr[idx]) {
                this.arr[idx] = 1;
                this.onenum --;
            }
        }
    }

    flip(){
        this.flag = !this.flag;
        this.onenum = this.size - this.onenum;
    }

    all(){
        return this.onenum == this.size;
    }

    one(){
        return this.onenum > 0;
    }

    count(){
        return this.onenum;
    }

    toString(){
        let tmp;
        if (!this.flag) {
            tmp = new Array(this.size).fill(0);
            for (let i = 0; i < this.arr.length; i++) {
                if (this.arr[i] == 1) {
                    tmp[i] = this.arr[i];
                }
            }
        } else {
            tmp = new Array(this.size).fill(1);
            for (let i = 0; i < this.arr.length; i++) {
                tmp[i] = +this.arr[i] == 1 ? 0 : 1;
            }
        }
        return tmp.join('');
    }
}

export { BitSet };
