
Feature('basic webtesting');

Scenario('Google', (I) => {
I.amOnPage('https://www.google.com');
I.see('Google');
});
