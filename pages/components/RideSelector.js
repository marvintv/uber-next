import React, { useState, useEffect } from "react";
import tw from 'tailwind-styled-components'
import { carList } from '../data/carList'


const RideSelector = ({pickupCoordinates, dropoffCoordinates}) => {

    const [rideDuration, setrideDuration] = useState(0)

    useEffect(() => {
              rideDuration =  fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoibWFydmludHYiLCJhIjoiY2t3YmI1ZWplZ2dnaTJ4cGc3eXNxZHV6NiJ9.YtRqOeEQpCq8dIEt07HI-w`)
                .then(res => res.json())
                .then(data => {

                    if(data.routes){
                        if(data.routes[0]){
                            setrideDuration(data.routes[0].duration / 100)
    
                        }
                    }

                })
    }, [pickupCoordinates, dropoffCoordinates])
    //get ride duration from map box api

    /*
    Pickup 
    Dropoff
    */
    // useEffect = (()=>{
    //                         /*template literal to pass in parameters in string (variables) */
    //       rideDuration =  fetch(
    //             `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoibWFydmludHYiLCJhIjoiY2t3YmI1ZWplZ2dnaTJ4cGc3eXNxZHV6NiJ9.YtRqOeEQpCq8dIEt07HI-w`
    //             ).then(res => res.json())
    //             .then(data =>
    //                 {   
    //                     if(data.routes){
    //                         setrideDuration(data.routes[0].duration / 100)
    //                     }
                        
    //                 })
    // },[pickupCoordinates, dropoffCoordinates])

    return (
        <Wrapper>

            <Title>Choose a ride, or swipe up for more</Title>
            <CarList>

                {carList.map((car, index)=>(

                <Car key={index}>
                <CarImg src={car.imgUrl}/>
                <CarDetails>
                    <Service>
                        {car.service}
                    </Service>
                    <Time>
                        5 mins away
                    </Time>
                </CarDetails>
                <Price>
                      {'$' + (rideDuration * car.multiplier).toFixed(2)}
                </Price>
                </Car>
                ))}
               
            </CarList>
        </Wrapper>
    )
}

export default RideSelector


const Wrapper = tw.div`

flex-1  flex flex-col overflow-y-scroll

`

const Title = tw.div`

    text-gray-500 text-center text-xs py-2 border-b
`

const CarList = tw.div`
overflow-y-scroll
`
const Car = tw.div`
   flex p-4 items-center 
`
const CarImg = tw.img`
h-14
mr-2

`
const CarDetails = tw.div`
    flex-1
`
const Service = tw.div`
font-medium

`
const Time = tw.div`
text-xs text-blue-500

`
const Price = tw.div`

text-sm font-normal
`