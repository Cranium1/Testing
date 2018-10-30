
Feature('Grabbing elements');

Scenario('Grabbing from nu.nl', async (I) => {
I.amOnPage('https://www.nu.nl');
I.see('Het laatste nieuws');
let txt1 = await I.grabTitle();
console.log(`Grabbed text is [${txt1}]`);
});
