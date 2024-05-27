Feature('Seeing About Us');
Scenario('seeing about us', async ({ I }) => {

    I.amOnPage('/');
    I.waitForElement('.nav-open .nav li a', 5); 
    I.seeElement('.nav-open .nav li a'); 
    I.click(locate('.nav-open .nav li a').first());
});