import { useEffect, useState } from "react"

const useBuyer = email => {
    const [buyer, setBuyer] = useState(false)
    const [buyerLoading, setBuyerLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`${process.env.REACT_APP_api_url}/users/buyer/${email}`)
                .then(res => res.json()).then(data => {
                    if (data.buyer) {
                        setBuyer(data.buyer)
                        setBuyerLoading(false)
                    }
                })
        }
    }, [email])
    return [buyer, buyerLoading]
}
export default useBuyer