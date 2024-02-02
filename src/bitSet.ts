 class BitSet {
    size: number;
    set: Set<number>;
    isOne: boolean; // 等于true表示set中存的是值为1的下标
    constructor(size: number) {
        this.size = size;
        this.set = new Set();
        this.isOne = true;
    }

    fix(idx: number): void {
        if (this.isOne) {
            this.set.add(idx);
        } else {
            this.set.delete(idx);
        }
    }

    unfix(idx: number): void {
        if (this.isOne) {
            this.set.delete(idx);
        } else {
            this.set.add(idx);
        }
    }

    flip(): void {
        this.isOne = !this.isOne;
    }

    all(): boolean {
        return this.isOne ? this.set.size === this.size : this.set.size === 0;
    }

    one(): boolean {
        return this.isOne ? this.set.size > 0 : this.set.size < this.size;
    }

    count(): number {
        if (this.isOne) {
            return this.set.size;
        } else {
            return this.size - this.set.size;
        }
    }

    toString(): string {
        if (this.isOne) {
            const arr = new Array(this.size).fill('0');
            for (const idx of this.set) {
                arr[idx] = '1';
            }
            return arr.join('');
        } else {
            const arr = new Array(this.size).fill('1');
            for (const idx of this.set) {
                arr[idx] = '0';
            }
            return arr.join('');
        }
    }
}


export {BitSet}