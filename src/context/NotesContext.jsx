import { createContext, useContext } from "react";

const NotesContext = createContext();

function NotesProvider({ children }) {
  return <NotesContext.Provider value={}>{children}</NotesContext.Provider>;
}

function useNotes() {
  const context = useContext(NotesContext);
  if (context === undefined) {
    throw new Error("useNotes is used outside NotesProvider");
  }
  return context;
}

export { NotesProvider, useNotes };