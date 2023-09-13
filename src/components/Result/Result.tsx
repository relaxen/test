import React, { useEffect, useState } from 'react';

import { Button } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

import LeftItem from './components/LeftItem/LeftItem';
import CollapsedItem from './components/CollapsedItem/CollapsedItem';
import Image from '../../assets/image41.png';
import { CollapsedItemsArray, LeftItemsArray } from './constants';

import './result.less';

const ids = CollapsedItemsArray.map((el) => el.id);
const initialValues = {
	'estimates-district': null,
	'estimates-realty-complex': null,
	'estimates-flate': null,
};
const Result: React.FC = () => {
	const [collapseText, setCollapseText] = useState(initialValues);

	const subscribeCallback = () => {
		setCollapseText((prev) =>
			ids.reduce(
				(accumulator, currentValue) => ({
					...accumulator,
					[currentValue]: document.getElementById(currentValue)?.innerHTML,
				}),
				prev
			)
		);
	};

	useEffect(() => {
		window.dispatchEvent(
			new CustomEvent('getData', {
				detail: { ids },
			})
		);
		window.addEventListener('domWasUpdated', subscribeCallback);
		return () => {
			window.removeEventListener('domWasUpdated', subscribeCallback);
		};
	}, []);

	return (
		<div className="result">
			<div className="" style={{ display: 'none' }}>
				{ids.map((el) => (
					<div key={el} id={el}>
						{el}
					</div>
				))}
			</div>
			<h2 className="result__title">Результаты оценки</h2>

			<div className="result__description">
				Отчёт о квартире по адресу: Москва, НАО (Новомосковский), Коммунарка поселок, Бунинские Луга жилой комплекс,
				3.4.1
			</div>
			<div className="">Квартира опубликована на следующих площадках: cian, domclick</div>

			<div className="result__main">
				<div className="result__left-col">
					{LeftItemsArray.map((item) => (
						<LeftItem key={item.title} {...item} />
					))}
					<img style={{ marginTop: '37px' }} src={Image} alt="" />
				</div>
				<div className="result__right-col">
					{CollapsedItemsArray.map((el) => (
						<CollapsedItem
							key={el.id}
							{...el}
							children={<div className="result__collapse-child">{collapseText[el.id]}</div>}
						/>
					))}
					<div className="">
						<div className="result__extra">
							<InfoCircleOutlined style={{ fontSize: 26 }} />
							<div className="result__extra-text">
								Для того чтобы понять, какие параметры влияют на стоимость квартиры, нажмите на кнопку “Подбробный
								отчет”.
							</div>
						</div>
						<Button style={{ maxWidth: '483px', width: '100%' }} type="primary">
							Подробный отчет
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Result;
