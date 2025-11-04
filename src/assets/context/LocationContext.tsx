import { createContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

type LocationObject = {
    loc: string | null
    long: string | null
    lat: string | null
}

type LocationContextProps = {
    children: ReactNode
}

type LocationContextType = {
    location: LocationObject
    setLocation: Dispatch<SetStateAction<LocationObject>>

}


const LocationContext = createContext<LocationContextType | undefined>(undefined)


function LocationContextProvider({ children }: LocationContextProps) {

    const [location, setLocation] = useState<LocationObject>({
        loc: null,
        long: null,
        lat: null
    })
    

    return (
        <LocationContext.Provider value={{ location, setLocation }}>
            {children}
        </LocationContext.Provider>

    )
}


export { LocationContext, LocationContextProvider }