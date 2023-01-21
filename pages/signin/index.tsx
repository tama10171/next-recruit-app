import { PageLayout } from '@/components/layouts/PageLayout'
import { supabase } from '@/libs/supabaseClient'

import {
  AlertDialogBody,
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
} from '@chakra-ui/react'
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
    if (error) console.log(error)
    router.push('/')
  }

  return (
    <PageLayout>
      <div className="login_flex">
        <Box className="login_box" bg="white">
          <HStack className="login_pare">
            <Text className="login_form">学籍番号</Text>
            <FormControl isRequired width={'70%'}>
              <Input
                h={'30px'}
                bgColor={'#FFFAE8'}
                border={'#FFB800 1px solid'}
                fontSize={'1.6rem'}
              />
            </FormControl>
          </HStack>
          <HStack className="login_pare">
            <Text className="login_form">パスワード</Text>
            <FormControl isRequired width={'70%'}>
              <Input
                h={'30px'}
                bgColor={'#FFFAE8'}
                border={'#FFB800 1px solid'}
                fontSize={'1.6rem'}
              />
            </FormControl>
          </HStack>
        </Box>
        <Button className="login_btn">ログイン</Button>
      </div>
    </PageLayout>
  )
}
