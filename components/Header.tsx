import React from 'react'
import {
  background,
  Box,
  Button,
  Center,
  color,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Link,
  Text,
} from '@chakra-ui/react'
import { UtilColors } from 'src/colors'

export const Header = () => {
  return (
    <div>
      <HStack w={'100vw'} h={'60px'} bg={UtilColors.background.main}>
        <Link href="/">
          <Button>活動一覧</Button>
        </Link>
        <Link href="/">
          <Button>登録・変更</Button>
        </Link>
        <Link href="/">
          <Button>グッドJOB</Button>
        </Link>
        <Link href="/">
          <Button>企業検索</Button>
        </Link>
      </HStack>
    </div>
  )
}
