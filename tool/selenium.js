import { Builder } from 'selenium-webdriver'
import chrome from 'selenium-webdriver/chrome'
import chromedriver from 'chromedriver'
console.log('ddd')

const path = chromedriver.path

let selenium = ''

const container = {
  // get: () => {
  //   if (!selenium) {
  //     selenium = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options()).build()
  //     // selenium = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().headless()).build()
  //   }
  //   return selenium
  // },
  // quit: () => {
  //   selenium.quit()
  // },
  // checkIsPresence: async (driver, element) => { // 检查是否存在
  //   try {
  //     await driver.findElement(By.css(element))
  //     return true
  //   } catch  {
  //     return false
  //   }
  // }
}

export default container
