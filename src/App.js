import React from 'react';
import './App.css';
import data from './codesData/formattedData.js';
import Codes from './components/Codes.js';
import Logo from './components/Logo';
import HeaderText from './components/HeaderText';

function App() {
	return (
		<div
		className="inner-padding">
			<div className="nypl-homepage-hero" >
				<div className="box">
					<Logo />
					<HeaderText />
				</div>
			<Codes branches={data}  />
			</div>
		</div>
	);
}

{/* need to add a warning around regexp entries */}

export default App;
