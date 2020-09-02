// 按收藏分类输出（第二步）
const fs = require('fs')
const stringSimilarity = require('string-similarity')
const enter = require('./config').enter
const readData = require('./tool/read-data')
const createFolder = require('./tool/create-folder')
const ncm = require('./tool/ncm')

const readDir = fs.readdirSync(enter)

const list = readData('favorites')

list.forEach(item => {
  const path = './output/' + item.name
  createFolder(path)
  item.node.forEach(data => {
    const fileName = data.author.replace(/\//g, ',').replace(/ /g, ' ') + ' - ' + data.name.replace(/ /g, ' ')
      .replace(/\?/g, '？').replace(/：/g, ':').replace(/é/g, 'é')
    const matches = stringSimilarity.findBestMatch(fileName, readDir)
    const thisSuffix = matches.bestMatch.target.substring(matches.bestMatch.target.lastIndexOf('.'))
    if (thisSuffix === '.ncm') {
      ncm(enter + '/' + matches.bestMatch.target, path + '/' + fileName + '.flac', fileName)
    } else {
      fs.copyFileSync(enter + '/' + matches.bestMatch.target, path + '/' + matches.bestMatch.target)
    }
  })
})

