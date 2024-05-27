class FooterBody extends HTMLElement {
    constructor() {
        super();
        this._style = document.createElement('style');
    }
    connectedCallback() {
        this.render();
    }
    render(){
        this.innerHTML = 
        `
        <p class="text-footer footer-text">
            Copyright © 2024 - <img class="footer-icon" src="./header-icon-white.svg"
            alt="gambar-icon-br"> Bungo Resto
        </p>
        `;
    }
}

customElements.define('footer-body', FooterBody);