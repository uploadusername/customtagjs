function onrequest_function() {
    alert("hello...");
}

function onaddress_function() {
    alert("hello...");
}

// Create a class for the element
class onrequest extends HTMLTableElement {
    constructor() {
        console.info('onrequest created');

        const attr_id = this.getAttribute('id');
        const attr_name = this.getAttribute('name');
        const attr_from_string_array = this.getAttribute('from_string_array');
        const attr_debug = this.getAttribute('debug');
        const attr_output = this.getAttribute('output');
        const attr_display = this.getAttribute('display');
        super()
    }
    connectedCallback() {
        try {
            //alert(observedAttributes());
            this.innerHTML = +'onrequest connected';
            if (typeof this.renderContent === 'function')
                this.renderContent();
        } catch (err) {
            document.getElementById("123").innerHTML = err.message + ' <br> ';
        }
    }

    renderContent() {
        this.innerHTML = +"onrequest rendered";
        this.innerHTML = this.getAttribute("url");
        for (i = 0; i < this.childNodes.length; i++) {
            if (this.childNodes[i].nodeName == "onaddress") {
                alert(this.childNodes[i].getAttribute("url"));
            }
        }
        onrequest_tag();
    }
}
customElements.define('onrequest', onrequest, {
    extends: 'table'
});

// sub tags +++++++++++++++++++++++++++++++++
class onaddress extends HTMLTableCellElement {
    constructor() {
        const attr_id = this.getAttribute('id');
        const attr_name = this.getAttribute('name');
        const attr_debug = this.getAttribute('debug');
        const attr_output = this.getAttribute('output');
        const attr_display = this.getAttribute('display');

        super()
    }
    connectedCallback() {

    }
}
customElements.define('onaddress', onaddress, {
    extends: 'td'
});