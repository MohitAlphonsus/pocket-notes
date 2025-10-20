import styles from './Sidebar.module.css';

const arr = [
	{ id: 1, name: 'Html Group' },
	{ id: 2, name: 'Html Group' },
	{ id: 3, name: 'Html Group' },
	{ id: 4, name: 'Html Group' },
	{ id: 5, name: 'Html Group' },
	{ id: 6, name: 'Html Group' },
	{ id: 7, name: 'Html Group' },
	{ id: 8, name: 'Html Group' },
	{ id: 9, name: 'Html Group' },
	{ id: 10, name: 'Html Group' },
];
export default function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<header className={styles.header}>
				<h1>Pocket Notes</h1>
			</header>
			<ul className={styles.list}>
				{arr.map(note => (
					<li key={note.id}>
						<span>
							{note.name.split(' ')[0][0] + note.name.split(' ')[1][0]}
						</span>
						<span>{note.name}</span>
					</li>
				))}
			</ul>
			<button className={styles.btnAdd}>+</button>
		</aside>
	);
}
