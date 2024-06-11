require('dotenv').config()

const env = process.env

module.exports = {
  port: 8085,
  url: 'https://music.163.com/#/my/m/music/playlist',
  id: env.ID,
  // 网易云音乐账号
  account: env.ACCOUNT,
  // 网易云音乐密码
  password: env.PASSWORD,
  enter: '/Users/jiangyalin/Music/网易云音乐'
}
