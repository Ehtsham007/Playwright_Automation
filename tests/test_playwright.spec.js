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
const username= page.locator('Input#username');
const btnclick= page.locator('#signInBtn');
const itemTitle = page.locator(".card-body a");
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title());
await username.type('ehtsham@gmail.com');
await page.locator("[type='password']").type('learning');
await btnclick.click();
console.log(await page.locator("[style*='block']").textContent());
//automaticaly wait for 5 sec to see if the text will appear 
await expect(page.locator("[style*='block']")).toContainText("Incorrect");

await username.fill("");

await username.fill("rahulshettyacademy");
//race condition
await Promise.all(
[

     page.waitForNavigation(), 
     btnclick.click() ,

]
);

//console.log(await page.locator(".card-body a").first().textContent());
//console.log(await page.locator(".card-body a").nth(1).textContent());
const itemtittleALL= await itemTitle.allTextContents();

console.log(itemtittleALL);


});
