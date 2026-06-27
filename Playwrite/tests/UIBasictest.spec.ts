// by default is async so use await
import  {test,expect} from '@playwright/test'
//fixture - global varibale : page, browser
test('verify page title',async({page})=>{

await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
await expect(page).toHaveTitle("Practice Page")

})