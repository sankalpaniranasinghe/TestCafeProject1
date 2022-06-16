import { Selector } from "testcafe";

const userName= Selector("#txtUserName");
const password = Selector("#txtPassword");
const submtButton = Selector("#btnLogin");
const verify = Selector('.left.welcome-text');

fixture `MyFixture2`
    .page `https://portal.qa.kidsxap.com.au/`;

test
('Login', async t => {
    await t
    .maximizeWindow()
    .typeText(userName,"pk@xaptech.com.au")
    .typeText(password ,"Abcd1234$")
    .click(submtButton)
   
   .expect((verify).withExactText('Hello,Piyush').exists).ok();
  
    
});

