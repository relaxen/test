import React from 'react';

import { Button } from 'antd';

import Logo from '../Logo';

import './Header.less';

const Header = () => (
	<div className="wrapper">
		<header className="header">
			<Logo />
			<Button style={{ width: '164px' }} type="primary">
				Войти
			</Button>
		</header>
	</div>
);
export default Header;
