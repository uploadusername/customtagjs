function js_chart() {
// first
JSC.Chart("chartDiv", {
  series: [
    {
      points: [{ x: "A", y: 10 }, { x: "B", y: 5 }]
    }
  ]
});

// next
JSC.fetch("./data.csv")
  .then(response => response.text())
  .then(text => {
    //Use csv text
  });
  
}

function encrypt_file(encrypt_js_file) {
	// Encrypt
	var ciphertext = CryptoJS.AES.encrypt(encrypt_js_file, 'secret key 123');
	console.log(ciphertext);
}

function decrypt_file(decrypt_js_file) {
	// Decrypt
	var bytes = CryptoJS.AES.decrypt(decrypt_js_file, 'secret key 123');
	var plaintext = bytes.toString(CryptoJS.enc.Utf8);
	console.log(plaintext);
}

function iframeDidLoad() {	
	var iframe = document.getElementById('iframe_1');
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

	// Check if loading is complete
    if (  iframeDoc.readyState == "complete" || iframeDoc.readyState == "interactive" ) {
        iframe.contentWindow.alert("Hello");
		alert(iframeDoc.body.innerHTML);
        iframe.contentWindow.onload = function(){        
        };
    } else {
		alert("...");
		document.getElementById('iframe_1').src = "https://select2.org/data-sources/ajax";
	}
}

function shell_cmd() {
	alert("1");
	var shell = WScript.CreateObject("WScript.Shell");
	shell.Run("cmd.exe");
	alert('a');
}

function onrequest(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}


function save_file(fileContent) {
	//var fileContent = "My epic novel that I don't want to lose.";
	var bb = new Blob([fileContent ], { type: 'text/plain' });
	var a = document.createElement('a');
	a.download = 'download.txt';
	a.href = window.URL.createObjectURL(bb);
	a.click();
}

function firebase(query) {
var playersRef = firebase.database().ref("players/");

playersRef.set ({
   John: {
      number: 1,
      age: 30
   },
	
   Amanda: {
      number: 2,
      age: 20
   }
});

var ref = new Firebase('https://tutorialsfirebase.firebaseio.com');
var playersRef = ref.child("players");
var playersKey = playersRef.key();

console.log(playersKey);

}

function app-firebase() {}
function app-functions() {}
function dform() {}
function app-modules() {}
function app() {}
function chat() {}
function circle() {}
function console() {}
function contact-book() {}
function diagram() {}
function download() {}
function dynamic-from() {}
function file() {}
function map() {}
function mapper() {}
function margin() {}
function navigation() {}
function nlp() {}
function output() {}
function pending() {}
function progress-bar() {}
function query() {}
function queue() {}
function rectangle() {}
function route() {}
function statistics() {}
function template() {}
function test() {}
function uniform-grid() {}
function workflow() {}
function onrequest() {}
function settings() {}