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

	it("should validate input length for username", async () => {
		// Find the username input field
		const usernameInput = await $("#__component0---main--firstName-inner");
		await usernameInput.setValue("Q12ejyhdtdtegfsfssfdtev");
		const validate_length = await usernameInput.getValue();
		expect(validate_length.length).toBeGreaterThan(10);
		expect(validate_length).toMatch(/^[A-Z]/);
	});
    
});
