(function() {
    "use strict";

    const template = `
    <form onsubmit="searching()">
        <label for="search">Search</label>
        <input id="search" name="search" type="text" placeholder="Search...">

        <button id="submit" type="submit">Search</button>
    </form>
    `;

    class SearchBar extends HTMLElement {

        static get observedAttributes() { return ['value']; }

        constructor() {
            super();
            let shadowRoot = this.attachShadow({mode: 'open'});
            shadowRoot.innerHTML = template;

            this.addEventListener("keyup", function(e) {
                this.value = this.shadowRoot.querySelector('#search').value;
                var key = e.which || e.keyCode;
                if(key === 13) {
                    console.log(this.value);
                }
            });
        }

        get value() {
            //return this.shadowRoot.querySelector('#search').getAttribute('value', newVal);
            return this.getAttribute('value');
        }

        set value(newVal) {
            this.shadowRoot.querySelector('#search').setAttribute('value', newVal);
            this.setAttribute('value', newVal);
        }

        attributeChangedCallback(attrName, oldValue, newValue) {
            console.log('attr changed');
            if(attrName == 'value') {
                this.value = newValue;
            }
        }
    }

    window.customElements.define('search-input', SearchBar);
})();