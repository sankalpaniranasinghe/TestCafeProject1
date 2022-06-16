import { Selector,t } from "testcafe";
fixture `MyFixture`
    .page `https://portal.qa.kidsxap.com.au/`;

test('Test1', async t => {
    await t
    .typeText('#txtUserName',"pk@xaptech.com.au")
    .typeText('#txtPassword',"Abcd1234$")
    .click('#btnLogin')
    //verify "Hi Piyush" welcome message in the landing page
   .expect(Selector('div.left welcome-text').withExactText('Hello,Piyush').exists).ok();
   
  
});