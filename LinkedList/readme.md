# Linked Lists

- A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations.
- Linked List can be defined as collection of objects called nodes that are randomly stored in the memory.
- On the basis of how each node stores the data the linked list is classified into different types.

## Types of Linked lists

### Single Linked List

- A linked list consists of nodes where each node contains a data field and a reference(link) to the next node in the list.
- The first node is called the head and the last node is called the tail.
- The reference of the tail in single linked list will be null as there is no element after it.

![](https://static.javatpoint.com/ds/images/linked-list.png)

### Double Linked List

- Doubly linked list is a type of linked list in which a node contains a reference to the previous as well as the next node in the sequence.
- A node consists of three parts: node data, reference to the next node in sequence (next pointer) , reference to the previous node (previous pointer).

![](https://static.javatpoint.com/ds/images/doubly-linked-list2.png)

### Circular Single Linked List

- Circular single linked list doesn't contain NULL in any of the node.
- In a circular Singly linked list, the last node of the list contains a pointer to the first node of the list.

![](https://static.javatpoint.com/ds/images/circular-singly-linked-list.png)

### Circular Double Linked List

- Circular double linked list doesn't contain NULL in any of the node.
- The last node of the list contains the address of the first node of the list. - The first node of the list also contain address of the last node in its previous pointer.

![](https://static.javatpoint.com/ds/images/circular-doubly-linked-list.png)

## Difference between array and linked lists

### Arrays

- Arrays store elements in contiguous memory locations.
- Addresses of the element can be calculated easily and this allows faster access to an element at a specific index (Random Access).
- Size of the array is fixed in most programming languages and size cannot be altered at run-time and its always the upper limit of the array irrespective of whether that much is used.
- Inserting a new element in an array of elements is expensive because room has to be created for the new elements and to create room existing elements have to be shifted.Same for deletion.

### Linked lists

- Dynamic size and memory allocation happens at run-time.
- Ease of insertion/deletion.
- Random access is not allowed. We have to access elements sequentially starting from the first node. So we cannot do a binary search with linked lists.
- Extra memory space for a pointer is required with each element of the list.

## Practical examples of Linked lists

- Prev/Next/InLoop functionalities in any music app.
- Circular linked list are mostly used in task maintenance in operating systems. There are many examples where circular linked list are being used in computer science including browser surfing where a record of pages visited in the past by the user, is maintained in the form of circular linked lists and can be accessed again on clicking the previous button.
