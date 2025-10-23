import { useState, useEffect } from "react";
import { getAllVans } from "../../api";
import type { Van } from "../../api";

export function useVans() {
    const [vans, setVans] = useState<Van[]>([])

    useEffect(() => {
        async function getVans() {
            const vanData = await getAllVans()
            setVans(vanData)
        }

        getVans()

    }, [])

    /*     useEffect(() => {
            getAllVans()
                .then(data => setVans(data))
        }, []) */

    useEffect(() => {
        console.log(vans)
    }, [vans])

    return { vans }
}