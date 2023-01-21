import { useEffect, useState } from 'react'
import { supabase } from '@/libs/supabaseClient'
import { SignIn } from './signin'
import { Account } from './account'

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
      {!session ? <SignIn /> : <Account />}
    </>
  )
}
