import { useState } from 'react';
import { GroupList, Modal, FormAddGroup } from '../components';
import styles from './Sidebar.module.css';
import { useGroups } from '../context/NotesContext';

export default function Sidebar() {
	const [showModal, setShowModal] = useState(false);
	const { showSidebar } = useGroups();

	return (
		<aside
			className={`${styles.sidebar} ${
				showSidebar ? styles.visible : styles.hidden
			}`}
		>
			<header className={styles.header}>
				<h2>Pocket Notes</h2>
			</header>
			<GroupList />
			<button className={styles.btnAdd} onClick={() => setShowModal(true)}>
				+
			</button>
			<Modal showModal={showModal} onClose={() => setShowModal(false)}>
				<FormAddGroup onClose={() => setShowModal(false)} />
			</Modal>
		</aside>
	);
}
