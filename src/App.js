import React from 'react';
import './App.css';
import data from './codesData/data.js';
import Codes from './components/Codes.js';
import Logo from './components/Logo';
import HeaderText from './components/HeaderText';

function App() {
	return (
		<div class=".nypl-homepage-hero" >
			<div class=".box">
				<Logo />
				<HeaderText />
			</div>
			<Codes branches={data} />
		</div>
	);
}

export default App;
