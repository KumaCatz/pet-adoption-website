import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:2500'
})

export const POST = (url, body) => {
  return new Promise(async (res, rej) => {
    try {
      const resp = await api.post(url, body)
      if (resp.status >= 400) {
        throw resp
      }
      res(resp.data)
    } catch(error) {
      handleError(error)
      rej()
    }
  })
}

// export const GET_USER = async (url) => {
//   try {
//     const resp = await api.get(url)
//     return resp.data
//   } catch(error) {
//     handleError(error)
//   }
// }

const handleError = (error) => {
  console.log(error)

}