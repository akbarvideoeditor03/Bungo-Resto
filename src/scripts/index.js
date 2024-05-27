import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/loading.css';
import '../scripts/views/component/header';
import '../scripts/views/component/footer';
import App from '../scripts/views/app';
import swRegister from './utils/sw-register';
import Swal from 'sweetalert2';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const START = 10;
const NUMBER_OF_IMAGES = 100;
START;
NUMBER_OF_IMAGES;

const allCheck = async () => {
    let internetConnectionLost = false;

    const removeLoadingIfNoInternet = () => {
        if (internetConnectionLost) {
            const loader = document.querySelector('.loader');
            if (loader && loader.parentNode) {
                loader.parentNode.removeChild(loader);
            }
        }
    };

    const checkInternetConnection = () => {
        setTimeout(() => {
            if (!navigator.onLine) {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Ups, tidak ada koneksi internet",
                    showConfirmButton: false,
                    timer: 3000
                });
                internetConnectionLost = true;
                removeLoadingIfNoInternet();
            }
        }, 1000);
    };

    checkInternetConnection();

    window.addEventListener("load", () => {
        const muatData = document.querySelector(".loader");
        muatData.classList.add("loader-hidden");
        muatData.addEventListener("transitionend", () => {
            if (muatData.parentNode) {
                muatData.parentNode.removeChild(muatData);
            }
        });
    });

    try {
        const skipLink = document.querySelector('.skip-link');
        const mainBody = document.querySelector('#main');
        const app = new App({
            button: document.querySelector('#hamburger'),
            drawer: document.querySelector('#drawer'),
            content: document.querySelector('#main'),
        });

        window.addEventListener('hashchange', () => {
            app.renderPage();
        });

        window.addEventListener('load', () => {
            app.renderPage();
            swRegister();
        });

        skipLink.addEventListener('click', (event) => {
            event.preventDefault();
            mainBody.focus();
        });
    } catch (error) {
        console.log(error);
    }
};

allCheck();
