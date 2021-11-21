import {useEffect} from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoibWFydmludHYiLCJhIjoiY2t3OW42dGZwMmQxcDJxcGQybm00NnVzOCJ9.EtzQRLaeetyAD9GUBEVMGw';

const map = () => {

            useEffect(() => {
                const map = new mapboxgl.Map({
                container: "map",
                style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
                center: [-99, 39],
                zoom: 3
            })
        })
        
    return (
        <Wrapper id='map'>
            <div>
            
            </div>
        </Wrapper>

    )
}

export default map

const Wrapper = tw.div`
  flex-1
  `
