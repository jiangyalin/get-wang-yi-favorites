const { By } = require('selenium-webdriver')
const jsDom = require('jsdom').JSDOM
const jquery = require('jquery')
const selenium = require('./tool/selenium')
const config = require('./config')

const driver = selenium.get()

const example = async url => {
  try {
    await driver.get(url)
    await driver.findElement(By.css('a[data-action="login"]')).click()
    await driver.findElement(By.css('a[data-action="switch"]')).click()
    await driver.findElement(By.css('#j-official-terms')).click()
    await driver.findElement(By.css('.zcnt a[data-action="login"]')).click()
    await driver.findElement(By.css('#p')).sendKeys(config.account)
    await driver.findElement(By.css('#pw')).sendKeys(config.password)
    await driver.findElement(By.css('.j-primary.u-btn2.u-btn2-2')).click()
    // await driver.get(url)
    let $ = jquery(new jsDom(await driver.getPageSource()).window) // j-primary u-btn2 u-btn2-2
    console.log('aaa')
    // selenium.quit()
  } catch {
    console.log('异常')
    selenium.quit()
  }
}

example(config.url)
