import { PageLayout } from '@/components/layouts/PageLayout'
import { useUser } from '@/hooks/useUser'
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

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [schoolNumber, setSchoolNumber] = useState(0)
  const [password, setPassword] = useState('')
  const router = useRouter()
  const { user, setUser } = useUser()

  const onSignUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          school_number: 0,
        },
      },
    })
    console.log(data, error)
  }

  return (
    <PageLayout>
      <div className="login_flex">
        <Box className="login_box" bg="white">
          <HStack className="login_pare">
            <Text className="login_form">学籍番号</Text>
            {/* <Text className="login_form">学籍番号</Text> */}
            <FormControl isRequired width={'70%'}>
              <Input
                h={'30px'}
                bgColor={'#FFFAE8'}
                border={'#FFB800 1px solid'}
                fontSize={'1.6rem'}
                onChange={(e) => {
                  setSchoolNumber(Number(e.target.value))
                }}
              />
            </FormControl>
          </HStack>
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
        <Button className="login_btn" onClick={onSignUp}>
          新規登録
        </Button>
      </div>
    </PageLayout>
  )
}
export default SignUp
