import {useEffect} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'


mapboxgl.accessToken = 'pk.eyJ1IjoibWFydmludHYiLCJhIjoiY2t3OW42dGZwMmQxcDJxcGQybm00NnVzOCJ9.EtzQRLaeetyAD9GUBEVMGw';



export default function Home() {
      useEffect(() => {
             const map = new mapboxgl.Map({
              container: "map",
              style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
              center: [-99, 39],
              zoom: 3
          })
      })



  return (
    <Wrapper>
      <Map id="map">Map</Map>
      <ActionItems>Start</ActionItems>
    </Wrapper>
  )
}
const Wrapper = tw.div`
  flex flex-col bg-red-300 h-screen 


  `

const Map = tw.div`
  bg-red-500 flex-1
`

const ActionItems = tw.div`
  flex-1

`