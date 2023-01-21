import { PageLayout } from '@/components/layouts/PageLayout'
import { AlertDialogBody, Box, Button, Center, FormControl, FormLabel, HStack, Input, Text } from '@chakra-ui/react'
// import "../../styles/style.css"

export const SignIn = () => {
  return (
    <PageLayout>
      <div className="login_flex">
      <Box className='login_box' bg="white">
        <HStack className="login_pare">
          <Text className='login_form'>学籍番号</Text>
          <FormControl  isRequired width={'70%'}>
            <Input h={"30px"}/>
          </FormControl>
        </HStack>
        <HStack className="login_pare">
          <Text className='login_form'>パスワード</Text>
          <FormControl isRequired width={'70%'}>
            <Input h={"30px"}/>
          </FormControl>
        </HStack>
      </Box>
      <Button className='login_btn'>ログイン</Button>
      </div>
    </PageLayout>
  )
}
