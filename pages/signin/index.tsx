import { PageLayout } from '@/components/layouts/PageLayout'
import { supabase } from '@/libs/supabaseClient'
import { Box, Button, FormControl, HStack, Input, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'

export const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const onsubmit = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
    if (error)console.log(error)
    router.push('/')
  }

  return (
    <PageLayout>
      <Box width={'1268px'} bg="white" padding={'50px'}>
        <HStack>
          <Text>学籍番号</Text>
          <FormControl isRequired width={'704px'}>
            <Input placeholder="First name" onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
        </HStack>
        <HStack>
          <Text>パスワード</Text>
          <FormControl isRequired width={'704px'}>
            <Input placeholder="First name" onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
        </HStack>
      </Box>
      <Button colorScheme="blue" onClick={onsubmit}>
        Button
      </Button>
    </PageLayout>
  )
}
