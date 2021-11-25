import {useEffect} from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoibWFydmludHYiLCJhIjoiY2t3YmI1ZWplZ2dnaTJ4cGc3eXNxZHV6NiJ9.YtRqOeEQpCq8dIEt07HI-w';

const Map = (props) => {

    useEffect(() => {

        
        const map1 = new mapboxgl.Map({
        container: "map",
        style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
        center: [-99.29011, 39.172],
        zoom: 5
            })

   
        
        if(props.pickupCoordinates){
            addToMap(map1, props.pickupCoordinates)
        }
        if(props.dropoffCoordinates){
            addToMap(map1, props.dropoffCoordinates)
        }
        if(props.pickupCoordinates && props.dropoffCoordinates){

            map1.fitBounds([
                props.pickupCoordinates, // first bounded coordinates
                props.dropoffCoordinates, // second bounded coordinates
                ], {

                    padding: 60
                }
            
                )
        }
    }, [props.pickupCoordinates, props.dropoffCoordinates])


    const addToMap = (map1, coordinate) => {
        const marker = new mapboxgl.Marker()
        .setLngLat(coordinate)
        .addTo(map1)
    }


        
    return (
        <Wrapper id="map">
            <div>

            </div>
        </Wrapper>

    )
}

export default Map

const Wrapper = tw.div`
flex-1 h-1/2
`