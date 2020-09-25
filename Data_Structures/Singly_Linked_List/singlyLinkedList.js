const Node = require('./node');

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
      this.length++;

      return this;
    }

    this.tail.next = item;
    this.tail = item;
    this.length++;

    return this;
  }

  pop() {
    if (!this.length) return undefined;

    let cur = this.head;
    let pre = cur;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;

      return cur;
    }

    while (cur.next) {
      pre = cur;
      cur = cur.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;

    return cur;
  }
}

module.exports = SinglyLinkedList;