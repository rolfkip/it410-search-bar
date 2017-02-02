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

        constructor() {
            super();
            let shadowRoot = this.attachShadow({mode: 'open'});
            shadowRoot.innerHTML = template;

            /*this.addEventListener("keypress", function(e) {
                
                var key = e.which || e.keyCode;
                if(key === 13) {
                    
                }
            });*/
        }

        get value() {
            return this.getAttribute('value');
        }

        set value(newVal) {
            this.setAttribute('value', newVal);
        }
    }

    window.customElements.define('search-bar', SearchBar);
})();