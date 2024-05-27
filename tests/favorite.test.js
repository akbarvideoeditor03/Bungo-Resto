import FavoriteRestoIdb from '../src/scripts/data/idb-favorite-resto';
import LikeButtonInitiator from '../src/scripts/utils/like-button-init';

describe('Liking a restaurant', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    };

    beforeEach(() => {
        addLikeButtonContainer();
    });


    //TES 1
    it('TEST 1 : should show the like button when the restaurant has not been liked before', async () => {
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            resto: {
                id: 1,
            },
        });
        expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
    });


    //TES 2
    it('TEST 2 : should not show the unlike button when the restaurant has not been liked before', async () => {
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            resto: {
                id: 1,
            },
        });
        expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
    });


    //TES 3
    it('TEST 3 : should be able to like the restaurant', async () => {
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            resto: {
                id: 1,
            },
        });
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));

        const resto = await FavoriteRestoIdb.getResto(1);
        expect(resto).toEqual({
            id: 1
        });

        await FavoriteRestoIdb.deleteResto(1);
    });


    //TES 4
    it('TEST 4 : should not add a restaurant again when its already liked', async () => {
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            resto: {
                id: 1,
            },
        });

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        expect(await FavoriteRestoIdb.getAllResto()).toEqual([{
            id: 1
        }]);
        await FavoriteRestoIdb.deleteResto(1);
    });


    //TES 5
    it('TEST 5 : should not add a restaurant when it has no id', async () => {
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            resto: {},
        });
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
    });
});