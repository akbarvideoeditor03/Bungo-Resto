import FavoriteRestoIdb from "../src/scripts/data/idb-favorite-resto";
import LikeButtonInitiator from '../src/scripts/utils/like-button-init';

describe('Unliking a restaurant', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    };

    beforeEach(async () => {
        addLikeButtonContainer();
        await FavoriteRestoIdb.putResto({
            id: 1
        });
    });

    afterEach(async () => {
        await FavoriteRestoIdb.deleteResto(1);
    });

    it('TEST 1 : should display unlike widget when the restaurant has been liked', async () => {
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            resto: {
                id: 1,
            },
        });

        expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
    });

    it('TEST 2 : should not display like widget when the restaurant has been liked', async () => {
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            resto: {
                id: 1,
            },
        });

        expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy();
    });

    it('TEST 3 : should be able to remove liked restaurant from the list', async () => {
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            resto: {
                id: 1,
            },
        });

        document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
        expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
    });

    it('TEST 4 : should not throw error if the unliked restaurant is not in the list', async () => {
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            resto: {
                id: 1,
            },
        });

        await FavoriteRestoIdb.deleteResto(1);
        document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
        expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
    });
});
