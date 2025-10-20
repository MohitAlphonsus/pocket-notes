import styles from './Content.module.css';
import heroImg from '../assets/hero.png';

export default function Content() {
	return (
		<section className={styles.content}>
			<div className={styles.contentBox}>
				<picture className={styles.heroImg}>
					<img src={heroImg} alt="illustration art of notes" />
				</picture>
				<h1>Pocket Notes</h1>
				<p>
					Send and receive messages without keeping your phone online. Use
					Pocket Notes on up to 4 linked devices and 1 mobile phone
				</p>
			</div>
		</section>
	);
}
