import React from 'react';
import ReactDOM from 'react-dom/client';
import { Drawer } from './layout/Drawer';
import { initializeGoogleAnalytics } from './services/AnalyticsService';
import './i18n/i18n';
import './index.css';

initializeGoogleAnalytics();

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Drawer />
	</React.StrictMode>
);
