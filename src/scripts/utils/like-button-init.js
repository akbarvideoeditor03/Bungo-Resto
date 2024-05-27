import { likeButton, likedButton } from "../views/templates/template-creator";
import FavoriteRestoIdb from "../data/idb-favorite-resto";
import Swal from "sweetalert2";

const LikeButtonInit = {
    async init({ likeButtonContainer, resto}) {
        this._likeButtonContainer = likeButtonContainer;
        this._resto = resto;

        await this._renderButton();
    },

    async _renderButton() {
        const {id} = this._resto;

        if (await this._isRestoExist(id)) {
            this._renderLiked();
        } else {
            this._renderLike();
        }
    },

    async _isRestoExist(id) {
        const resto = await FavoriteRestoIdb.getResto(id);
        return !!resto;
    },

    _renderLike() {
        this._likeButtonContainer.innerHTML = likeButton();

        const likeBtn = document.querySelector('#likeButton');
        likeBtn.addEventListener('click', async() => {
            await FavoriteRestoIdb.putResto(this._resto);
            this._renderButton();
            Swal.fire({
                title: "Terima Kasih",
                text: "Kami senang atas favorit Anda",
                confirmButtonText: "Sama-sama",
                imageUrl: "https://t3.ftcdn.net/jpg/03/87/95/84/360_F_387958474_TOhBZxEZqGTqKrLulfHXVwJOoiQbLDYf.jpg",
                imageWidth: 250,
                imageHeight: 250,
                imageAlt: "Custom image"
            });
        });
    },

    _renderLiked() {
        this._likeButtonContainer.innerHTML = likedButton();
        const likeBtn = document.querySelector('#likeButton');
        likeBtn.addEventListener('click', async () => {
            await FavoriteRestoIdb.deleteResto(this._resto.id);
            this._renderButton();
        });
    },
};

export default LikeButtonInit;