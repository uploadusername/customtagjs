const http = require('http-request');
function download_function(url) {
    var parse_resp = '';
// shorthand syntax, buffered response
http.get(url, function (err, res) {
	if (err) {
		console.error(err);
		return;
	}
	
	parse_resp = res.code;
	//console.log(res.code, res.headers, res.buffer.toString());
});

}

// Create a class for the element
class download extends HTMLTableElement {
    renderContent() {
        var url = this.getAttribute("url");
		if(!url) {
			for (i = 0; i < this.childNodes.length; i++) {
				if (this.childNodes[i].nodeName == "onaddress") {
					download_function(this.childNodes[i].getAttribute("url"));
				}
			}
        }
		else {
			download_function(url);
		}
    }
}
customElements.define('download', download, {
    extends: 'table'
});