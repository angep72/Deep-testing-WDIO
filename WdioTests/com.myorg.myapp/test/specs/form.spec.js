const FormPage = require('../pageobjects/form.page');
const { expect } = require('@wdio/globals');

describe('Email Field Validation', () => {
    beforeEach(async () => {
        await FormPage.open();
    });

    const validEmails = [
        'test@example.com',
        'user.name@domain.com',
        'user+label@domain.com',
        'user@subdomain.domain.co.uk'
    ];

    const invalidEmails = [
        '',
        'invalidemail',
        'test@',
        '@domain.com',
        'test@domain',
        'test@.com',
        'test@domain..com',
        'test space@domain.com'
    ];

    validEmails.forEach((email) => {
        it(`should accept valid email: ${email}`, async () => {
            await FormPage.setEmail(email);
            await FormPage.submitForm();

            // Check that no error message is displayed
            await expect(FormPage.errorMessage).not.toBeDisplayed();
            
            // Optional: Check for success message
            await expect(FormPage.successMessage).toBeDisplayed();
            expect(await FormPage.getSuccessText()).toContain('Valid email');
        });
    });

    invalidEmails.forEach((email) => {
        it(`should reject invalid email: ${email}`, async () => {
            await FormPage.setEmail(email);
            await FormPage.submitForm();

            // Verify error message is displayed
            await expect(FormPage.errorMessage).toBeDisplayed();
            expect(await FormPage.getErrorText()).toContain('Please enter a valid email');
        });
    });

    it('should handle empty email field', async () => {
        await FormPage.submitForm();
        
        await expect(FormPage.errorMessage).toBeDisplayed();
        expect(await FormPage.getErrorText()).toContain('Email is required');
    });

    it('should trim whitespace from email', async () => {
        await FormPage.setEmail('  test@example.com  ');
        await FormPage.submitForm();

        await expect(FormPage.errorMessage).not.toBeDisplayed();
        await expect(FormPage.successMessage).toBeDisplayed();
    });

    it('should handle special characters in email', async () => {
        await FormPage.setEmail('test.name+label@domain-name.com');
        await FormPage.submitForm();

        await expect(FormPage.errorMessage).not.toBeDisplayed();
        await expect(FormPage.successMessage).toBeDisplayed();
    });

    it('should reject emails with invalid domains', async () => {
        await FormPage.setEmail('test@invalid..com');
        await FormPage.submitForm();

        await expect(FormPage.errorMessage).toBeDisplayed();
        expect(await FormPage.getErrorText()).toContain('Please enter a valid email');
    });
});
