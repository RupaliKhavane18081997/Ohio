describe('Logout', () => {
  it('should logout from the application', async () => {
    const backButton = await $("//android.widget.TextView[@text='Back']");
    await backButton.click();

    const menuButton = await $(
      "//android.view.ViewGroup[@resource-id='cross-fade-icon-current']",
    );
    await menuButton.click();

    const welcome = await $("//android.widget.TextView[@text='Welcome,']");
    const home = await $("//android.widget.TextView[@text='Home']");
    const about = await $("//android.widget.TextView[@text='About']");
    const logoutButton = await $("//android.widget.TextView[@text='Logout']");

    await Promise.all([
      welcome.waitForDisplayed(),
      home.waitForDisplayed(),
      about.waitForDisplayed(),
      logoutButton.waitForDisplayed(),
    ]);

    await logoutButton.click();

    const confirmLogoutButton = await $(
      "//android.widget.Button[@text='LOGOUT']",
    );
    await confirmLogoutButton.click();
  });
});
