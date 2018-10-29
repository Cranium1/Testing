
Feature('frames');

Scenario('GitHub frames', (I) => {
I.amOnPage('https://github.com');
I.see('GitHub is a development platform');
within('.HeaderMenu', () => {
  I.see('Features');
  I.dontSee('GitHub is a development platform');
  I.click('Sign up');
});
I.saveScreenshot('Sign up.png');
});