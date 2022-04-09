class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head, size = 0) {
    this.head = head;
    this.size = size;
  }

  //  insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  // ¸insert last node
  // ¸insert at index
  // get at index
  // remove at index
  // ¸print list data
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
console.log(ll);
