import React from 'react';

import { Button } from 'antd';

import Logo from './Logo';

const Header = () => (
	<header className="header">
		<Logo />
		<Button type="primary">Войти</Button>
	</header>
);
export default Header;
