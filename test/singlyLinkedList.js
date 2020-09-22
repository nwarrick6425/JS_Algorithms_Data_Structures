const SinglyLinkedList = require('../Data_Structures/Singly_Linked_List/singlyLinkedList')
let expect = require('chai').expect;
let list;

describe('#pop()', function() {
  beforeEach( function() {
    list = new SinglyLinkedList().push(1);
  })
  
  context('with one item', function() {
    it('should return the tail', () => {
      let curTail = list.tail;
      expect(list.pop()).to.equal(curTail);
    })

    it('should set head to null', function() {
      list.pop();
      expect(list.head).to.equal(null);
    })

    it('should set tail to null', function() {
      list.pop();
      expect(list.tail).to.equal(null);
    })

    it('should decrease the length by 1', function() {
      let curLength = list.length;
      list.pop();
      expect(list.length).to.equal(curLength - 1);
    })

    it('should make the list length 0', function() {
      list.pop();
      expect(list.length).to.equal(0);
    })
  })
})