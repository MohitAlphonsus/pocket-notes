import { createContext, useContext, useState } from 'react';

const NotesContext = createContext();

function NotesProvider({ children }) {
	const [notes, setNotes] = useState([]);

	function handleAddTitleToNotes(title, color) {
		setNotes(prevNotes => [
			{ id: Date.now(), title, color, notes: [] },
			...prevNotes,
		]);
	}

	return (
		<NotesContext.Provider value={{ notes, onAddTitle: handleAddTitleToNotes }}>
			{children}
		</NotesContext.Provider>
	);
}

function useNotes() {
	const context = useContext(NotesContext);
	if (context === undefined) {
		throw new Error('useNotes is used outside NotesProvider');
	}
	return context;
}

export { NotesProvider, useNotes };
