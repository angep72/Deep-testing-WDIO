const LoginPagesy  = require ('../Pages/login.page');

describe('Demo test for login', function() {
   it('Login Test', async ()=> {
        await browser.url('https://the-internet.herokuapp.com/login');
        browser.pause(5000)
        LoginPagesy.Login('tomsmith','SuperSecretPassword!');
        LoginPagesy.GetFlashMessageText('You logged into a secure area!')
        await browser.pause(5000);
    });
});