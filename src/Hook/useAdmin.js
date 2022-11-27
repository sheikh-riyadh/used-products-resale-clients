import { useEffect, useState } from "react"

const useAdmin = email => {
    const [admin, setAdmin] = useState(false)
    const [adminLoading, setAdminLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`${process.env.REACT_APP_api_url}/users/admin/${email}`)
                .then(res => res.json()).then(data => {
                    if (data.admin) {
                        setAdmin(data.admin)
                        setAdminLoading(false)
                    }
                })
        }
    }, [email])
    return [admin, adminLoading]
}
export default useAdmin