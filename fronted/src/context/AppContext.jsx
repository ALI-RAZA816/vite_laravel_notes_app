import { createContext, useState } from "react";

export const AppContext = createContext();

const  ContextProvider = ({children})=>{

    const [openModel, setopenModel] = useState(false);

    return (
            <AppContext.Provider value={{
                openModel,
                setopenModel,
            }}>
                {children}
            </AppContext.Provider>
            );
}

export default ContextProvider;