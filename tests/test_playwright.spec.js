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

test('Playwright Second testcase' , async ({page})=>

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

test('UI controles' , async ({page})=>
{

    const username= page.locator('Input#username');
    const password = page.locator("[type='password']");
    const SignIn= page.locator('#signInBtn');
    const DocumentLink = page.locator("[href*= 'documents-request']");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await username.type('rahulshettyacademy');
    await password.type('learning');
    const DropDown = await page.locator('select.form-control');
    await DropDown.selectOption('consult');
    const Radio = await page.locator('.radiotextsty').last().click();
    await page.locator('#okayBtn').click();
    await expect(page.locator('.radiotextsty').last()).toBeChecked();
    page.locator("[name='terms']").click();
    await expect(page.locator("[name='terms']")).toBeChecked();
    await page.locator("[name='terms']").uncheck();
    expect(await page.locator('#terms').isChecked()).toBeFalsy();
    await expect(DocumentLink).toHaveAttribute("class","blinkingText");

//await used where action can be perfromed




});

test('Child Windows Handle' , async ({browser})=>

{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const DocumentLink = page.locator("[href*= 'documents-request']");

    const [newpage] = await Promise.all([
            context.waitForEvent('page'),
            DocumentLink.click(),

        ]
    )

    const text = await newpage.locator(".red").textContent();
    const textarray = text.split("@");
    const domain = textarray[1].split(" ")[0];

    console.log(domain);


   

}
);


/*test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('button', { name: 'Alle akzeptieren' }).click();
  await page.locator('.SDkEP').click();
  await page.getByRole('combobox', { name: 'Suche' }).click();
  await page.getByRole('combobox', { name: 'Suche' }).fill('https://www.esprit-engineering.de');
  await page.getByRole('combobox', { name: 'Suche' }).press('Enter');
  await page.getByRole('link', { name: 'Esprit Engineering: Startpage Esprit Engineering https://www.esprit-engineering.de' }).click();
  await page.getByRole('button', { name: 'Cookies zulassen' }).click();
  await page.getByRole('link', { name: ' Offene Stellen' }).click();
  await page.getByRole('link', { name: 'Jetzt bewerben' }).click();
  await page.getByRole('link', { name: 'Alle' }).click();
  await page.getByRole('link', { name: 'Absolventen' }).click();
  await page.getByRole('link', { name: 'Studenten' }).click();
  await page.getByRole('button', { name: 'Zurück' }).click();
  await page.locator('#menu-item-51').getByRole('link', { name: 'Über uns' }).click();
  await page.getByRole('link', { name: 'Karriere' }).click();
  await page.locator('#menu-item-48').getByRole('link', { name: 'Kontakt' }).click();
  await page.getByRole('radio').nth(1).check();
  await page.getByPlaceholder('Name*').click();
});*/

