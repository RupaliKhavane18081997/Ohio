describe('Verify category elements', () => {
  it('should verify category elements', async () => {
    const firstCategory = await $(
      "//android.widget.TextView[@text='First Category (2 Files)']",
    );
    await firstCategory.click();

    const Upload = await $("//android.widget.TextView[@text='Upload'][1]");
    const Created = await $("(//android.widget.TextView[@text='created'])[1]");
    const slotARequired = await $(
      "//android.widget.TextView[@text='Slot A - required (cannot be skipped)']",
    );

    await Promise.all([
      Upload.waitForDisplayed(),
      Created.waitForDisplayed(),
      slotARequired.waitForDisplayed(),
    ]);

    const backButton = await $("//android.widget.TextView[@text='Back']");
    await backButton.click();
  });
});
