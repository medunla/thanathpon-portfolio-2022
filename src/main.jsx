import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import Layout from './Layout'

import './assets/css/icomoon.css'
import './assets/css/bootstrap.css'
import './assets/css/app.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Layout />
		</BrowserRouter>
	</React.StrictMode>
)
