import { createContext, useState } from "react";

export const AppContext = createContext();

const  ContextProvider = ({children})=>{

    const [openModel, setopenModel] = useState(false);
    const [showNoteModel, setNoteModel] = useState(false);
    const [notesType, setNotesType] = useState(null);
    const [showDeleteModel, setShowDeleteModel] = useState(false);

    const showModel = (event)=>{
        event.preventDefault();
        setopenModel(true);
    }
    const hideModel = (event)=>{
        event.preventDefault();
        setopenModel(false);
    }
    const showNote = ($name)=>{
        setNotesType($name);
        setNoteModel(true);
    }
    const hideNote = (event)=> setNoteModel(false);
    const showDelete = ()=> setShowDeleteModel(true);
    const hideDelete = ()=> setShowDeleteModel(false);


    return (
            <AppContext.Provider value={{
                openModel,
                setopenModel,
                showNoteModel,
                setNoteModel,
                showModel,
                showNote,
                hideNote,
                hideModel,
                notesType,
                showDelete,
                hideDelete,
                showDeleteModel
            }}>
                {children}
            </AppContext.Provider>
            );
}

export default ContextProvider;