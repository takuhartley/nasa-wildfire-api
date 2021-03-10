import React from 'react';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/flash-alert';

const Header = () => {
	return (
		<header className="header">
			<h1>
				<Icon icon={locationIcon} />
				Tropical Storm Tracker (Powered by NASA)
			</h1>
		</header>
	);
};

export default Header;
