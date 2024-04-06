import axios from "axios"
import { useState } from "react"

const UseFetch = (url) => {
    
    const [response, setResponse] = useState()
    const [hasError, setHasError] = useState(false)

    const getApi = () => {
        axios.get(url)
        .then(res => {
            setResponse(res.data)
            setHasError(false)
        })
        .catch(error => {
            console.log(error)
            setHasError(true)
        })
    }
    console.log(response)
    return [response, getApi, hasError]
}

export default UseFetch