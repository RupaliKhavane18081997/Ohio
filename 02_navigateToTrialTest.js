describe('Navigate to trial', () => {
  it('should navigate to a specific trial', async () => {
    const trials = await $("//android.widget.TextView[@text='Trials']");
    await trials.waitForDisplayed();

    const trialName1 = await $(
      "//android.widget.TextView[@text='Nemanja P Task Trial']",
    );
    await trialName1.click();

    const allStatus = await $("//android.widget.TextView[@text='All']");
    const completedStatus = await $(
      "//android.widget.TextView[@text='Completed']",
    );
    const inProgressStatus = await $(
      "//android.widget.TextView[@text='In Progress']",
    );
    const notStartedStatus = await $(
      "//android.widget.TextView[@text='Not Started']",
    );

    await Promise.all([
      allStatus.waitForDisplayed(),
      completedStatus.waitForDisplayed(),
      inProgressStatus.waitForDisplayed(),
      notStartedStatus.waitForDisplayed(),
    ]);
  });
});
