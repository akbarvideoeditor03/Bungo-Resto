import RestoApiSource from "../../data/resto-data";
import { restoMain } from "../templates/template-creator";

const MainPage = {
    async render() {
        return `
        <div id="main-content" class="resto">
            <h1 class="title">Daftar Resto</h1>
            <div id="item" class="container content" >
            
            </div>
        </div>
        `;
    },

    async afterRender() {
        const restos = await RestoApiSource.restoMainPage();
        const restoContainer = document.querySelector('#item');
        restos.forEach((resto) => {
            restoContainer.innerHTML += restoMain(resto);
        });
    },
};

export default MainPage;