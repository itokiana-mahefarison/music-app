import "./App.css";
import { Baseline } from "./components/baseline/Baseline";
import { NavBar } from "./components/navbar/NavBar";
import { SoundsEffect } from "./components/sounds-effect/SoundsEffect";

function App() {
	return (
		<div className="app px-40 py-10 h-screen bg-bg-color/70">
			<NavBar />
			<SoundsEffect/>
			<Baseline/>
		</div>
	);
}

export default App;
