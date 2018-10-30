
const I = actor();

module.exports = {
search(searchName) {
I.amOnPage('https://www.google.com/');
I.see('Google');
I.waitForElement('#lst-ib', 20);
I.fillField('#lst-ib', searchName);
I.wait(3);
I.click('Google zoeken');
I.wait(5);
I.saveScreenshot('Google_PO.png');	
}
  // insert your locators and methods here
}
