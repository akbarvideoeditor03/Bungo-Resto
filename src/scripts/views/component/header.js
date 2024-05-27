class HeaderBody extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.render();
    }
    render(){
        this.innerHTML = 
        `
        <div class="header_2">
            <p class="header_title">
                <img class="header-icon" src="./header-icon.svg"
                alt="gambar-icon-br">
                Bungo Resto
            </p>
        </div>
        <div class="hero">
            <div class="hero__inner">
                <h1 class="hero__title">
                Selamat Datang di Bungo Resto
                </h1>
                <p class="hero__tagline">
                Nikmati menu masakan yang begitu lezat dan menyegarkan.
                </p>
            </div>
        </div>
        <nav>
            <div class="drawer-open">
                <button id="hamburger">☰</button>
                <nav id="drawer">
                <ul class="nav__list">
                    <li><a href="/"><i class="bi bi-house-door" style="font-size: 150%;" title="Home"></i></a></li>
                    <li><a href="#/like">Favorite</a></li>
                    <li><a href="https://www.instagram.com/ahmadakbar03/" target="_blank">About Us</a></li>
                </ul>
                </nav>
            </div>
            <div class="nav-open">
                <ul class="nav">
                <li><a href="/"><i class="bi bi-house-door" style="font-size: 175%;" title="Home"></i></a></li>
                <li><a href="#/like">Favorite</a></li>
                <li><a href="https://www.instagram.com/ahmadakbar03/" target="_blank">About Us</a></li>
                </ul>
            </div>
        </nav>
        `;
    }
}

customElements.define('header-body', HeaderBody);