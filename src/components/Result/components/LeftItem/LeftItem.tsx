import React from 'react';

import './LeftItem.less';

const LeftItem = ({ title, evaluation, text, color = '#110229' }) => (
	<div className="left-item">
		<h3 className="left-item__title">{title}</h3>
		<div className="left-item__eval" style={{ color }}>
			{evaluation}
		</div>
		<div className="left-item__text">{text}</div>
	</div>
);
export default LeftItem;
