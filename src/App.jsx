import { Sidebar, Content } from './components';
import { NotesProvider } from './context/NotesContext';
export default function App() {
	return (
		<NotesProvider>
			<main className="app">
				<Sidebar />
				<Content />
			</main>
		</NotesProvider>
	);
}
