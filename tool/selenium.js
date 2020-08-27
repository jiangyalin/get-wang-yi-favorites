const { Builder } = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
const path = require('chromedriver').path // 必要，不能删除

let selenium = ''

module.exports = {
  get: () => {
    if (!selenium) {
      selenium = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options()).build()
    }
    return selenium
  },
  quit: () => {
    selenium.quit()
  },
  checkIsPresence: async (driver, element) => { // 检查是否存在
    try {
      await driver.findElement(By.css(element))
      return true
    } catch  {
      return false
    }
  }
}
