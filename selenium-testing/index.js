const webdriver = require("selenium-webdriver");
const By = webdriver.By;
const until = webdriver.until;
// const driver = webdriver.Chrome("./chromedriver");
const driver = new webdriver.Builder().forBrowser("chrome").build();

driver.get("http://localhost:3000").then(async () => {
  await driver
    .findElement(webdriver.By.className("js-todo-input"))
    .sendKeys("Build App");
  await driver.findElement(webdriver.By.className("js-todo-submit")).click();
  driver.getPageSource().then((source) => {
    // console.log(source)
    if (source.includes("Build App")) {
      console.log("Test Passed!");
    } else {
      console.log("Test Failed!");
    }
  });
});
