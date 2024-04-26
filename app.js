class LinkedList {
    constructor() {
        this.head = null;
    }
    
    addFirst(data, nextNode) {
        this.head = new Node(data, nextNode);
    }

    getFirst() {
        if (this.head == null) {
            console.log("List is empty");
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
console.log(l1.getLast());