import React from 'react';

import { Button, Divider, Form, InputNumber, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { useForm } from 'antd/es/form/Form';

import './Selector.less';

const initialValue = {
	roomCount: 2,
	square: 38.6,
	address: 1,
};
const mockAdresses = [{ value: 1, label: 'Бунинские Луга, 3.4.1' }];

const Selector: React.FC = () => {
	const [form] = useForm();

	return (
		<section className="selector">
			<h1 className="selector__title">Оценка инвестиционной привлекательности квартиры</h1>
			<div className="selector__text">
				Анализ инвестиционной привлекательности квартиры на основе её параметров, также параметров жилого комплекса и
				инфраструктуры
			</div>
			<div className="selector__ui">
				<Form initialValues={initialValue} form={form} className="selector__form" layout="vertical">
					<Form.Item label="Адрес и номер дома" name="address">
						<Select options={mockAdresses} />
					</Form.Item>
					<Divider type="vertical" />
					<Form.Item label="Площадь м²" name="square">
						<InputNumber precision={2} decimalSeparator="," />
					</Form.Item>
					<Divider type="vertical" />
					<Form.Item label="Количество комнат" name="roomCount">
						<Select style={{ width: 'auto' }} options={[{ label: 2, value: 2 }]} />
					</Form.Item>
					<Button size="large" type="primary" icon={<SearchOutlined style={{ fontSize: '26px' }} />}></Button>
				</Form>
			</div>
		</section>
	);
};
export default Selector;
