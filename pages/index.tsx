// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '@/styles/Home.module.css'

import { useEffect, useState } from 'react'
import { supabase } from '@/libs/supabaseClient'
import { SignIn } from './signin'
import { Account } from './account'

// export default function Home() {
//   return (
//     <>

//     </>
//   )
// }

export default function Home() {
  const [session, setSession] = useState<any>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <>
      {console.log(session)}
      {/* {!user ? <SignIn /> : user ? <Account session={user} /> : <Box />}*/}
      {!session ? <SignIn /> : <Account />}
    </>
  )
}
