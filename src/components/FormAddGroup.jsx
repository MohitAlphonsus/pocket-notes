import { useState } from 'react';
import styles from './FormAddGroup.module.css';

const colors = [
	'#B38BFA',
	'#FF79F2',
	'#43E6FC',
	'#F19576',
	'#0047FF',
	'#6691FF',
];
export default function FormAddGroup({ onClose }) {
	const [addNoteGroupData, setAddNoteGroupData] = useState({
		groupName: '',
		color: '',
	});

	function handleSubmitGroupCreation(e) {
		e.preventDefault();
		if (
			addNoteGroupData.groupName.trim() === '' ||
			addNoteGroupData.color === ''
		)
			return;

		onClose();
	}

	function handleChange(e) {
		const { name, value } = e.target;
		setAddNoteGroupData({
			...addNoteGroupData,
			[name]: value,
		});
	}

	return (
		<div className={styles.formContainer}>
			<h2>Create New Group</h2>
			<form className={styles.form} onSubmit={handleSubmitGroupCreation}>
				<div className={styles.formGroup}>
					<label htmlFor="groupName">Group Name</label>
					<input
						type="text"
						id="groupName"
						placeholder="Enter group name"
						onChange={handleChange}
						name="groupName"
						value={addNoteGroupData.groupName}
					/>
				</div>
				<div className={styles.formGroup}>
					<span>Choose Color</span>
					<div className={styles.colors}>
						{colors.map(color => (
							<label
								key={color}
								htmlFor={color}
								className={styles.color}
								style={{
									backgroundColor: color,
									outline: `2px solid ${color}`,
								}}
							>
								<input
									id={color}
									type="radio"
									style={{
										opacity: 0,
									}}
									name="color"
									checked={addNoteGroupData.color === color}
									onChange={handleChange}
									value={color}
								/>
							</label>
						))}
					</div>
				</div>
				<button type="submit" className={styles.btnAdd}>
					Create
				</button>
			</form>
		</div>
	);
}
