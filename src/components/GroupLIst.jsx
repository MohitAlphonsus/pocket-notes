import styles from './GroupLIst.module.css';

const arr = [
	{ id: 1, name: 'Html Group' },
	{ id: 2, name: 'Css Group' },
];
export default function GroupLIst() {
	return (
		<ul className={styles.list}>
			{arr.map(note => (
				<li key={note.id}>
					<span>{note.name.split(' ')[0][0] + note.name.split(' ')[1][0]}</span>
					<span>{note.name}</span>
				</li>
			))}
		</ul>
	);
}
