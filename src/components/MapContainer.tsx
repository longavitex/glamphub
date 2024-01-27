import { icon } from "leaflet"
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
    const position = { lat: 21.505, lng: 105.09 }

    const ICON = icon({
        iconUrl: "/images/marker-icon.png",
        iconSize: [32, 32],
    })

    return (
        <>
            <div className='w-full h-[400px] overflow-hidden relative'>
                <MapContainer center={position} zoom={12} scrollWheelZoom={true} style={{ height: '400px' }}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position} icon={ICON}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </>
    )
}
export default MapComponent