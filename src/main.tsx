import React from 'react';
import ReactDOM from 'react-dom/client';
import { Drawer } from './layout/Drawer';
import './index.css';

import './i18n/i18n';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Drawer />
	</React.StrictMode>
);
