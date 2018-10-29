
Feature('browsing');

Scenario('test something', (I) => {
I.amOnPage('http://www.google.com');
I.see('Google');
I.see('Google offered in');
});
