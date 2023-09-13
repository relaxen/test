import React, { useEffect } from 'react';

import { Button } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

import LeftItem from './LeftItem';
import CollapsedItem from './CollapsedItem';
import Image from '../../assets/image41.png';

import './result.less';

const CollapsedItemsArray = [
	{
		id: 'estimates-district',
		evaluation: 3,
		title: 'Оценка инфраструктуры и района',
	},
	{
		id: 'estimates-realty-complex',
		evaluation: 4,
		title: 'Оценка жилого комплекса',
		color: '#42D0A6',
	},
	{
		id: 'estimates-flate',
		evaluation: 3,
		title: 'Оценка квартиры',
	},
];

const LeftItemsArray = [
	{
		title: 'Оценка от сервиса',
		evaluation: '8 млн ₽',
		text: 'Cтоимость, определенная на основе долгосрочных данных и консультаций с экспертами рынка недвижимости',
	},
	{
		title: 'Рыночный диапазон цены',
		evaluation: '7,5 - 8,5 млн ₽',
		text: 'Оценочные границы стоимости объекта на рынке недвижимости, основанные на анализе данных и консультациях с экспертами',
	},
	{
		title: 'Цена на сайтах (cian, domclick)',
		evaluation: '8,9 млн ₽',
		text: 'Стоимость квартиры, указанная в объявлениях на различных онлайн-ресурсах',
		color: '#F00',
	},
];

const Result: React.FC = () => {
	useEffect(() => {
		window.dispatchEvent(
			new CustomEvent('getData', {
				detail: { ids: ['estimates-district', 'estimates-realty-complex', 'estimates-flate'] },
			})
		);
	}, []);

	return (
		<div className="result">
			<h2 className="result__title">Результаты оценки</h2>

			<div className="result-description">
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
						<CollapsedItem key={el.id} {...el} />
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
