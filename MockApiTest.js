describe('My Login application', () => {
  it('should login with valid credentials', async () => {
    const login = await $("//android.widget.TextView[@text='LOGIN']");
    await login.waitForDisplayed();
    await login.click();

    const FirstItem = await $(
      "//android.widget.TextView[@text='sunt aut facere repellat provident occaecati excepturi optio reprehenderit']",
    );
    await FirstItem.waitForDisplayed();
    await FirstItem.click();
  });
});
