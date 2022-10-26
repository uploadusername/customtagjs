function progress_bar_function() {
    alert("hello...");
}

function onaddress_function() {
    alert("hello...");
}

// Create a class for the element
class progress_bar extends HTMLTableElement {
    constructor() {
        progress_bar.info('progress_bar created');

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
            this.innerHTML = +'progress_bar connected';
            if (typeof this.renderContent === 'function')
                this.renderContent();
        } catch (err) {
            document.getElementById("progress_bar1").innerHTML = err.message + ' <br> ';
        }
    }

    renderContent() {
        this.innerHTML = +"progress_bar rendered";
        this.innerHTML = this.getAttribute("url");
        for (i = 0; i < this.childNodes.length; i++) {
            if (this.childNodes[i].nodeName == "onaddress") {
                alert(this.childNodes[i].getAttribute("url"));
            }
        }
        progress_bar_tag();
    }
}
customElements.define('progress_bar', progress_bar, {
    extends: 'table'
});