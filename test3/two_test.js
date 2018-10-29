
Feature('basic webtesting');

Scenario('GitHub', (I) => {
I.amOnPage('https://github.com');
I.see('GitHub');
I.see('Developer');
});
