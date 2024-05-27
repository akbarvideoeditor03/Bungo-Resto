import CONFIG from "../../globals/config";

const restoMain = (resto) => `
<article class="resto_item" id="${resto.id}">
<img crossorigin="anonymous" class="post-item__thumbnail lazyload" data-src="${CONFIG.imageMedium + resto.pictureId}" alt="gambar-resto ${resto.pictureId}">
    <div class="details">
        <div>
            <a href="/#/detail/${resto.id}" class="resto-link">
                <h3>${resto.name}</h3>
            </a>
        </div>
        <div>
            <h4>Deskripsi</h4>
            <p class="text-truncate">${resto.description}</p>
        </div>
        <div>
            <p>Kota : ${resto.city}</p>
        </div>
    </div>
</article>
`;

const restoDetail = (resto) => `
<div class="details-container">
    <div class="box1">
        <img crossorigin="anonymous" src="${CONFIG.imageLarge + resto.pictureId}" class="detail-img lazyload" alt="${resto.name}">
    </div>

    <div class="box2 title-rating">
        <h2>${resto.name}</h2>
        <p>Rating ⭐ : ${resto.rating}</p>
    </div>

    <div class="box3">
        <h3 class="detail-info">Informasi Resto</h3>
        <div class="card details">
            <div>
                <h4>Alamat Restoran</h4>
                <p>${resto.address}, kota ${resto.city}</p>
            </div>
            <div>
                <h4>Kategori</h4>
                <p>${resto.categories.map(category => `${category.name} `).join('')}</p>
            </div>
            <div class="paragraph">
                <h4>Deskripsi</h4>
                <p>${resto.description}</p>
            </div>
        </div>
    </div>

    <div class="box4">
        <div class="card details">
            <h4>Menu Makanan</h4>
            <p>
                ${resto.menus.foods.map(food => `
                <li>${food.name}</li>
                `).join('')}
            </p>

            <h4>Minuman</h4>
            <p>
                ${resto.menus.drinks.map(drink => `
                <li>${drink.name}</li>
                `).join('')}
            </p>
        </div>
    </div>

    <div class="box5">
        <h3 class="review-title">Customer Review <span>(${resto.customerReviews.length})</span></h3>
        <div class="card">
            <div class="review-container">
                ${resto.customerReviews.map(customerReviews =>
                `<div class="review-card">
                    <h5>${customerReviews.name}</h5>
                    <p>${customerReviews.review}</p>
                    <p>${customerReviews.date}</p>
                </div>
                `).join('')}
            </div>
        </div>
    </div>
</div>
`;

const likeButton = () =>
    `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
    `;

const likedButton = () =>
    `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
    `;

export {
    restoMain,
    restoDetail,
    likeButton,
    likedButton,
}