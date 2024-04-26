class LinkedList {
    constructor() {
        this.head = null;
    }
    
    isEmpty() {
        if (this.head == null) return "List is empty";
    }

    addFirst(value, nextNode) {
        this.head = new Node(value, nextNode);
    }

    getFirst() {
        this.isEmpty();
        return this.head;
    }

    addLast(value, nextNode) {
        if (this.head == null) {
            this.addFirst(value, nextNode);
        } else {
            let tempNode = this.head;
            while (tempNode.nextNode != null) tempNode = tempNode.nextNode;
            tempNode.nextNode = new Node(value, nextNode);
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

    contains(value) {
        this.isEmpty();
        let tempNode = this.head;
        if (tempNode.data == value) return true;
        while (tempNode.nextNode != null) {
            tempNode = tempNode.nextNode;
            if (tempNode.data == value) {
                return true;
            }
        }
        return false;
    }

    find(value) {
        if (this.contains(value)) {
            let tempNode = this.head;
            if (tempNode.data == value) return tempNode;
            while (tempNode.nextNode != null) {
                tempNode = tempNode.nextNode;
                if (tempNode.data == value) return tempNode;
            }
        } else {
            return "There is no such a Node with the given value: " + value;
        }
    }

    toString() {
        let string = "";
        let tempNode = this.head;
        string = "( " + tempNode.data + " ) -> "; 
        while (tempNode.nextNode != null) {
            tempNode = tempNode.nextNode;
            string += "( " + tempNode.data + " ) -> ";
        }
        string += "null";
        return string;
    }

    insertAt(value, index) {
        if (index == 0 || index < 0) {
            let head = this.getFirst();
            this.addFirst(value, head);
        } else if (index > this.getSize()) {
            this.addLast(value);
        } else {
            let beforeNode = this.at(index - 1);
            let atNode = beforeNode.nextNode;
            let newNode = new Node(value, atNode);
            beforeNode.nextNode = newNode;
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
l1.addLast('cke');
l1.addLast('ckek');
l1.addLast('ckell');
l1.insertAt('kesha', 5)
console.log(l1.toString());
