
Feature('frames');

Scenario('random.org', (I) => {
I.amOnPage('https://www.random.org');
I.see('RANDOM.ORG');
within('//*[@id="invisible"]/div[9]/div[2]', () => {
I.click('Integer Generator');
});
I.fillField('num', '5');
I.fillField('min', '1');
I.fillField('max', '1000');
I.fillField('col', '1');
I.click('Get Numbers');
I.saveScreenshot('RandomNumbers.png');

});
