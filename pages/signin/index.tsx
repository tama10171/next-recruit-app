import { PageLayout } from '@/components/layouts/PageLayout'
import { AlertDialogBody, Box, Button, Center, FormControl, FormLabel, HStack, Input, Text } from '@chakra-ui/react'
// import "../../styles/style.css"

export const SignIn = () => {
  return (
    <PageLayout>
      <div className="login_flex">
      <Box className='login_box' bg="white">
        <HStack>
          <Text>学籍番号</Text>
          <FormControl isRequired width={'70%'}>
            <Input placeholder="First name" />
          </FormControl>
        </HStack>
        <HStack>
          <Text>パスワード</Text>
          <FormControl isRequired width={'70%'}>
            <Input placeholder="First name" />
          </FormControl>
        </HStack>
      </Box>
      <Button className='login_btn' colorScheme="blue">Button</Button>
      </div>
    </PageLayout>
  )
}
