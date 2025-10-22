import { createContext, useContext, useState, useEffect } from 'react';

const NotesContext = createContext();

function NotesProvider({ children }) {
	const [groups, setGroups] = useState(
		JSON.parse(localStorage.getItem('notes')) || [],
	);
	const [activeGroup, setActiveGroup] = useState(null);
	const currentActiveGroup = groups.find(group => group.id === activeGroup);

	function handleAddTitleToNotes(title, color) {
		setGroups(prevNotes => [
			{ id: Date.now(), title, color, notes: [] },
			...prevNotes,
		]);
	}

	function handleSelectGroup(id) {
		setActiveGroup(id);
	}

	useEffect(
		function () {
			localStorage.setItem('notes', JSON.stringify(groups));
		},
		[groups],
	);

	return (
		<NotesContext.Provider
			value={{
				groups,
				activeGroup,
				currentActiveGroup,
				onAddTitle: handleAddTitleToNotes,
				onSelectGroup: handleSelectGroup,
			}}
		>
			{children}
		</NotesContext.Provider>
	);
}

function useGroups() {
	const context = useContext(NotesContext);
	if (context === undefined) {
		throw new Error('useNotes is used outside NotesProvider');
	}
	return context;
}

export { NotesProvider, useGroups };
