describe('Input length validation', function() {
    beforeEach(async () => {
        // Navigate to test page - using a sample URL
        await browser.url('https://the-internet.herokuapp.com/login');
    });
    
    it('should validate input length for username', async () => {
        // Find the username input field
        const usernameInput = await $('input[name=username]');
        await usernameInput.setValue('Q1234dgheueuehej')
        
        const validate_length = await usernameInput.getValue();
        expect(validate_length.length).toBeGreaterThan(10);
        expect(validate_length).toMatch(/^[A-Z]/);
    })
})