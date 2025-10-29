import { useState, useEffect } from "react";
import { getAllVans } from "../../api";
import type { Van } from "../../api";

export function useVans() {
    const [loading, setLoading] = useState(true)
    const [vans, setVans] = useState<Van[]>([])
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        async function getVans() {
            try {
                //throw new Error("Test Error") /* To test the error state */
                const vansData = await getAllVans()
                setVans(vansData)
            } catch (error) {
                setError(error instanceof Error ? error : new Error("Error"))
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        getVans()

    }, [])

   /*  useEffect(() => {
        console.log(vans)
    }, [vans]) */

    return { vans, loading, error }
}