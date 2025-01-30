describe('Demo test for login', function() {
    it('Login Test', async function() {
        await browser.url('https://the-internet.herokuapp.com/login');
        await $('#username').setValue('tomsmith');
        await $('#password').setValue('SuperSecretPassword!');
        await $('button[type="submit"]').click();
        
        const flashMessage = await $('#flash');
        await expect(await flashMessage.getText()).toContain('You logged into a secure area!');
        // Or alternatively:
        // await expect(flashMessage).toHaveText(expect.stringContaining('You logged into a secure area!'));
        
        await browser.pause(5000);
    });
});