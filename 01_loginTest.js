describe('Login application', () => {
  it('should login with valid credentials', async () => {
    const login = await $("//android.widget.TextView[@text='Website Login']");
    await login.waitForDisplayed();
    await login.click();

    const emailField = await $("//android.widget.EditText[@password='false']");
    await emailField.waitForDisplayed();
    await emailField.setValue('mobileapp_prasad@yopmail.com');

    const passwordField = await $(
      "//android.widget.EditText[@password='true']",
    );
    await passwordField.waitForDisplayed();
    await passwordField.setValue('PassWord:12');

    const loginButton = await $("//android.widget.Button[@text='Login']");
    await loginButton.click();

    const trials = await $("//android.widget.TextView[@text='Trials']");
    await trials.waitForDisplayed();
  });
});
