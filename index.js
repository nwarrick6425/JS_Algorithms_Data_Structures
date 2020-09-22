const SinglyLinkedList = require('./Data_Structures/Singly_Linked_List/singlyLinkedList');

let list = new SinglyLinkedList();
list.push(1).push(2).push(3);
console.log(list);
list.pop();
list.pop();
list.pop();
console.log(list);