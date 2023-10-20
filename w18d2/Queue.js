/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue {
    constructor() {
        this.items = [];
    }

    /**
     * Retrieves the size of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    len() {
        return this.items.length;
    }

    /**
     * Adds a new given item to the back of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to add to the back.
     * @returns {number} The new size of this queue.
     */
    enqueue(item) {
        this.items.push(item);
        return this.items.length;
    }

    /**
     * Removes and returns the first item of this queue.
     * - Time: O(n) linear, due to having to shift all the remaining items to
     *    the left after removing first elem.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    dequeue() {
        return this.items.shift();
    }

    /**
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    front() {
        return this.items[0];
    }

    /**
     * Returns whether or not this queue is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
        return this.items.length === 0;
    }

    print() {
        console.log(this.items);
        return this.items;
    }
}

/* Rebuild the above class using a linked list instead of an array. */

/* 
In order to maintain an O(1) enqueue time complexity like .push with an array
We add a tail to our linked list so we can go directly to the last node
*/

class QueueNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * Retrieves the size of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    len() {
        return this.size
    }

    /**
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean} Indicates if the list is empty.
     */
    isEmpty() {
        return this.size === 0;
    }

    /**
     * Adds a given val to the back of the queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} val
     * @returns {number} The new size of the queue.
     */
    enqueue(val) {
        let newNode = new QueueNode(val);
        if(this.isEmpty()){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size ++;
        return this.size;
    }

    /**
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The removed item.
     */
    dequeue() {
        if(this.isEmpty()) return null;

        let removedNode = this.head.data;
        this.head = this.head.next;
        if(this.size === 1){
            this.tail = null;
        }
        this.size--;
        return removedNode;
    }

    /**
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item.
     */
    front() {
        if(this.isEmpty()) return null;

        return this.head.data;
    }


    /**
     * Enqueues each of the given items.
     * - Time: O(n) linear since enqueue is O(1), n = vals.length.
     * - Space: O(1) constant.
     * @param {Array<any>} vals
     */
    seed(vals) {
        vals.forEach((val) => this.enqueue(val));
    }

    print() {
        let runner = this.head;
        let vals = "";

        while (runner) {
            vals += `${runner.data}${runner.next ? ", " : ""}`;
            runner = runner.next;
        }
        console.log(vals);
        return vals;
    }

}


//Returns boolean whether queues are same length with same elements
//Use only methods from Queue classes, do not directly alter linked list or array
//No extra arrays / objects / etc
//The queues should be in the same order when you're done! 

function CompareQueues(qOne, qTwo) {
    if(qOne.len() != qTwo.len()){
        return false;
    }

    let len = qOne.len();
    let count = 0;
    let isEqual = true;

    while(count < len){
        let itemOne = qOne.dequeue();
        let itemTwo = qTwo.dequeue();

        if(itemOne != itemTwo){
            console.log(itemOne, itemTwo)
            isEqual = false;
        }
        qOne.enqueue(itemOne);
        qTwo.enqueue(itemTwo);
        count++;
    }

    return isEqual;
}

/**
 * Determines whether the sum of the left half of the queue items is equal to
 * the sum of the right half. Avoid indexing the queue items directly via
 * bracket notation, use the queue methods instead for practice.
 * Use no extra array or objects.
 * The queue should be returned to it's original order when done.
 * If queue cannot be evenly divided, return false.
 * - Time: O(?).
 * - Space: O(?).
 * @returns {boolean} Whether the sum of the left and right halves is equal.
 */
function isSumOfHalvesEqual(queue) {
    //Your code here
}

// console.log("------ Array Queue -------");
const arrayQueue1 = new Queue();
arrayQueue1.items = [1, 2, 9, 3, 3, 6];
// console.log(arrayQueue.len(), "-length");
// console.log(arrayQueue.isEmpty(), "isEmpty");
// arrayQueue.enqueue(10);
// arrayQueue.print();
// arrayQueue.dequeue();
// arrayQueue.print();

const arrayQueue2 = new Queue();
arrayQueue2.items = [1, 2, 9, 3, 3, 6];



console.log("------ list Queue -------");
const listQueue1 = new LinkedListQueue();
listQueue1.seed([1, 2, 3, 4, 5, 6, 7]);


const listQueue2 = new LinkedListQueue();
listQueue2.seed([1, 2, 3, 4, 5, 6, 7]);


const listQueue3 = new LinkedListQueue();
listQueue3.seed([1, 2, 3, 4, 5, 6, 8]);


console.log(CompareQueues(listQueue1, listQueue2), "expected true");
console.log(CompareQueues(listQueue1, listQueue3), "expected false");

