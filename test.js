import axios from 'axios';

const response = await axios.post(
  'https://music.163.com/weapi/user/playlist',
  new URLSearchParams({
    'params': '02WyBNXCQ0R9Ab4ib8+3SIZUGWf9TntJmhiALEkiNvWFrfsa/9b4JSj5GjKK0uCliYAoX4b670MPdZqIKAXJFx02kDLAXf+VsHhBcc3VJ3+9C0aIbzpnqAUgV2fwQdU5RYsolJon6ooMFjFz0DxTWNc0n4RyEHtpTNB8HhAKJOaZEMdIki2GuX1eeN4SM3oJ',
    'encSecKey': '0ea21fc9896865cb9f55287d881890de18d551653c6bf3217dbb00235dd375152ca174099f4f04732e64e655c48a9ee35bdaf2b8837071c51196a4db4e17715730c46a6e57ef55ecb9301ac75314b2f89e946ddad83846a4f943038db92762467d0e8be593b3c84238f3c9ec8e223a97b98f3e1ad3dda8d4531fa93b73b1c973'
  }),
  {
    params: {
      'csrf_token': ''
    },
    headers: {
      'accept': '*/*',
      'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
      'cache-control': 'no-cache',
      'cookie': 'NMTID=00Oyu07QpjrhjIsl0l1uSFTW6UHBY4AAAGQBjssmw; _ntes_nnid=8e31b09b1c3ef51f625d6b79993c2d14,1718091459909; _ntes_nuid=8e31b09b1c3ef51f625d6b79993c2d14; WEVNSM=1.0.0; WNMCID=rybewa.1718091461940.01.0; ntes_utid=tid._.cIVz7o5o4opFElAQFVbVwF32bFlknglN._.0; sDeviceId=YD-HtUOcuK0xXpAQlAFAEbELHPByq7T9JhP; _iuqxldmzr_=32; JSESSIONID-WYYY=tlU1FYQflmS9StEbQ38OytpSuT83Khgm%2Fw2gWD%5Cx0kll7P3hsWn1v2z9IqdZM3yylDEZ5p%5CoV6x5rzzE6yQzp2Qa7dAm7bTeIXR%2Fgs4mb1%2FEMsGIaHtTaQCr%2B7YzP%2BAte3tY2iEbk9uz6l2le4BsuuoXmfverMzFwVE40HzJ1n2JJk%2FZ%3A1718100271494',
      'origin': 'https://music.163.com',
      'pragma': 'no-cache',
      'priority': 'u=1, i',
      'referer': 'https://music.163.com/user?id=280316200',
      'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'
    }
  }
);

console.log('response()', response.data)
