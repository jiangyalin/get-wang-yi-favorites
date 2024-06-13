import Axios from 'axios'

const ajax = (options = {}, data = {}) => {
  const { url = '', method = 'get', baseUrl = '', responseType = '' } = options
  const { query = {}, body = {}, headers = {}, isFormData = false } = data

  return new Promise((resolve, reject) => {
    Axios({
      baseURL: baseUrl || '',
      url,
      method,
      params: query,
      data: isFormData ? new URLSearchParams(body) : (Object.keys(body).length ? body : null),
      timeout: 1000 * 50,
      responseType: responseType,
      headers: {
        ...headers
      }
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        console.log('err', err.data)
        reject(err.data)
      })
  })
}

export default ajax
