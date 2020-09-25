const SinglyLinkedList = require('../Data_Structures/Singly_Linked_List/singlyLinkedList')
let expect = require('chai').expect;
let list, curTail, curLength, poppedTail;

describe('#push()', function() {
  
  context('with no items', function() {
    beforeEach(function() {
      list = new SinglyLinkedList();
    })

    it('should', function() {

    })
  })
})

describe('#pop()', function() {
  
  context('with many items', function() {
    before(function () {
      list = new SinglyLinkedList().push(1).push(2).push(3);
      curTail = list.tail;
      curLength = list.length;
      poppedTail = list.pop();
    })

    it('should return the tail', () => {
      expect(curTail).to.equal(poppedTail);
    })

    it('should decrease the length by 1', function () {
      expect(list.length).to.equal(curLength - 1);
    })

  })

  context('with one item', function() {
    before(function () {
      list = new SinglyLinkedList().push(1);
      list.pop();
    })

    it('should set head to null', function() {
      expect(list.head).to.equal(null);
    })

    it('should set tail to null', function() {
      expect(list.tail).to.equal(null);
    })

    it('should make the list length 0', function() {
      expect(list.length).to.equal(0);
    })
  })

  context('with no items', function() {
    before(function () {
      list = new SinglyLinkedList();
    })

    it('should return undefined', function() {
      expect(list.pop()).to.equal(undefined);
    })
  })
})