/**
 * Simple class to represent node in singly linked list
 * 
 */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * @typedef {Object} Node
 */

/**
 * Singly Linked List Class & Methods
 * 
 */
class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  /**
   * Pushes a new Node onto the end of the list
   * 
   * @param {Node} val 
   */
  push(val) {
    let item = new Node(val);

    // If list is empty, set new node to head/tail
    if (!this.head) {
      this.head = item;
      this.tail = item;
    }

    this.tail.next = item;
    this.tail = item;
    this.length++;

    return this;
  }
}