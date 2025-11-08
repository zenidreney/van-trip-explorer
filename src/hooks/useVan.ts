import { getVan } from "../api";
import type { Van } from "../api"
import { useState, useEffect } from "react";

export function useVan(id: string | undefined) {
    const [loading, setLoading] = useState(true)
    const [van, setVan] = useState<Van | null>(null)
    const [error, setError] = useState<Error | null>(null)


    useEffect(() => {

        if (id) {

            async function getSingleVan(id: string) {
                try {
                   // throw new Error("Test Error") /* To test the error state */

                    const vanData = await getVan(id)
                    setVan(vanData)
                } catch (error) {
                    setError(error instanceof Error ? error : new Error("Error"))
                    console.log(error)
                } finally {
                    setLoading(false)
                }
            }

            getSingleVan(id)
        }


    }, [id])

    useEffect(() => {
        //console.log(van)
    }, [van])


    return { van, loading, error }


}