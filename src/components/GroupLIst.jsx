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
						{note.title
							.split(' ')
							.slice(0, 2)
							.map(word => word[0].toUpperCase())
							.join('')}
					</span>
					<span>{note.title}</span>
				</li>
			))}
		</ul>
	);
}
