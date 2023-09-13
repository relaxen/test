import React from 'react';

import { Collapse } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import './collapse.less';

const CollapsedItem = ({ title, evaluation, id, color = '#ffc940' }) => (
	<div className="collapse">
		<Collapse
			style={{
				borderRadius: '10px',
				border: '1px solid #F0EEEE',
				background: '#fff',
				boxShadow: '0px 0px 35px 0px rgba(66, 98, 180, 0.10)',
			}}
			expandIconPosition="end"
			items={[
				{
					label: (
						<>
							<div style={{ backgroundColor: color }} className="collapse__eval">
								{evaluation}
							</div>
							<span className="collapse__title">{title}</span>
						</>
					),
					children: <div id={id}></div>,
				},
			]}
			bordered={false}
			expandIcon={(props) => (
				<div style={{ fontSize: 32, color: '#8991A2' }}>
					<svg
						style={{ transform: `rotate(${props.isActive ? '180deg' : '0'})` }}
						xmlns="http://www.w3.org/2000/svg"
						width="42"
						height="42"
						viewBox="0 0 42 42"
						fill="none">
						<path
							d="M29.7505 16.0475C29.4226 15.7216 28.979 15.5386 28.5167 15.5386C28.0544 15.5386 27.6108 15.7216 27.283 16.0475L21.0005 22.2425L14.8055 16.0475C14.4776 15.7216 14.034 15.5386 13.5717 15.5386C13.1094 15.5386 12.6658 15.7216 12.338 16.0475C12.1739 16.2102 12.0437 16.4038 11.9549 16.617C11.8661 16.8303 11.8203 17.059 11.8203 17.29C11.8203 17.521 11.8661 17.7498 11.9549 17.963C12.0437 18.1763 12.1739 18.3698 12.338 18.5325L19.758 25.9525C19.9206 26.1165 20.1142 26.2467 20.3274 26.3356C20.5407 26.4244 20.7694 26.4702 21.0005 26.4702C21.2315 26.4702 21.4602 26.4244 21.6735 26.3356C21.8867 26.2467 22.0803 26.1165 22.243 25.9525L29.7505 18.5325C29.9145 18.3698 30.0447 18.1763 30.1335 17.963C30.2224 17.7498 30.2681 17.521 30.2681 17.29C30.2681 17.059 30.2224 16.8303 30.1335 16.617C30.0447 16.4038 29.9145 16.2102 29.7505 16.0475Z"
							fill="#8991A2"
						/>
					</svg>
				</div>
			)}
		/>
	</div>
);
export default CollapsedItem;
