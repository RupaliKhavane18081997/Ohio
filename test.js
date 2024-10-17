describe('My Login application', () => {
  it('should login with valid credentials', async () => {
    // Find and click the 'Website Login' element
    const login = await $("//android.widget.TextView[@text='Website Login']");
    await login.waitForDisplayed();
    await login.click();

    // Enter email
    const emailField = await $("//android.widget.EditText[@password='false']");
    await emailField.waitForDisplayed();
    await emailField.setValue('mobileapp_prasad@yopmail.com');

    // Enter password
    const passwordField = await $(
      "//android.widget.EditText[@password='true']",
    );
    await passwordField.waitForDisplayed();
    await passwordField.setValue('PassWord:12');

    // Click on the Login button
    const loginButton = await $("//android.widget.Button[@text='Login']");
    await loginButton.click();

    // Wait for Trials element to appear
    const trials = await $("//android.widget.TextView[@text='Trials']");
    await trials.waitForDisplayed();

    // Click on the first trial
    const trialName1 = await $(
      "//android.widget.TextView[@text='Nemanja P Task Trial']",
    );
    await trialName1.click();

    // Wait for status elements to appear
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

    const firstWFID = await $("//android.widget.TextView[@text='16567']");
    await firstWFID.click();

    const firstCategory = await $(
      "//android.widget.TextView[@text='First Category (2 Files)']",
    );
    await firstCategory.waitForDisplayed();

    const secondCategory = await $(
      "//android.widget.TextView[@text='Second Category (2 Files)']",
    );
    await secondCategory.waitForDisplayed();

    const thirdCategory = await $(
      "//android.widget.TextView[@text='Third Category (3 Files)']",
    );
    await thirdCategory.waitForDisplayed();

    await firstCategory.click();

    const Upload = await $("//android.widget.TextView[@text='Upload'][1]");
    await Upload.waitForDisplayed();

    const Created = await $("(//android.widget.TextView[@text='created'])[1]");
    await Created.waitForDisplayed();

    const slotARequired = await $(
      "//android.widget.TextView[@text='Slot A - required (cannot be skipped)']",
    );
    await slotARequired.waitForDisplayed();

    // Navigate back to the main menu
    const backButton = await $("//android.widget.TextView[@text='Back']");
    await backButton.click();

    const titleTrails = await $(
      "//android.widget.TextView[@text='Workflow for Prasad and Ashok - mobile app testing (v 11)']",
    );
    await titleTrails.waitForDisplayed();

    await backButton.click();
    // Open the menu
    const menuButton = await $(
      "//android.view.ViewGroup[@resource-id='cross-fade-icon-current']",
    );
    await menuButton.click();

    // Wait for elements in the menu to appear
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

    // Perform logout
    await logoutButton.click();

    const confirmLogoutButton = await $(
      "//android.widget.Button[@text='LOGOUT']",
    );
    await confirmLogoutButton.click();
  });
});
