import { useEffect, useState } from "react"

const useSeller = email => {
    const [seller, setseller] = useState(false)
    const [sellerLoading, setSellerLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`${process.env.REACT_APP_api_url}/users/seller/${email}`)
                .then(res => res.json()).then(data => {
                    if (data.seller) {
                        setseller(data.seller)
                        setSellerLoading(false)
                    }
                })
        }
    }, [email])
    return [seller, sellerLoading]
}
export default useSeller