import { PageLayout } from '@/components/layouts/PageLayout'
import { Box, Button, Center, FormControl, FormLabel, HStack, Input, Text } from '@chakra-ui/react'

export const SignIn = () => {
  return (
    <PageLayout>
      <Box width={'1268px'} bg="white" padding={'50px'}>
        <HStack>
          <Text>学籍番号</Text>
          <FormControl isRequired width={'704px'}>
            <Input placeholder="First name" />
          </FormControl>
        </HStack>
        <HStack>
          <Text>パスワード</Text>
          <FormControl isRequired width={'704px'}>
            <Input placeholder="First name" />
          </FormControl>
        </HStack>
      </Box>
      <Button colorScheme="blue">Button</Button>
    </PageLayout>
  )
}
