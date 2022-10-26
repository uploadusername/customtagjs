function console_function() {
    alert("hello...");
}

function onaddress_function() {
    alert("hello...");
}

// Create a class for the element
class console extends HTMLTableElement {
    constructor() {
        console.info('console created');

        const attr_id = this.getAttribute('id');
        const attr_name = this.getAttribute('name');
        const attr_from_string_array = this.getAttribute('input_box_name');
        const attr_debug = this.getAttribute('debug');
        const attr_output = this.getAttribute('output');
        const attr_display = this.getAttribute('display');
        super()
    }
    connectedCallback() {
        try {
            //alert(observedAttributes());
            this.innerHTML = +'console connected';
            if (typeof this.renderContent === 'function')
                this.renderContent();
        } catch (err) {
            document.getElementById("console1").innerHTML = err.message + ' <br> ';
        }
    }

    renderContent() {
        this.innerHTML = +"console rendered";
        this.innerHTML = this.getAttribute("url");
        for (i = 0; i < this.childNodes.length; i++) {
            if (this.childNodes[i].nodeName == "onaddress") {
                alert(this.childNodes[i].getAttribute("url"));
            }
        }
        console_tag();
    }
}
customElements.define('console', console, {
    extends: 'table'
});