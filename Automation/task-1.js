const { Builder, By, until } = require("selenium-webdriver");

async function execution() {
  let driver = await new Builder().forBrowser("firefox").build();

  try {
    await driver.manage().window().maximize();
    await driver.get("https://www.saucedemo.com/");

    await driver.findElement(By.xpath("//input[@id='user-name']")).sendKeys("locked_out_user");
    await driver.findElement(By.xpath("//input[@id='password']")).sendKeys("secret_sauce");
    await driver.findElement(By.xpath("//input[@id='login-button']")).click();

    await driver.wait(until.elementLocated(By.xpath("//div[@class='error-message-container']")), 5000);
    let errorMsg = await driver.findElement(By.xpath("//div[@class='error-message-container']")).getText();

    if (errorMsg.includes("Epic sadface: Sorry, this user has been locked out.")) {
      console.log("Test Passed: Correct error message displayed.");
    } else {
      console.log("Test Failed: Incorrect error message.");
    }

  } catch (error) {
    console.error("Test Failed: ", error);
  } finally {
    await driver.sleep(5000);
    await driver.quit();
  }
}

execution();
