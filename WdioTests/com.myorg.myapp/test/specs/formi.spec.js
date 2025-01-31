describe('User Registration Form Validation', function() {
    // Navigate to the form before each test
    beforeEach(async function() {
        await browser.url('http://localhost:8080/index.html'); // Replace with your actual form URL
    });})
    // it('should validate successful form submission with valid inputs', async function() {
    //     // Find input fields
    //     const firstNameInput = await $('#__component0---main--firstName-inner');
    //     // const lastNameInput = await $('#lastName');
    //     // const emailInput = await $('#email');
    //     // const ageInput = await $('#age');
    //     // const submitButton = await $('button[type="submit"]');

    //     // // Enter valid data
    //      await firstNameInput.setValue('John');
    //     // await lastNameInput.setValue('Doe');
    //     // await emailInput.setValue('johndoe@example.com');
        // await ageInput.setValue('30');

        // // Submit the form
        // await submitButton.click();

        // // Add assertion to check successful submission 
        // // This could be a success message, redirect, or other indicator
        // const successMessage = await $('.success-message');
        // await expect(successMessage).toBeDisplayed();


    // it('should show validation errors for empty inputs', async function() {
    //     const submitButton = await $('button[type="submit"]');

    //     // Try to submit the form without filling any fields
    //     await submitButton.click();

    //     // Check error messages for each field
    //     const firstNameError = await $('#firstName-error');
    //     const lastNameError = await $('#lastName-error');
    //     const emailError = await $('#email-error');
    //     const ageError = await $('#age-error');

    //     await expect(firstNameError).toBeDisplayed();
    //     await expect(firstNameError).toHaveText('First name is required');

    //     await expect(lastNameError).toBeDisplayed();
    //     await expect(lastNameError).toHaveText('Last name is required');

    //     await expect(emailError).toBeDisplayed();
    //     await expect(emailError).toHaveText('Email is required');

    //     await expect(ageError).toBeDisplayed();
    //     await expect(ageError).toHaveText('Age is required');
    // });

    // it('should validate email format', async function() {
    //     const emailInput = await $('#email');
    //     const emailError = await $('#email-error');
    //     const submitButton = await $('button[type="submit"]');

    //     // Invalid email formats
    //     const invalidEmails = [
    //         'invalid-email',
    //         'invalid@email',
    //         'invalid.email',
    //         '@example.com'
    //     ];

    //     for (const invalidEmail of invalidEmails) {
    //         // Reset form
    //         await browser.refresh();

    //         // Fill other required fields
    //         await $('#firstName').setValue('John');
    //         await $('#lastName').setValue('Doe');
    //         await $('#age').setValue('30');

    //         // Enter invalid email
    //         await emailInput.setValue(invalidEmail);
    //         await submitButton.click();

    //         // Check email error
    //         await expect(emailError).toBeDisplayed();
    //         await expect(emailError).toHaveText('Please enter a valid email address');
    //     }
    // });

    // it('should validate age constraints', async function() {
    //     const ageInput = await $('#age');
    //     const ageError = await $('#age-error');
    //     const submitButton = await $('button[type="submit"]');

    //     // Test invalid age scenarios
    //     const invalidAges = [
    //         '-5',   // Negative age
    //         '0',    // Zero age
    //         '150',  // Unrealistic age
    //         'abc'   // Non-numeric input
    //     ];

    //     for (const invalidAge of invalidAges) {
    //         // Reset form
    //         await browser.refresh();

    //         // Fill other required fields
    //         await $('#firstName').setValue('John');
    //         await $('#lastName').setValue('Doe');
    //         await $('#email').setValue('johndoe@example.com');

    //         // Enter invalid age
    //         await ageInput.setValue(invalidAge);
    //         await submitButton.click();

    //         // Check age error
    //         await expect(ageError).toBeDisplayed();
    //         await expect(ageError).toHaveText('Please enter a valid age');
    //     }
    // });

    // it('should validate input length constraints', async function() {
    //     const firstNameInput = await $('#firstName');
    //     const lastNameInput = await $('#lastName');
    //     const firstNameError = await $('#firstName-error');
    //     const lastNameError = await $('#lastName-error');
    //     const submitButton = await $('button[type="submit"]');

    //     // Test very short and very long names
    //     const testCases = [
    //         { input: 'a', field: firstNameInput, error: firstNameError, errorMessage: 'First name is too short' },
    //         { input: 'a'.repeat(50), field: firstNameInput, error: firstNameError, errorMessage: 'First name is too long' },
    //         { input: 'a', field: lastNameInput, error: lastNameError, errorMessage: 'Last name is too short' },
    //         { input: 'a'.repeat(50), field: lastNameInput, error: lastNameError, errorMessage: 'Last name is too long' }
    //     ];

    //     for (const testCase of testCases) {
    //         // Reset form
    //         await browser.refresh();

    //         // Fill other required fields
    //         await $('#email').setValue('johndoe@example.com');
    //         await $('#age').setValue('30');

    //         // Enter invalid input
    //         await testCase.field.setValue(testCase.input);
    //         await submitButton.click();

    //         // Check error message
    //         await expect(testCase.error).toBeDisplayed();
    //         await expect(testCase.error).toHaveText(testCase.errorMessage);
    //     }
//     });
// });