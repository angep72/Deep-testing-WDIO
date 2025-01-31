class FormPage {
    get emailInput() {
        return $('#email-input'); // Assuming the email input has id="email-input"
    }

    get submitButton() {
        return $('#submit-button');
    }

    get errorMessage() {
        return $('.error-message');
    }

    get successMessage() {
        return $('.success-message');
    }

    async setEmail(value) {
        await this.emailInput.setValue(value);
    }

    async submitForm() {
        await this.submitButton.click();
    }

    async getErrorText() {
        return await this.errorMessage.getText();
    }

    async getSuccessText() {
        return await this.successMessage.getText();
    }

    open() {
        return browser.url('/form'); // Adjust the URL path as needed
    }
}
module.exports = new FormPage();
