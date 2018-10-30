
Feature('page visiting and grab');

Scenario('Google PO', async (I, googleEntryPage, googleResultPage) => {
//I.amOnPage('https://www.google.com/');
//I.see('Google');
//I.waitForElement('#lst-ib', 20);
//I.fillField('#lst-ib', 'Nijmegen');
//I.wait(3);
//I.click('Google zoeken');
//I.wait(5);
//I.saveScreenshot('Google_search.png');
//let ggl1 = await I.grabValueFrom('#lst-ib');
//console.log(`Grabbed text is [${ggl1}]`);
googleEntryPage.search('Nijmegen');
googleResultPage.resultPrint();
});
