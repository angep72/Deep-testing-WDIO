class FormValidation {
	get firstNamef() {
		return $("#__component0---main--firstName-inner");
	}
	get lastNamef() {
		return $("#__component0---main--lastName-inner");
	}
	get emailf() {
		return $("#__component0---main--email-inner");
	}
	async validateForm(Name) {
		const result = await this.firstNamef().setValue(Name);
        console.log(result);
        const validate_length = await result.getValue();
        expect(validate_length.length).toBeLessThanOrEqual(12);
	}
    async validateEmail(Email) {
        await this.emailf().setValue(Email);
        const validate_email = await this.emailf().getValue();
        expect(validate_email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

    }
}
module.exports = new FormValidation();
