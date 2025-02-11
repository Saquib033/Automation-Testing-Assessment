const { Builder, By, until } = require("selenium-webdriver");

async function execution() {
  let driver = await new Builder().forBrowser("firefox").build();

  try {
    await driver.manage().window().maximize();
    await driver.get("https://www.saucedemo.com/");

    await driver.wait(until.elementLocated(By.xpath("//input[@id='user-name']")), 10000);
    await driver.findElement(By.xpath("//input[@id='user-name']")).sendKeys("performance_glitch_user");
    await driver.findElement(By.xpath("//input[@id='password']")).sendKeys("secret_sauce");
    await driver.findElement(By.xpath("//input[@id='login-button']")).click();
    await driver.sleep(3000);

    await driver.wait(until.elementLocated(By.xpath("//button[@id='react-burger-menu-btn']")), 10000);
    await driver.findElement(By.xpath("//button[@id='react-burger-menu-btn']")).click();
    await driver.wait(until.elementLocated(By.xpath("//a[@id='reset_sidebar_link']")), 10000);
    await driver.findElement(By.xpath("//a[@id='reset_sidebar_link']")).click();
    await driver.sleep(3000);

    await driver.wait(until.elementLocated(By.xpath("//select[@class='product_sort_container']")), 10000);
    let sortDropdown = await driver.findElement(By.xpath("//select[@class='product_sort_container']"));
    await sortDropdown.click();
    await driver.wait(until.elementLocated(By.xpath("//option[@value='za']")), 10000);
    await driver.findElement(By.xpath("//option[@value='za']")).click();
    await driver.sleep(3000);

    await driver.wait(until.elementLocated(By.xpath("//div[@class='inventory_item'][1]//button")), 10000);
    let firstProductButton = await driver.findElement(By.xpath("//div[@class='inventory_item'][1]//button"));
    await firstProductButton.click();
    await driver.sleep(3000);

    await driver.wait(until.elementLocated(By.xpath("//a[@class='shopping_cart_link']")), 10000);
    await driver.findElement(By.xpath("//a[@class='shopping_cart_link']")).click();
    await driver.sleep(3000);

    await driver.wait(until.elementLocated(By.xpath("//button[@id='checkout']")), 10000);
    await driver.findElement(By.xpath("//button[@id='checkout']")).click();
    await driver.sleep(3000);

    await driver.wait(until.elementLocated(By.xpath("//input[@id='first-name']")), 10000);
    await driver.findElement(By.xpath("//input[@id='first-name']")).sendKeys("Shadman");
    await driver.sleep(3000);

    await driver.wait(until.elementLocated(By.xpath("//input[@id='last-name']")), 10000);
    await driver.findElement(By.xpath("//input[@id='last-name']")).sendKeys("Saquib");

    await driver.wait(until.elementLocated(By.xpath("//input[@id='postal-code']")), 10000);
    await driver.findElement(By.xpath("//input[@id='postal-code']")).sendKeys("12345");

    await driver.wait(until.elementLocated(By.xpath("//input[@id='continue']")), 10000);
    await driver.findElement(By.xpath("//input[@id='continue']")).click();
    await driver.sleep(3000);

    let productNames = await driver.findElements(By.xpath("//div[@class='inventory_item_name']"));
    for (let product of productNames) {
      console.log(await product.getText());
    }

    let totalPrice = await driver.findElement(By.xpath("//div[@class='summary_total_label']")).getText();
    console.log("Total Price: " + totalPrice);

    await driver.wait(until.elementLocated(By.xpath("//button[@id='finish']")), 10000);
    await driver.findElement(By.xpath("//button[@id='finish']")).click();
    await driver.sleep(3000);

    let successMessage = await driver.findElement(By.xpath("//h2[@class='complete-header']")).getText();
    if (successMessage.includes("Thank you for your order!")) {
      console.log("Test Passed: Order completed successfully.");
    } else {
      console.log("Test Failed: Order completion message not found.");
    }

    await driver.wait(until.elementLocated(By.xpath("//button[@id='react-burger-menu-btn']")), 10000);
    await driver.findElement(By.xpath("//button[@id='react-burger-menu-btn']")).click();
    await driver.wait(until.elementLocated(By.xpath("//a[@id='reset_sidebar_link']")), 10000);
    await driver.findElement(By.xpath("//a[@id='reset_sidebar_link']")).click();
    await driver.sleep(3000);

    await driver.wait(until.elementLocated(By.xpath("//a[@id='logout_sidebar_link']")), 10000);
    await driver.findElement(By.xpath("//a[@id='logout_sidebar_link']")).click();
    await driver.sleep(3000);

  } catch (error) {
    console.error("Test Failed: ", error);
  } finally {
    await driver.sleep(10000);
    await driver.quit();
  }
}

execution();
