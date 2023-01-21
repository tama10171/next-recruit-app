import { supabase } from '@/libs/supabaseClient'
import { Button, ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import '../styles/style.css'

export default function App({ Component, pageProps }: AppProps) {
  const onSignOut = async () => {
    const { error } = await supabase.auth.signOut()
  }
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      {/* <Button onClick={onSignOut}>サインアウト</Button> */}
    </ChakraProvider>
  )
}
