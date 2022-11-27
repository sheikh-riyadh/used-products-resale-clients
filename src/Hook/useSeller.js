import { useEffect, useState } from "react"

const useSeller = email => {
    const [seller, setseller] = useState(false)
    useEffect(() => {
        if (email) {
            fetch(`${process.env.REACT_APP_api_url}/users/seller/${email}`)
                .then(res => res.json()).then(data => {
                    if (data.seller) {
                        setseller(data.seller)
                    }
                })
        }
    }, [email])
    return [seller]
}
export default useSeller