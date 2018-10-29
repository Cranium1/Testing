
Feature('basic webtesting');

Scenario('nu.nl', (I) => {
I.amOnPage('https://www.nu.nl');
I.see('nu');
});
