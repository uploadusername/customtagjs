function dynamic_form_function() {
    alert("hello...");
}

// Create a class for the element
class dynamic_form extends HTMLTableElement {
    constructor() {
        dynamic_form.info('dynamic_form created');

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
            this.innerHTML = +'dynamic_form connected';
            if (typeof this.renderContent === 'function')
                this.renderContent();
        } catch (err) {
            document.getElementById("dynamic_form1").innerHTML = err.message + ' <br> ';
        }
    }

    renderContent() {
        this.innerHTML = +"dynamic_form rendered";
        this.innerHTML = this.getAttribute("url");
        for (i = 0; i < this.childNodes.length; i++) {
            if (this.childNodes[i].nodeName == "onaddress") {
                alert(this.childNodes[i].getAttribute("url"));
            }
        }
        dynamic_form_tag();
    }
}
customElements.define('dynamic_form', dynamic_form, {
    extends: 'table'
});






$(document).ready(function() {

    $.fn.myFunction2 = function() {

        $("#myform").dform({
            "html": [{
                    // Other attributes
                    "name": "PhoneNumber",
                    "id": "num_phone",
                    "caption": "Phone Number",

                    // Type Classifier
                    "type": "number",
                    "placeholder": "E.g. 0123456789"
                },
                { "type": "br" }
            ]
        });
    }
    $(".call-btn-number").click(function() {

        // Calling myFunction2 on click
        $.fn.myFunction2();
    });
});

customElements.define('app-dynamic-form', class extends HTMLElement {
    connectedCallback() {
        try {

            //alert("done setting");
            // Start file download.
            document.getElementById("dwn-btn").addEventListener("click", function() {
                // Generate download of hello.txt file with some content
                var text = document.getElementById("text-val").value;
                var filename = "hello.txt";

                download(filename, text);
            }, false);
        } catch (err) {
            document.getElementById("123").innerHTML = err.message + ' <br> ';
        }
    }
});