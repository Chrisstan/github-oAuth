import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./pages/Auth/Login"
import "./assets/css/styles.css"

function App() {
	return (
		<div className="App" >
			<BrowserRouter>
        		<Routes>
					<Route exact path="" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
