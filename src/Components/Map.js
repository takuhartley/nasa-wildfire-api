import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';
import { useState } from 'react';
import mapStyles from './mapStyles';

const Map = ({ eventData, center, zoom }) => {
	const [locationInfo, setLocationInfo] = useState(null);
	const options = {
		styles: mapStyles,
	};
	const markers = eventData.map((ev) => {
		if (ev.categories[0].id === 10) {
			return (
				<LocationMarker
					key={ev.categories.id}
					lat={ev.geometries[0].coordinates[1]}
					lng={ev.geometries[0].coordinates[0]}
					onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
				/>
			);
		}
		return null;
	});
	return (
		<div className="map">
			<GoogleMapReact
				bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
				defaultCenter={center}
				defaultZoom={zoom}
				options={options}
			>
				{markers}
			</GoogleMapReact>
			{locationInfo && <LocationInfoBox info={locationInfo} />}
		</div>
	);
};

Map.defaultProps = {
	center: {
		lat: 35.6804,
		lng: 139.769,
	},
	zoom: 6,
};
export default Map;
