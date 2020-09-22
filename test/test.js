const SinglyLinkedList = require('../Data_Structures/Singly_Linked_List/singlyLinkedList')
let expect = require('chai').expect;

let list = new SinglyLinkedList();
list.push(1).push(2).push(3);

describe('#pop()', function () {
    it('should return the tail', () => {
      let curTail = list.tail;
      expect(list.pop()).to.equal(curTail);
    })
  })