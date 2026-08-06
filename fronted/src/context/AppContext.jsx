import { createContext, useEffect, useState } from "react";
import { apiUrl } from "../components/Https";
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

    const [allCategory, setAllCategory] = useState([]);
    const [allNotes, setAllNotes] = useState([]);

    const fetchCategories = async ()=>{
        const res = await fetch(`${apiUrl}/fetchcat`,{
            method:'GET',
            headers:{
            'Content-type':'application/json',
            'Accept':'application/json'
            }
        })
        .then(resp => resp.json())
        .then((result)=>{
            if(result.status === 200){
                const newCategories = result.categories;
                setAllCategory(newCategories);
            }
        });
    }
    
    const fetchNotes = async ()=>{
        const res = await fetch(`${apiUrl}/allnotes`,{
            method:'GET',
            headers:{
            'Content-type':'application/json',
            'Accept':'application/json'
            }
        })
        .then(resp => resp.json())
        .then((result)=>{
            if(result.status === 200){
                const allNotes = result.notes;
                setAllNotes(allNotes);
            }
        });
    }
    
    useEffect(()=>{
        fetchCategories();
        fetchNotes();
    },[]);

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
                allCategory,
                setAllCategory,
                showDelete,
                allNotes,
                hideDelete,
                fetchCategories,
                showDeleteModel
            }}>
                {children}
            </AppContext.Provider>
            );
}

export default ContextProvider;