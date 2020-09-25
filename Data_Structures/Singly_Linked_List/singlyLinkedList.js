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
    }
    else {
      this.tail.next = item;
      this.tail = item;
    }
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

  shift() {
    if (!this.length) return undefined;

    let curHead = this.head;
    this.head = curHead.next;
    this.length--;

    if(this.length === 0) this.tail = null;

    return curHead;
  }

  unshift(val) {
    let item = new Node(val);

    // If list is empty, set new node to head/tail
    if (!this.head) {
      this.head = item;
      this.tail = item;
    }
    // Else set item next to the current head and
    // the head to the current node
    else {
      item.next = this.head;
      this.head = item;
    }
    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let curHead = this.head;
    let counter = 0;

    while(counter !== index) {
      curHead = curHead.next;
      counter++;
    }

    return curHead;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }

    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let prev = this.get(index - 1);
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;

    return true;

  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    let prev = this.get(index - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.length--;

    return removed;

  }
}

module.exports = SinglyLinkedList;