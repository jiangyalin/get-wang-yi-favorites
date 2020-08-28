const fs = require('fs')
const ncm = require('./ncm')

module.exports = (path, aimsPath, name) => {
  ncm(fs.readFileSync(path).buffer, name, 'ncm').then(res => {
    fs.writeFileSync(aimsPath, res.file)
  })
}
