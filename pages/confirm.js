import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
useRouter
import tw from "tailwind-styled-components";
import Map from './components/Map'
import RideSelector from './components/RideSelector';
import Link from 'next/link';
const Confirm = () => {

    const router = useRouter()
    const {pickup, dropoff} = router.query // grabs data from search.js as a query parameter

    const [ pickupCoordinates, setPickupCoordinates ] = useState([0, 0]);
    const [ dropoffCoordinates, setDropoffCoordinates ] = useState([0, 0]);

    // console.log("pickup: ", pickup)
    // console.log('dropoff: ', dropoff)
    const getPickupCoordinates = (pickup) => {
        //Using fetch function
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + 
            new URLSearchParams({
                access_token: "pk.eyJ1IjoibWFydmludHYiLCJhIjoiY2t3YmI1ZWplZ2dnaTJ4cGc3eXNxZHV6NiJ9.YtRqOeEQpCq8dIEt07HI-w",
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {

            if(data.features){
                setPickupCoordinates(data.features[0].center);
            }
            
        })
    }

    const getDropoffCoordinates = (dropoff) => {

        //Using fetch function
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + 
            new URLSearchParams({
                access_token: "pk.eyJ1IjoibWFydmludHYiLCJhIjoiY2t3YmI1ZWplZ2dnaTJ4cGc3eXNxZHV6NiJ9.YtRqOeEQpCq8dIEt07HI-w",
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            if (data.features){
                setDropoffCoordinates(data.features[0].center);
            }
        })
    }
    
    useEffect(() => {
        getPickupCoordinates(pickup);
        getDropoffCoordinates(dropoff);
    }, [pickup, dropoff])

    return (
        <Wrapper>
            <ButtonContainer>
                <Link href="/search">
                     <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png'/>
                </Link>
            </ButtonContainer>
            <Map 
                pickupCoordinates={pickupCoordinates} 
                dropoffCoordinates={dropoffCoordinates} 
            />

            <RideContainer>
                {/* Ride Selector */}
                <RideSelector
                 pickupCoordinates={pickupCoordinates} 
                 dropoffCoordinates={dropoffCoordinates} 
                />


                <ConfirmButtonContainer>
                    <ConfirmButton>
                        Confirm UberX
                    </ConfirmButton>
                </ConfirmButtonContainer>

                {/* Confirm Button */}
            </RideContainer>
        </Wrapper>
    )
}

export default Confirm
const ButtonContainer = tw.div`
    rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`
const BackButton = tw.img`
h-full object-contain
`
const Wrapper = tw.div`
    flex flex-col h-screen
`;

const RideContainer = tw.div`
   flex-1 flex flex-col h-1/2
`;

const ConfirmButton = tw.div`
bg-black text-white my-4 mx-4 py-4 text-center text-xl
`
const ConfirmButtonContainer = tw.div`
    border-t-2

`
