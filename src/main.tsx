import React from 'react';
import ReactDOM from 'react-dom/client';
import { Drawer } from './layout/Drawer';
import ReactGA from 'react-ga4';
import './i18n/i18n';
import './index.css';

ReactGA.initialize('G-NRQS4G8TGY');

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Drawer />
	</React.StrictMode>
);
