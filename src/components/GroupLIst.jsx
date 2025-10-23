import styles from './GroupList.module.css';
import { useGroups } from '../context/NotesContext';

export default function GroupLIst() {
	const { groups, onSelectGroup, activeGroup, setShowSidebar } = useGroups();

	return (
		<ul className={styles.list}>
			{groups.map(group => (
				<li
					key={group.id}
					className={`${group.id === activeGroup ? styles.active : ''}`}
					onClick={() => {
						onSelectGroup(group.id);
						setShowSidebar(false);
					}}
				>
					<span style={{ backgroundColor: group.color }}>
						{group.title
							.split(' ')
							.slice(0, 2)
							.map(word => word[0].toUpperCase())
							.join('')}
					</span>
					<span>{group.title}</span>
				</li>
			))}
		</ul>
	);
}
