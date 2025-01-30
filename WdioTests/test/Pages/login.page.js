const LoginPage = require ('../Pages/login.page');

class LoginPage {
    get UsernameTextBox (){
        return $('#username');
    }
    get passwordTextBox (){
        return $('#password');
    }
    get LoginButton (){
        return $('button[type="submit"]');
    }
    get FlashMessage (){
        return $('#flash');
    }
     
    async Login(username, password,){
        await this.UsernameTextBox.setValue(username);
        await this.passwordTextBox.setValue(password);
        await this.LoginButton.click();


    }      async GetFlashMessageText(msg){
        await expect(await $(this.FlashMessage).getText()).toContain(msg);
    }
}