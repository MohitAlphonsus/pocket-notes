import { createContext, useContext, useState, useEffect } from 'react';

const NotesContext = createContext();

function NotesProvider({ children }) {
	const [groups, setGroups] = useState(
		JSON.parse(localStorage.getItem('notes')) || [],
	);
	const [showSidebar, setShowSidebar] = useState(true);
	const [activeGroup, setActiveGroup] = useState(null);
	const currentActiveGroup = groups.find(group => group.id === activeGroup);

	function handleAddTitleToGroups(title, color) {
		setGroups(prevNotes => [
			{ id: Date.now(), title, color, notes: [] },
			...prevNotes,
		]);
	}

	function handleAddNotesToGroup(note) {
		const today = new Date();
		const formattedDate = today.toLocaleDateString('en-GB', {
			day: '2-digit',
			month: 'short',
			year: 'numeric',
		});

		const formattedTime = today.toLocaleTimeString('en-US', {
			hour: '2-digit',
			minute: '2-digit',
			hour12: true,
		});

		setGroups(prevNotes => {
			return prevNotes.map(group => {
				if (group.id === activeGroup) {
					return {
						...group,
						notes: [
							...group.notes,
							{
								id: Date.now(),
								note,
								datestamp: formattedDate,
								timestamp: formattedTime,
							},
						],
					};
				}
				return group;
			});
		});
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

	console.log(groups);
	return (
		<NotesContext.Provider
			value={{
				groups,
				activeGroup,
				currentActiveGroup,
				showSidebar,
				setShowSidebar,
				onAddTitle: handleAddTitleToGroups,
				onSelectGroup: handleSelectGroup,
				onAddNotes: handleAddNotesToGroup,
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
