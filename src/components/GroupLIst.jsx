import styles from './GroupLIst.module.css';
import { useNotes } from '../context/NotesContext';

export default function GroupLIst() {
	const { notes } = useNotes();
	console.log(notes);

	return (
		<ul className={styles.list}>
			{notes.map(note => (
				<li key={note.id}>
					<span style={{ backgroundColor: note.color }}>
						{note.title.split(' ')[0][0].toUpperCase() +
							note.title.split(' ')[1][0].toUpperCase()}
					</span>
					<span>{note.title}</span>
				</li>
			))}
		</ul>
	);
}
