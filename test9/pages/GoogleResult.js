
const I = actor();

module.exports = {
resultPrint: async () => {
let ggl1 = await I.grabValueFrom('#lst-ib');
console.log(`Grabbed text is [${ggl1}]`);
}
  // insert your locators and methods here
}
