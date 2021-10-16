// * Creating a NODE class which have the element and link to the next element

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = null;
  }
}

// * Creating a LINKED LIST class

class LinkedList {
  constructor() {
    this.head = null;
  }
  // * To insert an element in linked list
  insertNode(ele) {
    // * Creating a new node
    var node = new Node(ele);
    // * If head is null which means no elements present then
    // * add new node as head
    if (!this.head) this.head = node;
    else {
      // * set current as head
      var current = this.head;
      // * For getting the last node reference into current
      while (current.next) {
        current = current.next;
      }
      // * Now current will hold the last node so far and
      // * we add our new node
      current.next = node;
    }
  }

  // * Insert node at the beginning of the linked list
  insertNodeAtBeg(ele) {
    var current = this.head;
    var node = new Node(ele);
    if (current) {
      node.next = current;
      this.head = node;
    }
  }
  // * Insert before a particular element of the linked list
  insertNodeBef(ele, data) {
    var node = new Node(data);
    var current = this.head;
    var prev = current;
    while (current) {
      if (current.data === ele) {
        node.next = current;
        prev.next = node;
        break;
      } else {
        prev = current;
        current = current.next;
      }
    }
  }

  // * Insert after a particular element of the linked list
  insertNodeAft(ele, data) {
    var node = new Node(data);
    var current = this.head;
    while (current) {
      if (current.data === ele) {
        node.next = current.next;
        current.next = node;
        break;
      } else {
        current = current.next;
      }
    }
  }

  // * Insert element at a particular index
  insertAtIndex(data, index) {
    var node = new Node(data);
    var current = this.head;
    var prev = current;
    var i = 0;
    while (current) {
      if (index - 1 === i) {
        prev.next = node;
        node.next = current;
        break;
      } else {
        i++;
        prev = current;
        current = current.next;
      }
    }
  }

  // * Delete element at a particular index from
  deleteIndex(index) {
    var current = this.head;
    var prev = current;
    var i = 0;
    while (current) {
      if (index === 0) {
        this.head = current.next;
        break;
      }
      if (index - 1 === i) {
        prev.next = current.next;
        break;
      } else {
        i++;
        prev = current;
        current = current.next;
      }
    }
  }

  // * To print the elements of linked list with their indexes
  printList() {
    var index = 0;
    var current = this.head;
    while (current) {
      console.log(index++, current.data);
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.insertNode(8);
list.insertNode(3);
list.insertNode(5);
list.insertNodeAtBeg(4);
list.insertNodeAtBeg(9);
list.insertNodeBef(8, 10);
list.insertNodeAft(8, 7);
list.insertAtIndex(6, 3);
list.deleteIndex(4);
list.deleteIndex(0);
list.printList();
