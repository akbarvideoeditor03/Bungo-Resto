import RestoApiSource from "../../data/resto-data";
import UrlParser from "../../routes/url-parser";
import { restoDetail } from "../templates/template-creator";
import LikeButtonInit from "../../utils/like-button-init";

const DetailPage = {
    async render() {
        return `
        <div id="detail" class="details-position"></div>
        <div id="likeButtonContainer"></div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner(); 
        const resto = await RestoApiSource.restoDetailPage(url.id);
        const restoContainer = document.querySelector('#detail');
        console.log(resto.customerReviews);
        restoContainer.innerHTML = restoDetail(resto);
        
        LikeButtonInit.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            resto: {
                id: resto.id,
                name: resto.name,
                city: resto.city,
                description: resto.description,
                pictureId: resto.pictureId,
            },
        });
    },
};

export default DetailPage;