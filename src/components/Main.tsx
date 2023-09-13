import React, { useEffect } from 'react';
import Selector from './Selector/Selector';
import Result from './Result';

const Main: React.FC = () => {
	return (
		<main className="main">
			<div className="wrapper">
				<Selector />
				<Result />
			</div>
		</main>
	);
};
export default Main;
