describe("Demo ",function(){
    it("should open the login page", async () => {
         browser.url("https://www.google.com/");
         await $('#APjFqb').setValue('webdriverio');
        browser.keys('Enter');
    })
})