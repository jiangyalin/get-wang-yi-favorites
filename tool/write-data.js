import fs from 'fs'
import createFolder from './create-folder'

// 写入数据
const writeData = (name, data) => {
  createFolder('./data')
  const path = './data/' + name + '.json'
  fs.writeFileSync(path, JSON.stringify(data))
}

export default writeData
