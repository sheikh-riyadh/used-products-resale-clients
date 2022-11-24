import { useEffect } from "react"

export const useTitle = (title) => {

    useEffect(() => {
        document.title = `car dealer ${title}`
    }, [title])
}