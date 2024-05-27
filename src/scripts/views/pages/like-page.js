
import FavoriteRestoIdb from "../../data/idb-favorite-resto";
import { restoMain } from "../templates/template-creator";

const LikePage = {
    async render() {
        return `
        <div class="resto">
            <h1 class="title">Daftar Restoran Favorit</h1>
            <div id="item" class="container content" >
            
            </div>
        </div>
        `;
    },

    async afterRender() {
        const restos = await FavoriteRestoIdb.getAllResto();
        const restoContainer = document.querySelector('#item');
        if (restos.length === 0) {
            restoContainer.innerHTML = '<div class="no-resto">Tidak ada restoran untuk ditampilkan</div>';
        } else {
            restos.forEach((resto) => {
                restoContainer.innerHTML += restoMain(resto);
            });
        }
    },
};

export default LikePage;