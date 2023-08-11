import axios from "axios"
import { useState } from "react"

const useFetch = () => {

  const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1'

  const [infoApi, setInfoApi] = useState()

  // GET
  const getApi = (path = '') => {
    const url = `${baseUrl}${path}`
    axios.get(url)
      .then(res => setInfoApi(res.data))
      .catch(err => console.error(err));
  }

  return [ infoApi, getApi ]
}

export default useFetch