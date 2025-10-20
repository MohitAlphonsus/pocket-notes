import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
export default function Modal({ children, showModal, onClose }) {
	return (
		<>
			{showModal &&
				createPortal(
					<div className={styles.overlay}>
						<div className={styles.content}>
							{children}
							<button className={styles.btnClose} onClick={onClose}>
								&times;
							</button>
						</div>
					</div>,
					document.getElementById('modal-root'),
				)}
		</>
	);
}
