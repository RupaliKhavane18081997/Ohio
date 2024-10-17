describe('Access categories', () => {
  it('should access and verify categories', async () => {
    const firstWFID = await $("//android.widget.TextView[@text='16567']");
    await firstWFID.click();

    const firstCategory = await $(
      "//android.widget.TextView[@text='First Category (2 Files)']",
    );
    const secondCategory = await $(
      "//android.widget.TextView[@text='Second Category (2 Files)']",
    );
    const thirdCategory = await $(
      "//android.widget.TextView[@text='Third Category (3 Files)']",
    );

    await Promise.all([
      firstCategory.waitForDisplayed(),
      secondCategory.waitForDisplayed(),
      thirdCategory.waitForDisplayed(),
    ]);
  });
});
