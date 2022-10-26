function file_function() {
    alert("hello...");
}

function onaddress_function() {
    alert("hello...");
}

// Create a class for the element
class file extends HTMLTableElement {
    constructor() {
        file.info('file created');

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
            this.innerHTML = +'file connected';
            if (typeof this.renderContent === 'function')
                this.renderContent();
        } catch (err) {
            document.getElementById("file1").innerHTML = err.message + ' <br> ';
        }
    }

    renderContent() {
        this.innerHTML = +"file rendered";
        this.innerHTML = this.getAttribute("url");
        for (i = 0; i < this.childNodes.length; i++) {
            if (this.childNodes[i].nodeName == "onaddress") {
                alert(this.childNodes[i].getAttribute("url"));
            }
        }
        file_tag();
    }
}
customElements.define('file', file, {
    extends: 'table'
});