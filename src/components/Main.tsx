import React, { useEffect } from 'react';
import Selector from './Selector/Selector';

const Main: React.FC = () => {
	useEffect(() => {
		window.dispatchEvent(
			new CustomEvent('getData', {
				detail: { ids: ['estimates-district', 'estimates-realty-complex', 'estimates-flate'] },
			})
		);
	}, []);

	return (
		<main className="main">
			<Selector />
			<div id="estimates-district"></div>
			<div id="estimates-realty-complex"></div>
			<div id="estimates-flate"></div>
		</main>
	);
};
export default Main;
