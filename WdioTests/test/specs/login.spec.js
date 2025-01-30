describe('Demo test for login',function (){
    it ('Login TESt',async function (){
        browser.url('https://the-internet.herokuapp.com/login');
        await $('#username').setValue('tomsmith');
        await $('#password').setValue('SuperSecretPassword!'); 
        await $('button[type="submit"]').click();
        browser.pause(5000)  
    })
})