const validatingForm = require("../Pages/validating-form-page");
describe("Input length validation", function () {
	before(async () => {
		// Navigate to test page only once for the entire test suite
		await browser.url("http://localhost:8080/index.html");
	});

	it("should validate input length for firstName so that it won't exceed 12 chars", async () => {
		validatingForm.validateForm("Bikorimana");
	});

	it("should validate input length for the second username and it should be greater than 10", async () => {
		const lastNameInput = await $("#__component0---main--lastName-inner");
		await lastNameInput.setValue("Q12ejyhdtdtegfsfssfdtev");
		const validate_length = await lastNameInput.getValue();
		expect(validate_length.length).toBeGreaterThan(10);
		expect(validate_length).toMatch(/^[A-Z]/);
	});

	it("should validate a correct email format", async () => {
		const emailInput = await $("#__component0---main--email-inner");
		await emailInput.setValue("angeumunyana34gmail.com");

		const validate_email = await emailInput.getValue();
		expect(validate_email).toMatch(
			/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
		);
	});
});
