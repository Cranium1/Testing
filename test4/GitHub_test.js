
Feature('Basic webtesting');

Scenario('GitHub', (I) => {
I.amOnPage('https://github.com');
I.fillField('q', 'Yoast'); //poging om het search field te selecteren (name=q), werkte aanvankelijk niet vanwege te lage resolutie
 I.pressKey('Enter');
 I.see('Yoast/wordpress-seo');
});
