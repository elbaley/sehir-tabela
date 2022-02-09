import {
	BrowserRouter,
	Routes,
	Route,
	Link,
	HashRouter,
} from 'react-router-dom';
import './App.css';
import Tabela from './components/Tabela';

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/sehir-tabela">
					<Route index element={<Tabela />} />
					<Route path=":cityId" element={<Tabela />} />
				</Route>
				<Route
					path="*"
					element={
						<main style={{ color: 'black' }}>
							<p>404- Bulunamadı </p>
							<Link to="/">Anasayfa </Link>
						</main>
					}
				/>
			</Routes>
		</HashRouter>
	);
}

export default App;
