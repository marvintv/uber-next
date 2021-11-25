import {useState} from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'
const Search = () => {

    const [pickup, setpickup] = useState("")
    const [dropoff, setdropoff] = useState("")

    // console.log(pickup)
    // console.log(dropoff)
    return (
    <Wrapper>
        {/* Button Container */}


        <Link href="/">
        <ButtonContainer>
            <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
        </ButtonContainer>
        </Link>
        {/* Input Container */}
        <InputContainer>
            <FromtToIcons>
                <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"/>
                <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"/>
                <Square src="https://img.icons8.com/windows/50/000000/square-full.png"/>
            </FromtToIcons>

            <InputBoxes>
                <Input 
                    placeholder="Enter Pickup Location"
                    value={pickup}
                    onChange={(e)=> setpickup(e.target.value)}
                    />
                <Input
                 placeholder="Where to?"
                 value={dropoff}
                 onChange={(e) => setdropoff(e.target.value)}
                 />
            </InputBoxes>            

            <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png"/>
        </InputContainer>
        {/* Saved Places */}
        <SavedPlaces>
            <StarIcons src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png"/>
        Saved Places

        </SavedPlaces>

        {/* Confirmed Location */}
        <Link href={{
             pathname: '/confirm',
            query: {pickup: pickup,
            dropoff: dropoff
            } 
        }}>
        <ConfirmButton>

            Confirm Location
        </ConfirmButton>
        </Link>
    </Wrapper>

    )
}

export default Search

const Wrapper = tw.div`
bg-gray-200 h-screen
  
  `

  // px = padding on x axis
const ButtonContainer = tw.div`
bg-white px-4

`

const BackButton = tw.img`
    w-12 flex flex-col cursor-pointer
`

const InputContainer = tw.div`
    bg-white flex items-center px-4 pb-2
`

const FromtToIcons = tw.div`
    w-10 p-1 mr-2 flex flex-col items-center
`
const Circle = tw.img`
h-4
`
const Line = tw.img`
h-10
`
const Square = tw.img`
h-4
`

const InputBoxes = tw.div`

flex flex-col flex-1

`
const Input = tw.input`
h-10 bg-gray-200 my-2 rounded-lg p-2 outline-none border-none
`

const PlusIcon = tw.img`
    w-10 h-10 bg-gray-200 rounded-full ml-3
`
const SavedPlaces = tw.div`
flex items-center  bg-white px-4 py-2 my-3

`

const StarIcons = tw.img`
bg-gray-400 rounded-full p-2 w-10 h-10 mr-2

`

const ConfirmButton = tw.div`
   flex flex-1 justify-center items-center bg-black py-3 mx-4 my-3 text-white text-lg	
`