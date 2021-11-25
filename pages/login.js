import React, {useEffect} from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import { useRouter } from 'next/router'
import { signInWithPopup, onAuthStateChanged } from '@firebase/auth'
import {auth, provider}  from '../firebase'

const Login = () => {

    const router = useRouter()

    useEffect(() => {
         onAuthStateChanged(auth, user =>{

            if(user){
                router.push('/')
            }
        })
    }, [])

    return (
        <Wrapper>
            {/* Sign in
          
          */}
            <UberLogo src="https://i.ibb.co/n6LWQM4/Post.png"/>
            <Title>Login to access your account</Title>
            <HeadImg src="https://i.ibb.co/CsV9RYZ/login-image.png"/>
            <SignInButton onClick={() => signInWithPopup(auth, provider)}>Sign in with Google</SignInButton>
        </Wrapper>
    )
}


export default Login
const HeadImg = tw.img`

object-contain w-full
`
const Title = tw.div`
text-5xl pt-4 text-gray-500

`
const UberLogo = tw.img`

h-7 w-auto object-contain self-start
`
const Wrapper = tw.div`
flex flex-col h-screen w-screen bg-gray-200 p-4
`

const SignInButton = tw.button`
bg-black text-white text-center py-4 mt-8 self-center w-full 

`