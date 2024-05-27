Feature('Unliking Resto');
Scenario('unliking one resto', async ({ I }) => {
    I.amOnPage('/'); 
    I.waitForElement('.resto_item .details .resto-link', 5); 
    I.seeElement('.resto_item .details .resto-link'); 
    I.click(locate('.resto_item .details .resto-link').first()); 

    I.waitForElement('#likeButton'); 
    I.seeElement('#likeButton'); 
    I.click('#likeButton'); 

    I.amOnPage('/#/like'); 
    I.waitForElement('.resto_item .details .resto-link', 5); 
    I.seeElement('.resto_item .details .resto-link'); 
    I.click(locate('.resto_item .details .resto-link').first()); 

    I.waitForElement('#likeButton'); 
    I.seeElement('#likeButton'); 
    I.click('#likeButton'); 
});