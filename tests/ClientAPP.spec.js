const {test, expect} = require('@playwright/test');



test('Client APP Test Cases' , async ({page})=>

{

//first step 
//const context = await browser.newContext();
//const page = await context.newPage();
const email= page.locator('#userEmail');
const btnclick= page.locator("[name ='login']");
const password = page.locator('#userPassword');
await page.goto("https://rahulshettyacademy.com/client/");
console.log(await page.title());
await email.type('rashid.ehtsham@gmail.com');
await password.type('IamKing@000');
await btnclick.click();
await page.waitForLoadState('networkidle');
console.log(await page.locator(".card-body b").allTextContents());


/////console.log(await page.locator("[style*='block']").textContent());
//automaticaly wait for 5 sec to see if they
 //text will appear 
//await expect(page.locator("[style*='block']")).toContainText("Incorrect");

//await username.fill("");
//await username.fill("rahulshettyacademy");
//await btnclick.click();

//console.log(await page.locator(".card-body a").first().textContent());
//console.log(await page.locator(".card-body a").nth(1).textContent());

//const itemtittleALL= await itemTitle.allTextContents();

//console.log(itemtittleALL);


});
