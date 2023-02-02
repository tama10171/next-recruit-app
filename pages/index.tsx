import { useEffect, useState } from 'react'
import { supabase } from '@/libs/supabaseClient'
import SignIn from './signin'
// import { Account } from './account'
import MainPage from './main'
import { useUser } from '@/hooks/useUser'

export default function Home() {
  const [session, setSession] = useState<any>(null)
  const { user } = useUser()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return <>{!session ? <SignIn /> : <MainPage />}</>
}
