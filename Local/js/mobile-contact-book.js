function contact_book_function() {
    alert("hello...");
}

// Create a class for the element
class contact_book extends HTMLTableElement {
    constructor() {
        contact_book.info('contact_book created');

        const attr_id = this.getAttribute('id');
        const attr_name = this.getAttribute('name');
        const attr_from_string_array = this.getAttribute('height');
        const attr_from_string_array = this.getAttribute('width');
        const attr_debug = this.getAttribute('debug');
        const attr_output = this.getAttribute('output');
        const attr_display = this.getAttribute('display');
        super()
    }
    connectedCallback() {
        try {
            //alert(observedAttributes());
            this.innerHTML = +'contact_book connected';
            if (typeof this.renderContent === 'function')
                this.renderContent();
        } catch (err) {
            document.getElementById("contact_book1").innerHTML = err.message + ' <br> ';
        }
    }

    renderContent() {
        this.innerHTML = +"contact_book rendered";
        this.innerHTML = this.getAttribute("url");
        for (i = 0; i < this.childNodes.length; i++) {
            if (this.childNodes[i].nodeName == "onaddress") {
                alert(this.childNodes[i].getAttribute("url"));
            }
        }
        contact_book_tag();
    }
}
customElements.define('contact_book', contact_book, {
    extends: 'table'
});