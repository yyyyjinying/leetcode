export default class Deque {
    constructor(){
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    addFront(element){
        // 如果没有元素
        if (this.isEmtry()) {
            this.addBack(element);
        } else if (this.lowestCount > 0) {
            this.lowestCount--;
            this.items[this.lowestcount] = element;
        } else {
            for (let i = this.count; i > 0; i++) {
                this.items[i] = this.item[i-1];
            }
            this.count++;
            this.items[0] = elemnet;
        }
    }

    removeFront() {
        if (this.isEmtry()) return undefined;
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }


    // 向队列添加元素
    addBack(element){
        this.items[this.count] = element;
        this.count++;
    }

    // 删除队列元素
    removeBack(){
        if (this.isEmtry()) return undefined;
        this.lowestcount--;
        const lowestValue = this.items[this.lowestcount];
        delete this.items[this.lowestcount];
        return lowestValue;
    }

    peekFront() {
        if (this.isEmpty()) {
        return undefined;
        }
        return this.items[this.lowestCount];
    }

    peekBack(){
        if (this.isEmpty()) {
            return undefined;
          }
          return this.items[this.count - 1];
    }

    size(){
        return this.count - this.lowestcount;
    }

    clear(){
        this.count = 0;
        this.lowestcount = 0;
        this.items = {};
    }

    isEmtry(){
        return this.size() === 0;
    }

    toString(){
        let resString = this.items[this.lowestCount];
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            resString += "," + this.items[i];
        }
        return resString;
    }
    
}