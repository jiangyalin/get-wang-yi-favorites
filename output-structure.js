// 按收藏分类输出（第二步）
const fs = require('fs')
const enter = require('./config').enter
const readData = require('./tool/read-data')
const createFolder = require('./tool/create-folder')
const ncm = require('./tool/ncm')

const list = readData('favorites')

const suffix = ['.mp3', '.flac', '.ncm']

const _list = []

list.forEach(item => {
  const path = './output/' + item.name
  createFolder(path)
  item.node.forEach(data => {
    suffix.forEach(node => {
      const fileName = data.author.replace(/\//g, ',').replace(/ /g, ' ') + ' - ' + data.name.replace(/ /g, ' ')
        .replace(/\?/g, '？').replace(/:/g, '：')
      if (fs.existsSync(enter + '/' + fileName + node)) {
        if (node === '.ncm') {
          ncm(enter + '/' + fileName + node, path + '/' + fileName + '.flac', fileName)
        } else {
          fs.copyFileSync(enter + '/' + fileName + node, path + '/' + fileName + node)
        }
      } else {
        _list.push(fileName)
      }
    })
  })
})

// "name":"Forever...","author":"savage genius","title":"Forever... - ( )"

console.log('_list', _list.filter(item => _list.filter(node => node === item).length === 3))
console.log('aaa', _list.filter(item => _list.filter(node => node === item).length === 3).length / 3)
