import styles from './GroupContent.module.css';
import { useGroups } from '../context/NotesContext';
import { FormAddNotes } from '../components';

export default function GroupContent() {
	const { currentActiveGroup } = useGroups();
	const { title, color, notes } = currentActiveGroup;
	return (
		<>
			<header className={styles.header}>
				<span style={{ backgroundColor: color }}>
					{title
						.split(' ')
						.slice(0, 2)
						.map(word => word[0].toUpperCase())
						.join('')}
				</span>
				<span>{title}</span>
			</header>
			<div className={styles.notes}>
				{notes.length > 0 ? (
					notes.map(note => (
						<div className={styles.note} key={note.id}>
							<p>{note.note}</p>
							<div className={styles.timestamp}>
								<span>{note.datestamp}</span>
								<span>&nbsp;</span>
								<span>{note.timestamp}</span>
							</div>
						</div>
					))
				) : (
					<p className={styles.noNotesMsg}>Add Notes</p>
				)}
			</div>
			<FormAddNotes />
		</>
	);
}
