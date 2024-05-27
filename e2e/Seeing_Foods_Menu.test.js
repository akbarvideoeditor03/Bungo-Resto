Feature('Seeing Foods Menu');
Scenario('seeing resto menu', async ({ I }) => {

    I.amOnPage('/');
    I.waitForElement('.resto_item .details .resto-link', 5); 
    I.seeElement('.resto_item .details .resto-link'); 
    I.click(locate('.resto_item .details .resto-link').first()); 

    I.waitForElement('.details h4'); 
    I.seeElement('.details h4'); 
});