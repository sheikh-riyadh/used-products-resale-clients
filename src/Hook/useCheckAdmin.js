import { useEffect, useState } from "react"

export const useCheckAdmin = email => {
    const [checkAdmin, setCheckAdmin] = useState(false)
    const [loadingAdmin, setLoadingAdmin] = useState(true)

    useEffect(() => {
        if (email) {
            fetch(`${process.env.REACT_APP_api_url}/users/${email}`)
                .then(res => res.json())
                .then(data => {
                    setCheckAdmin(data.checkAdmin)
                    setLoadingAdmin(false)
                })
        }
    }, [email])
    return [checkAdmin, loadingAdmin]
}