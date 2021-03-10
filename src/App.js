import Map from './Components/Map';
import './App.css';
import { useState, useEffect } from 'react';
import Loader from './Components/Loader';
import Header from './Components/Header';
function App() {
	const [eventData, setEventData] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchEvents = async () => {
			setLoading(true);
			const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
			const { events } = await res.json();
			setEventData(events);
			console.log('The site is currently loading...' + loading);
			setLoading(false);
		};
		fetchEvents();
	}, []);
	return (
		<div>
			<Header />
			{!loading ? <Map eventData={eventData} /> : <Loader />}
		</div>
	);
}

export default App;
