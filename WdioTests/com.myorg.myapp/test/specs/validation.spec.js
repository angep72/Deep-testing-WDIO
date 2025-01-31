describe("Input length validation", function () {
	beforeEach(async () => {
		// Navigate to test page - using a sample URL
		await browser.url("http://localhost:8080/index.html");
	});
    it ("should validate input length for firstName so that it won't exceed 12 char", async () => {
        // Find the firstName input field
        const firstNameInput = await $("#__component0---main--firstName-inner");
        await firstNameInput.setValue("JohnDoefhhfj");
        const validate_length = await firstNameInput.getValue();
        expect(validate_length.length).toBeLessThanOrEqual(12);
    })

	it("should validate input length for the second username and it should be greater than 10 ", async () => {
		// Find the username input field
		const lastNameInput = await $("#__component0---main--lastName-inner");
		await lastNameInput.setValue("Q12ejyhdtdtegfsfssfdtev");
		const validate_length = await lastNameInput.getValue();
		expect(validate_length.length).toBeGreaterThan(10);
		expect(validate_length).toMatch(/^[A-Z]/);
	});
    it ("should validate a correct email format", async () => {
        const emailInput = await $("#__component0---main--email-inner");
        await emailInput.setValue("gmailcom@ COM");

        const validate_email = await emailInput.getValue();
        expect(validate_email).toMatch(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/);
    })
    
});
