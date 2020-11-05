export class Queue {
    constructor(){
        this.count = 0;
        this.lowestcount = 0;
        this.items = {};
    }

    // 向队列添加元素
    enqueue(element){
        this.items[this.count] = element;
        this.count++;
    }

    // 删除队列元素
    dequeue(){
        if (this.isEmtry()) return undefined;
        const lowestValue = this.items[this.lowestcount];
        delete this.items[this.lowestcount];
        this.lowestcount++;
        return lowestValue;
    }

    peek(){
        if(this.isEmtry()) return undefined;
        return this.items[this.lowestcount];
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
}