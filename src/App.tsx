import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

import './App.less';

const App: React.FC = () => {

	return (
		<div className="App">
			<div className="wrapper">
				<Header />
				<Main />
				<Footer />
			</div>
		</div>
	);
};

export default App;
