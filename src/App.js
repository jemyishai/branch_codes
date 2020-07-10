import React from 'react';
import './App.css';
import data from './codesData/data.js';
import Codes from './components/Codes.js';
import Logo from './components/Logo';

function App() {
	return (
		<div>
			<Logo />
			<Codes branches={data} />
		</div>
	);
}

export default App;
