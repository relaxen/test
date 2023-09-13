import React from 'react';

import { Form, Select } from 'antd';
import { useForm } from 'antd/es/form/Form';

import './Selector.less';

const Selector: React.FC = () => {
	const [form] = useForm();
	console.log();
	return (
		<section className="selector">
			<h1 className="selector__title">Оценка инвестиционной привлекательности квартиры</h1>
			<div className="selector__text">
				Анализ инвестиционной привлекательности квартиры на основе её параметров, также параметров жилого комплекса и
				инфраструктуры
			</div>
			<div className="selector__ui">
				<Form form={form} layout="horizontal">
					<Form.Item label="Адрес и номер дома" name="address">
						<Select />
					</Form.Item>
				</Form>
			</div>
		</section>
	);
};
export default Selector;
