class LinkedList {
    constructor() {
        this.head = null;
    }
    
    addFirst(data, nextNode) {
        this.head = new Node(data, nextNode);
    }

    getFirst() {
        if (this.head == null) {
            return "List is empty";
        } else {
            return this.head;
        }
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
        if (this.head == null) return "List is empty";
        let tempNode = this.head;
        for (let i = 0; i < index; i++) tempNode = tempNode.nextNode;
        if (tempNode == null) return "Out of Bounds";
        return tempNode;
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
console.log(l1.at(1));