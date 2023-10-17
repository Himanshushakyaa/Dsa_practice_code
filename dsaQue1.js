// program to implement queue data structure

class Queue{
      
     constructor(){
        this.items ={};
        this.headIndex = 0;
        this.tailIndex = 0 ;

     }
     enqueue(element){
        this.items[this.tailIndex] = element;
        this.tailIndex++;
     }
     dequeue() {
        let removedElement = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++;
        return removedElement;
    }

     peek(){
        let peekElment = this.items[this.headIndex];
        return peekElment;

     }

     size(){
        return this.tailIndex - this.headIndex 
    }
    isEmpty(){
        if (this.tailIndex - this.headIndex == 0 ){
            return true;

        }else{
            return false;

        }   
    }

    clear(){
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;

    }
}

let queue = new Queue();


// add items

queue.enqueue(8)
queue.enqueue(7)
queue.enqueue(5)
queue.enqueue(2)
console.log("After clearing the Queue")
console.log(queue.items)

//remove first item
queue.dequeue();
console.log("Queue after deleting the first item: ")
console.log(queue.items);
console.log("First item of the queue = " + queue.peek())
console.log(queue.items)
queue.dequeue()
queue.clear();
console.log("after clearign the queue :")
console.log(queue.items)