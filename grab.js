// 抓取收藏信息（第一步）
const { By } = require('selenium-webdriver')
const jsDom = require('jsdom').JSDOM
const jquery = require('jquery')
const selenium = require('./tool/selenium')
const config = require('./config')
const writeData = require('./tool/write-data')

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
    await driver.sleep(5000)
    const js = 'window.document.querySelector(\'body\').innerHTML =  window.frames[\'contentFrame\'].document.querySelector(\'body\').innerHTML'
    await driver.executeScript(js)
    let window = new jsDom(await driver.getPageSource()).window
    let $ = jquery(window)
    let list = []
    const ulDom = $('ul.j-flag').eq(0)
    for (let i = 1; i < ulDom.find('li').length; i++) {
      list.push({
        id: ulDom.find('li').eq(i).attr('data-matcher').substring(9),
        name: ulDom.find('li').eq(i).find('.name a').text(),
        size: ulDom.find('li').eq(i).find('.num').text(),
        node: []
      })
    }
    for (let i = 0; i < list.length; i++) {
      console.log('url', config.url + '?id=' + list[i].id)
      await driver.get('https://www.baidu.com')
      await driver.get(config.url + '?id=' + list[i].id)
      await driver.sleep(3000)
      await driver.executeScript(js)
      window = new jsDom(await driver.getPageSource()).window
      $ = jquery(window)
      const musicListDom = $('.m-table tbody tr')
      for (let j = 0; j < musicListDom.length; j++) {
        let name = musicListDom.eq(j).find('.tt b').attr('title')
        list[i].node.push({
          name: name.substring(0, name.lastIndexOf('- (') === -1 ? name.length : name.indexOf('- (') - 1),
          author: musicListDom.eq(j).find('td').eq(3).find('span').attr('title'),
          title: name
        })
      }
    }
    console.log('list', list)
    writeData('favorites', list)
    // selenium.quit()
  } catch {
    console.log('异常')
    // selenium.quit()
  }
}

example(config.url + '?id=' + config.id)
