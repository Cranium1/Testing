
Feature('Advanced webtesting');

Scenario('GitHub login test', (I) => {
I.amOnPage('https://github.com');
I.click('Sign in');
I.see('Sign in to GitHub');
I.fillField('login', 'Jeroentje123456');
I.fillField('password', 'Slechtwachtwoord');
I.pressKey('Enter');
I.see('Incorrect username or password');
});
