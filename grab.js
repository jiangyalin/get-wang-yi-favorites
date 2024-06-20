// 抓取收藏信息（第一步）
import { JSDOM } from 'jsdom'
import jquery from 'jquery'
import fs from 'fs'
import ajax from './tool/ajax.js'

// const driver = selenium.get()

const example = async url => {
  // 歌单列表
  const listRes1 = await ajax({
    url: 'https://music.163.com/weapi/user/playlist?csrf_token=',
    method: 'post'
  }, {
    body: {
      params: '02WyBNXCQ0R9Ab4ib8+3SIZUGWf9TntJmhiALEkiNvWFrfsa/9b4JSj5GjKK0uCliYAoX4b670MPdZqIKAXJFx02kDLAXf+VsHhBcc3VJ3+9C0aIbzpnqAUgV2fwQdU5RYsolJon6ooMFjFz0DxTWNc0n4RyEHtpTNB8HhAKJOaZEMdIki2GuX1eeN4SM3oJ',
      encSecKey: '0ea21fc9896865cb9f55287d881890de18d551653c6bf3217dbb00235dd375152ca174099f4f04732e64e655c48a9ee35bdaf2b8837071c51196a4db4e17715730c46a6e57ef55ecb9301ac75314b2f89e946ddad83846a4f943038db92762467d0e8be593b3c84238f3c9ec8e223a97b98f3e1ad3dda8d4531fa93b73b1c973'
    },
    isFormData: true
  })
  const listRes2 = await ajax({
    url: 'https://music.163.com/weapi/user/playlist?csrf_token=',
    method: 'post'
  }, {
    body: {
      params: 'xGB3yqT4lYNQag5JnvxdiZ4STwB6egIqCeXH2DconuCJYeaxWXdL0+p7U6wDY57B/6oD0VGt+FN9sa2Gunysba/syPg0fojTIFrx9BzWJP8nv4FAu6updH2sPTswFWjJxkPu8jJzCoYRIDKD9O3KiElLwcgop47Bu0Becw215IEcZe9Av88y7oCpXiG8BGTh',
      encSecKey: '2190d621329fb1e25aff8aeff99cbafb880c8dcf27609246055f7a744e1fae5014736bed2dd9a1b2976bb84e2cb63a4651c051fc5ef4e13f2ab50b3b1779ae257cdc1342755dcfe9f03bba2fea23f768cc847922f12f8cf8e2609251499ad2d9f2aebfde5a595288248a77f51d9565836f677a33408333bc676f53df1cb9d2d5'
    },
    isFormData: true
  })

  let listRes = [...listRes1.playlist, ...listRes2.playlist].filter(item => item.userId === 280316200)
  listRes = [listRes[13]]

  const playList = []
  for (let i = 0; i < listRes.length; i++) {
    const item = listRes[i]
    if (playList.some(node => node.id === item.id)) continue
    const play = {
      name: item.name,
      id: item.id,
      trackCount: item.trackCount
    }
    const playlistsRes = await ajax({
      url: 'https://music.163.com/playlist',
      method: 'get'
    }, {
      query: {
        id: item.id
      }
    })

    let dom = new JSDOM(playlistsRes)
    let $ = jquery(dom.window)
    const list = []
    const listDom = $('#j-app .m-sglst .m-sgitem')
    for (let i = 0; i < listDom.length; i++) {
      const itemDom = listDom.eq(i)
      const href = itemDom.attr('href')
      const name = itemDom.find('.sgtl').text()
      if (!name) continue
      const info = itemDom.find('.sginfo').text()
      const singer = info.split(' - ')[0]
      const album = info.split(' - ')[1]
      list.push({
        id: href,
        name,
        singer,
        album
      })
    }

    play.list = list

    playList.push(play)
  }

  console.log('playList', playList)
  fs.writeFileSync('./test.json', JSON.stringify(playList, null, 2))
}

example('https://music.163.com/#/user?id=280316200')
