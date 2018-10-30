
Feature('page visiting');

Scenario('Google basics', (I) => {
I.amOnPage('https://www.google.com/');
I.see('Google');
I.waitForElement('#lst-ib', 20);
I.fillField('#lst-ib', 'Nijmegen');
I.wait(3);
I.click('Google zoeken');
I.wait(5);
I.saveScreenshot('Google_search.png');
});
