import { createContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

type LocationObject = {
    location: string | null
    long: string | null
    lat: string | null
}
type LocationContextProps = {
    children: ReactNode
}
type LocationContextType = {
    startLocation: LocationObject
    setStartLocation: Dispatch<SetStateAction<LocationObject>>
    endLocation: LocationObject
    setEndLocation: Dispatch<SetStateAction<LocationObject>>
}

const LocationContext = createContext<LocationContextType | undefined>(undefined)

function LocationContextProvider({ children }: LocationContextProps) {

    const [startLocation, setStartLocation] = useState<LocationObject>({
        location: null,
        long: null,
        lat: null
    })
    const [endLocation, setEndLocation] = useState<LocationObject>({
        location: null,
        long: null,
        lat: null
    })

    return (
        <LocationContext.Provider value={{
            startLocation,
            setStartLocation,
            endLocation,
            setEndLocation
        }}>
            {children}
        </LocationContext.Provider>

    )
}

export { LocationContext, LocationContextProvider }