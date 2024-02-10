import React from 'react';

import './App.css';
import Connect from './components/Wallet/Connect';
import Home from './components/Home';
import BarberServices from './components/BarberServices';
import { url } from 'inspector';


const App = () => {
	
	

	return (
		<div 
		style={{
			backgroundImage: "url('https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // Replace with your image URL
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
		}}
		>
		<Home/>
		<BarberServices/>
		<Connect/>
		</div>
		
	);
};

export default App;
