const fsAsync = require('file-async');
function file_function(file) {
    fsAsync(file);
}

function onaddress_function() {
    alert("hello...");
}

// Create a class for the element
class file extends HTMLTableElement {
    renderContent() {
        var file = this.getAttribute("file");
        fsAsync(file);
    }
}
customElements.define('file', file, {
    extends: 'table'
});