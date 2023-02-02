import { PageLayout } from '@/components/layouts/PageLayout'
import { useUser } from '@/hooks/useUser'
import { supabase } from '@/libs/supabaseClient'
import Image from 'next/image'

import {
  AlertDialogBody,
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  HStack,
  VStack,
  Input,
  Text,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'

export const SignIn = () => {
  const [email, setEmail] = useState('')
  const [schoolNumber, setSchoolNumber] = useState(0)
  const [password, setPassword] = useState('')
  const router = useRouter()
  const { user, setUser } = useUser()

  const onsubmit = async () => {
    // console.log('email', email)
    // console.log('password', password)
    // 学籍番号から、それに応じたuserのデータを取得する。
    // const { data, error } = await supabase
    //   .from('profiles')
    //   .select('*')
    //   .eq('school_number', email)
    //   .single()
    // console.log(data)
    // 取得したデータのパスワードをもとに、入力されたパスワードと比較する
    // const dbPassword = data && data.password
    // if (dbPassword === password) {
    //   console.log('get')
    //   const { data, error } = await supabase.auth.signInWithOtp({
    //     email: 'tama10171nnm@gmail.com',
    //   })
    //   router.push('/')
    // }
    //　比較して、trueなら、取得したuserのデータをsetして、/に遷移する。
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
    if (error) console.log(error)
    router.push('/')
  }

  const onSignUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          school_number: 28,
        },
      },
    })
    console.log(data, error)
  }

  return (
    <PageLayout hasHeader={false}>
      <Center h={'calc(100vh)'} display={'flex'} flexDirection={'column'}>
        <VStack w={'100%'}>
          <Box m={'3% 0'} width={{ base: 250, sm: 330 }} height={{ base: 182, sm: 240 }}>
            <img className="logo_img" src="/images/logo.png" alt="logo"></img>
          </Box>
          <Box className="login_flex" m={'10px'}>
            <Box className="login_box" bg="white">
              <HStack className="login_pare">
                <Text className="login_form">メールアドレス</Text>
                {/* <Text className="login_form">学籍番号</Text> */}
                <FormControl isRequired width={'70%'}>
                  <Input
                    h={'30px'}
                    bgColor={'#FFFAE8'}
                    border={'#FFB800 1px solid'}
                    fontSize={'1.6rem'}
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
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
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }}
                  />
                </FormControl>
              </HStack>
            </Box>
            <Button className="login_btn" onClick={onsubmit}>
              ログイン
            </Button>
          </Box>
        </VStack>
      </Center>
    </PageLayout>
  )
}
