
Feature('grabbing string');

Scenario('Nu.nl text grab', async (I) => {
I.amOnPage('https://www.nu.nl');
I.see('Het laatste nieuws');
let txt1 = await I.grabTextFrom('/html/body/div[4]/div[2]/div[2]/div[2]/div[1]/div[2]/div/div/div/div[4]/div/div/div[2]/a[1]/div[2]/div/div');
//let txt1 = await I.grabTextFrom('html.js.applicationcache.geolocation.history.postmessage.svg.websockets.filereader.localstorage.sessionstorage.no-websqldatabase.webworkers.hashchange.audio.canvas.canvastext.video.webgl.cssgradients.multiplebgs.opacity.rgba.inlinesvg.hsla.supports.svgclippaths.smil.fontface.generatedcontent.textshadow.cssanimations.backgroundsize.borderimage.borderradius.boxshadow.flexbox.csscolumns.csscolumns-width.no-csscolumns-span.csscolumns-fill.csscolumns-gap.csscolumns-rule.csscolumns-rulecolor.csscolumns-rulestyle.csscolumns-rulewidth.no-csscolumns-breakbefore.no-csscolumns-breakafter.no-csscolumns-breakinside.no-cssreflections.csstransforms.csstransforms3d.csstransitions.indexeddb.indexeddb-deletedatabase body#nu.three-columns.page-home.is-optin-ads.is-optin-stats.is-optin-interests.is-optin-social.is-all-optins.nu-main-menu-push div#wrapper clearfix div#container.clearfix div#content_container clearfix div#main.column.two.last.clearfix div.column-content.clearfix div.column.first div.column-content div.column-content-background div.zone.clearfix div#block-324321.block.articlelist div.section-nu.source-normal div.contentlist.plain div.block-wrapper div.block-content.clearfix ul li a.trackevent div.list-content.section-after-colored.clearfix');
console.log(`Grabbed text is [${txt1}]`);
});
