import { useState } from 'react';
import { GroupList, Modal, FormAddGroup } from '../components';
import styles from './Sidebar.module.css';

export default function Sidebar() {
	const [showModal, setShowModal] = useState(false);

	return (
		<aside className={styles.sidebar}>
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
