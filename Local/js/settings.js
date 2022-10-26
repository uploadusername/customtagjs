class settings extends HTMLTableCellElement {
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
customElements.define('settings', settings, {
    extends: 'td'
});