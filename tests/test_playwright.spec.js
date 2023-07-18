const {test, expect} = require('@playwright/test');

test('Playwright First testcase' , async ({page})=>

{

//first step 
//const context = await browser.newContext();
//const page = await context.newPage();
await page.goto("http://google.com");

console.log(await page.title());
await expect(page).toHaveTitle("Google");

});

test.only('Playwright Second testcase' , async ({page})=>

{

//first step 
//const context = await browser.newContext();
//const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title());
await page.locator('Input#username').type('ehtsham@gmail.com');
await page.locator("[type='password']").type('eht1234');
await page.locator('#signInBtn').click();
console.log(await page.locator("[style*='block']").textContent());
//automaticaly wait for 5 sec to see if the text will appear 
await expect(page.locator("[style*='block']")).toContainText("Incorrect");


});
