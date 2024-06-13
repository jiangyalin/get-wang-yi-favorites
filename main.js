import axios from 'axios';

const response = await axios.get('https://music.163.com/playlist?id=9350374554', {
  // params: {
  //   'id': '9350374554'
  // },
  headers: {
    // 'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    // 'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    // 'cache-control': 'no-cache',
    // 'cookie': 'WEVNSM=1.0.0; ntes_utid=tid._.osH3IJYLqjVEAxUUQULCFAHYTR42HQIi._.0; WM_NI=wjEVKuyUd5XYUBriRMM9Gaz8uG3ieZ5DY7qc6YfXepX2XtafFW%2B%2FWUdA54f8MnHNZlFjkJ%2FMNcX%2FxjS9EEHp70zmridA8NuqOGRh6%2FhA8XTEcpakCe9RbYZuZHcM%2BkJTcGc%3D; WM_NIKE=9ca17ae2e6ffcda170e2e6ee88ce59aeed8285b37491b08eb3c15e829e9bacdb4a8298acb5c140f1969682d82af0fea7c3b92ab5b68bb7ca7fbb8bacd6db53979ebe8ad1478fe78982f934b799fd8ae852f79c97d8f469f687aab9e87c9cee9895e46e8689e5d0d65fa89ffbd5e5348fb288afd96886b6a5abae478ebd98d0fb6291e78ba6cb7cf5f0b68ef163a89ff8aff87b8d999e89b525ac9ff8b9d74fa1b0af8cc26ffb8eaebad97f9a98adaeaa618a8cada8e237e2a3; WM_TID=CK9%2BVySDHpdBQQRFVBbDQQSYXBpiYdfQ; sDeviceId=YD-9u28hiRW3h9FBwFUUFKBjGHI01fj1t2P; WNMCID=ucglqr.1718156994191.01.0; _ntes_nnid=445b5bde645173362ddf85e7ef5f9c6b,1718156992887; _ntes_nuid=445b5bde645173362ddf85e7ef5f9c6b; JSESSIONID-WYYY=%2Fx%5CbUo7BKiIJVp9vZWmThKdM2OXF%5ClYEIBWBydYZjd39NlepecRq0XRfxOJboMrx65ciV5YBMuYcpgCzV9A3wjE%2FBvYOS00Fxyxm0pB3uT8ppeds6jUN0NefVOp%2BfIXmKprc6qBTEm52nOyHNZCpaG952XC8huT1ZXwMI3uOJSGJ6zjh%3A1718158792183; _iuqxldmzr_=32; NMTID=00O0mxduZ_93htkvESKkqL-jGCZqkgAAAGQBk7cjA',
    // 'pragma': 'no-cache',
    // 'priority': 'u=0, i',
    // 'referer': 'https://music.163.com/',
    // 'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
    // 'sec-ch-ua-mobile': '?0',
    // 'sec-ch-ua-platform': '"macOS"',
    // 'sec-fetch-dest': 'iframe',
    // 'sec-fetch-mode': 'navigate',
    // 'sec-fetch-site': 'same-origin',
    // 'upgrade-insecure-requests': '1',
    // 'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'
  }
})

console.log('response', response.data)
