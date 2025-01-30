const LoginPagesy  = require ('../Pages/login.page');

describe('Demo test for login', function() {
   it('Login Test', async ()=> {
        await browser.url('https://the-internet.herokuapp.com/login');
        browser.pause(5000)
        // LoginPage.Login('tomsmith','SuperSecretPassword!');
        // await $('#username').setValue('tomsmith');
        // await $('#password').setValue('SuperSecretPassword!');
        // await $('button[type="submit"]').click();
        
        // await expect(await $('#flash').getText()).toContain('You logged into a secure area!');
        // // Or alternatively:
        // // await expect(flashMessage).toHaveText(expect.stringContaining('You logged into a secure area!'));
        
        await browser.pause(5000);
    });
});