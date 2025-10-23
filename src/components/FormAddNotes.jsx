import styles from './FormAddNotes.module.css';
import { useGroups } from '../context/NotesContext';

export default function FormAddNotes() {
	const { onAddNotes, note, setNote } = useGroups();

	function handleSubmitNote(e) {
		e.preventDefault();
		if (note.trim() === '') return;
		onAddNotes(note);

		setNote('');
	}

	return (
		<div className={styles.formContainer}>
			<form className={styles.form} onSubmit={handleSubmitNote}>
				<textarea
					placeholder="Enter your text here........"
					onChange={e => setNote(e.target.value)}
					value={note}
				></textarea>
				<button
					type="submit"
					disabled={note.trim() === ''}
					className={`${styles.btnSubmit} ${
						note.trim() === '' ? styles.disabled : styles.active
					}`}
				></button>
			</form>
		</div>
	);
}
