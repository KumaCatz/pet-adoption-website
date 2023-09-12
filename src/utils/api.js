import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:2500'
})

export const POST_NEW_USER = async (url, body) => {
  try {
    console.log(body)
    const resp = await api.post(url, body)
    return resp.data
  } catch(error) {
    handleError(error)
  }
}

const handleError = (error) => {
  alert(error)
}