//create firebase database reference
var dbRef = firebase.database();
var contactsRef = dbRef.ref('contacts');

//load older conatcts as well as any newly added one...
contactsRef.on("child_added", function(snap) {
    console.log("added", snap.key(), snap.val());
    $('#contacts').append(contactHtmlFromObject(snap.val()));
});

function firebase_function() {
    alert("hello...");
}

// Create a class for the element
class firebase extends HTMLTableElement {
    constructor() {
        firebase.info('firebase created');

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
            this.innerHTML = +'firebase connected';
            if (typeof this.renderContent === 'function')
                this.renderContent();
        } catch (err) {
            document.getElementById("firebase1").innerHTML = err.message + ' <br> ';
        }
    }

    renderContent() {
        this.innerHTML = +"firebase rendered";
        this.innerHTML = this.getAttribute("url");
        for (i = 0; i < this.childNodes.length; i++) {
            if (this.childNodes[i].nodeName == "onaddress") {
                alert(this.childNodes[i].getAttribute("url"));
            }
        }
        firebase_tag();
    }
}
customElements.define('firebase', firebase, {
    extends: 'table'
});

//save contact
$('.addValue').on("click", function(event) {
    event.preventDefault();
    if ($('#name').val() != '' || $('#email').val() != '') {
        contactsRef.push({
            name: $('#name').val(),
            email: $('#email').val(),
            location: {
                city: $('#city').val(),
                state: $('#state').val(),
                zip: $('#zip').val()
            }
        })
        contactForm.reset();
    } else {
        alert('Please fill atlease name or email!');
    }
});

//prepare conatct object's HTML
function contactHtmlFromObject(contact) {
    console.log(contact);
    var html = '';
    html += '<li class="list-group-item contact">';
    html += '<div>';
    html += '<p class="lead">' + contact.name + '</p>';
    html += '<p>' + contact.email + '</p>';
    html += '<p><small title="' + contact.location.zip + '">' +
        contact.location.city + ', ' +
        contact.location.state + '</small></p>';
    html += '</div>';
    html += '</li>';
    return html;
}


customElements.define('app-firebase', class extends HTMLElement {
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