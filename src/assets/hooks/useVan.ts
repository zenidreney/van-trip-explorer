import { getVan } from "../../api";
import type {Van} from "../../api"
import { useState, useEffect } from "react";

export function useVan(id: string | undefined) {
    const [van, setVan] = useState<Van | null>(null)
    

    useEffect(() => {

    if(id) {

        async function getSingleVan(id: string) {
            const vanData = await getVan(id)
            setVan(vanData)
        }

        getSingleVan(id)
    }        
        



    }, [id])

      useEffect(() => {
        console.log(van)
    }, [van])


    return { van }


}