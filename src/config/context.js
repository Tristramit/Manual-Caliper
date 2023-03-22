import React, {useContext} from "react";

export const SizeContext = createContext({
    sizeItems: [],
    itemsArray: [],
    itemsLength: 0,
    itemsAverage: 0,
    location: null,
    deleteSize: ()=>{},
})