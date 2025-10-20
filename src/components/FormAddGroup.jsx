import styles from './FormAddGroup.module.css';

const colors = [
	'#B38BFA',
	'#FF79F2',
	'#43E6FC',
	'#F19576',
	'#0047FF',
	'#6691FF',
];
export default function FormAddGroup() {
	function handleSubmitGroupCreation(e) {
		e.preventDefault();
	}

	return (
		<div className={styles.formContainer}>
			<h2>Create New Group</h2>
			<form className={styles.form} onSubmit={handleSubmitGroupCreation}>
				<div className={styles.formGroup}>
					<label htmlFor="groupName">Group Name</label>
					<input type="text" id="groupName" placeholder="Enter group name" />
				</div>
				<div className={styles.formGroup}>
					<span>Choose Color</span>
					<div className={styles.colors}>
						{colors.map(color => (
							<div
								key={color}
								style={{ backgroundColor: `${color}` }}
								className={styles.color}
							>
								&nbsp;
							</div>
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
