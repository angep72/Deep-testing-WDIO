class FormValidation {
	get firstName() {
		return $("#__component0---main--firstName-inner");
	}
	get lastName() {
		return $("#__component0---main--lastName-inner");
	}
	get email() {
		return $("#__component0---main--email-inner");
	}
	async validateForm(firstName, lastName, email) {
		this.firstName(firstName);
		this.lastName(lastName);
		this.email(email);
	}
}
module.exports = new FormValidation();
