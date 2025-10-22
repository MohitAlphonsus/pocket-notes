import { createContext, useContext, useState, useEffect } from 'react';

const NotesContext = createContext();

function NotesProvider({ children }) {
	const [notes, setNotes] = useState(
		JSON.parse(localStorage.getItem('notes')) || [],
	);

	function handleAddTitleToNotes(title, color) {
		setNotes(prevNotes => [
			{ id: Date.now(), title, color, notes: [] },
			...prevNotes,
		]);
	}

	useEffect(
		function () {
			localStorage.setItem('notes', JSON.stringify(notes));
		},
		[notes],
	);

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
