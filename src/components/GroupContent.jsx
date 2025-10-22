import styles from './GroupContent.module.css';
import { useGroups } from '../context/NotesContext';

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
							<p>{note.noteText}</p>
							<div className={styles.timestamp}>
								<span>{note.date}</span>
								<span>&nbsp;</span>
								<span>{note.time}</span>
							</div>
						</div>
					))
				) : (
					<p className={styles.noNotesMsg}>Add Notes</p>
				)}
			</div>
			<div className={styles.formContainer}>
				<form className={styles.form}>
					<textarea placeholder="Enter your text here........"></textarea>
					<button
						type="submit"
						className={`${styles.btnSubmit} ${styles.disabled}`}
					></button>
				</form>
			</div>
		</>
	);
}
