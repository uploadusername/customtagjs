function queue_function() {
    alert("hello...");
}

function onaddress_function() {
    alert("hello...");
}

// Create a class for the element
class queue extends HTMLTableElement {
    constructor() {
        queue.info('queue created');

        const attr_id = this.getAttribute('id');
        const attr_name = this.getAttribute('name');
        const attr_from_string_array = this.getAttribute('output_name');
        const attr_debug = this.getAttribute('debug');
        const attr_output = this.getAttribute('output');
        const attr_display = this.getAttribute('display');
        super()
    }
    connectedCallback() {
        try {
            //alert(observedAttributes());
            this.innerHTML = +'queue connected';
            if (typeof this.renderContent === 'function')
                this.renderContent();
        } catch (err) {
            document.getElementById("queue1").innerHTML = err.message + ' <br> ';
        }
    }

    renderContent() {
        this.innerHTML = +"queue rendered";
        this.innerHTML = this.getAttribute("url");
        for (i = 0; i < this.childNodes.length; i++) {
            if (this.childNodes[i].nodeName == "onaddress") {
                alert(this.childNodes[i].getAttribute("url"));
            }
        }
        queue_tag();
    }
}
customElements.define('queue', queue, {
    extends: 'table'
});

class Queue {
    constructor() {
        this.items = [];
    }

    // add element to the queue
    enqueue(element) {
        return this.items.push(element);
    }

    // remove element from the queue
    dequeue() {
        if (this.items.length > 0) {
            return this.items.shift();
        }
    }

    // view the last element
    peek() {
        return this.items[this.items.length - 1];
    }

    // check if the queue is empty
    isEmpty() {
        return this.items.length == 0;
    }

    // the size of the queue
    size() {
        return this.items.length;
    }

    // empty the queue
    clear() {
        this.items = [];
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(8);
console.log(queue.items);

queue.dequeue();
console.log(queue.items);

console.log(queue.peek());

console.log(queue.isEmpty());

console.log(queue.size());

queue.clear();
console.log(queue.items);