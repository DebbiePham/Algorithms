/**
 * Class to represent a stack using an array to store the stacked items.
 * Follows a LIFO (Last In First Out) order where new items are stacked on
 * top (back of array) and removed items are removed from the top / back.
 */

//Stack implemented with an array -- too easy, lets kick it up a notch
class Stack {
    /**
     * The constructor is executed when instantiating a new Stack() to construct
     * a new instance.
     * @returns {Stack} This new Stack instance is returned without having to
     *    explicitly write 'return' (implicit return).
     */
    constructor() {
        this.items = [];
    }

    /**
     * Adds a new given item to the top / back of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to be added to the top / back.
     * @returns {number} The new length of this stack.
     */
    push(item) {
        this.items.push(item);
    }

    /**
     * Removes the top / last item from this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The removed item or undefined if this stack was empty.
     */
    pop() {
        return this.items.pop();
    }

    /**
     * Retrieves the top / last item from this stack without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The top / last item of this stack.
     */
    peek() {
        return this.items[this.items.length - 1];
    }

    /**
     * Returns whether or not this stack is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
        return this.items.length === 0;
    }

    /**
     * Returns the size of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() {
        return this.items.length;
    }
}

//use this class for your nodes in the linked list version of Stack
class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

//Stack implemented with a singly linked list, now we're talking
class LinkedListStack {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    push(item) {
        let newNode = new StackNode(item);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    pop() {
        if(this.isEmpty()){
            return null;
        }
        let poppedItem = this.head.data;
        this.head = this.head.next;
        this.length--;
        return poppedItem;
    }

    peek() {
        if(this.isEmpty()){
            return null;
        }
        return this.head.data;
    }


    // check if the stack is empty
    isEmpty() {
        return this.head === null;
    }

    size() {
        //your code here
        //BONUS: how to make size O(1)?
        return this.length;
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

const stack = new LinkedListStack();

console.log(stack.isEmpty(), "expected true");
console.log("------ push -----")
stack.push(1);
console.log(stack.isEmpty(), "expected false");
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);

stack.pop();
console.log("------ size -----")
console.log(stack.size());
console.log("------ print -----")
stack.print();