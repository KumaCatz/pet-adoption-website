import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:2500'
})

export const POST = async (url, body) => {
  try {
    const resp = await api.post(url, body)
    return resp.data
  } catch(error) {
    handleError(error)
  }
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
  alert(error)
}