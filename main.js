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
    await driver.sleep(1000)
    await driver.findElement(By.css('a[data-action="switch"]')).click()
    await driver.findElement(By.css('#j-official-terms')).click()
    await driver.findElement(By.css('.zcnt a[data-action="login"]')).click()
    await driver.findElement(By.css('#p')).sendKeys(config.account)
    await driver.findElement(By.css('#pw')).sendKeys(config.password)
    await driver.findElement(By.css('.j-primary.u-btn2.u-btn2-2')).click()
    await driver.findElement(By.css('a[data-module="my"]')).click()
    // await driver.get(url)
    await driver.sleep(5000)
    const js = 'window.document.querySelector(\'body\').innerHTML =  window.frames[\'contentFrame\'].document.querySelector(\'body\').innerHTML'
    await driver.executeScript(js)
    const window = new jsDom(await driver.getPageSource()).window
    const $ = jquery(window)
    const list = []
    const ulDom = $('ul.j-flag').eq(0)
    for (let i = 0; i < ulDom.find('li').length; i++) {
      list.push({
        id: ulDom.find('li').eq(i).attr('data-matcher').substring(9),
        name: ulDom.find('li').eq(i).find('.name a').text(),
        size: ulDom.find('li').eq(i).find('.num').text()
      })
    }
    console.log('uuu')
    console.log('aaa', list)
    // selenium.quit()
  } catch {
    console.log('异常')
    // selenium.quit()
  }
}

example(config.url)
