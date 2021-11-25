import {useEffect, useState} from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'

import Map from './components/Map'
import {auth} from '../firebase'
import { onAuthStateChanged, signOut } from '@firebase/auth'
import router, { useRouter } from 'next/router'


export default function Home() {
  const [user, setuser] = useState(null)
  const router = useRouter();

    useEffect(() => {
      return onAuthStateChanged(auth, user =>{ // listener for whether or not user is logged in or not
        if (user){
          setuser({
            name: user.displayName,
            photoUrl: user.photoURL,

          })
        }
        else{
          setuser(null)

          router.push('/login')
        }

      })


    }, [])


  return (
    <Wrapper>
      <Map/>
      <ActionItems>
        {/* Head */}
        <Header>  
              <UberLogo  src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"/>
              <Profile>
                  <Name>{user && user.name}</Name>
                  <UserImage src={user && user.photoUrl} onClick={() => signOut(auth)}/>
              </Profile>
        </Header>
        {/* ActionButtons */}

        <ActionButtons> 

          {/* importing this Link from next/link */}
            <Link href="search">
            <ActionButton>
              {/* self closing tag */}
                  <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png"/>
              Ride</ActionButton>
            </Link>
            <ActionButton>
                 <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.pngg"/> 
              Wheels</ActionButton>
            <ActionButton>
                <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png"/>   
              Reserve</ActionButton>
        </ActionButtons>

        {/* InputButton */}

        <InputButton>Where to?</InputButton>

      </ActionItems>
    </Wrapper>
  )
}


const Wrapper = tw.div`
  flex flex-col h-screen 

  `

const ActionItems = tw.div`
  flex-1 p-4

`

const Header = tw.div `
  flex justify-between items-center
`

const UberLogo = tw.img `
  h-32

`
const Profile = tw.div `
  flex items-center
`
const Name = tw.div `
mr-4 w-20

`
const UserImage = tw.img `
  h-20 rounded-full border border-gray-200 p-2 cursor-pointer

`

// action buttons
const ActionButtons = tw.div`
    flex 
`
const ActionButton = tw.div `
  flex bg-gray-200 flex-1 m-2 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl

`
const ActionButtonImage = tw.img`
  h-3/5
`

const InputButton = tw.div`
  h-20 bg-gray-200 text-2xl p-4 mt-8 flex items-center

`