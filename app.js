class LinkedList {
    constructor() {
        this.head = null;
    }
    
    isEmpty() {
        if (this.head == null) return "List is empty";
    }

    addFirst(data, nextNode) {
        this.head = new Node(data, nextNode);
    }

    getFirst() {
        this.isEmpty();
        return this.head;
    }

    addLast(data, nextNode) {
        if (this.head == null) {
            this.addFirst(data, nextNode);
        } else {
            let tempNode = this.head;
            while (tempNode.nextNode != null) tempNode = tempNode.nextNode;
            tempNode.nextNode = new Node(data, nextNode);
        }
    }

    getLast() {
        if (this.head == null) {
            this.getFirst();
        } else {
            let tempNode = this.head;
            while (tempNode.nextNode != null) tempNode = tempNode.nextNode;
            return tempNode;
        }
    }

    getSize() {
        let size = 0;
        if (this.head == null) {
            return size;
        } else {
            size = 1;
            let tempNode = this.head;
            while (tempNode.nextNode != null) {
                tempNode = tempNode.nextNode;
                size++;
            }
            return size;
        }
    }

    at(index) {
        this.isEmpty();
        let tempNode = this.head;
        for (let i = 0; i < index; i++) tempNode = tempNode.nextNode;
        if (tempNode == null) return "Out of Bounds";
        return tempNode;
    }

    pop() {
        this.isEmpty();
        let tempNode = this.head;
        while (tempNode.nextNode.nextNode != null) tempNode = tempNode.nextNode;
        tempNode.nextNode = tempNode;
        tempNode.nextNode = null;

    }
}

class Node {
    constructor(data = null, nextNode = null) {
        this.data = data;
        this.nextNode = nextNode;
    }
}

let l1 = new LinkedList();
l1.addFirst('ke');
l1.addLast('kek');
l1.addLast('cke');
l1.pop();
console.log(l1.getFirst());