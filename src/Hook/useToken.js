import { useEffect, useState } from "react"

export const useToken = email => {
    const [token, setToken] = useState('')
    useEffect(() => {
        if (email) {
            fetch(`${process.env.REACT_APP_api_url}/jwt?email=${email}`)
                .then(res => res.json()).then(data => {
                    localStorage.setItem('accessToken', data.accessToken)
                    setToken(data.accessToken)

                })
        }
    }, [email])
    return [token]
}

