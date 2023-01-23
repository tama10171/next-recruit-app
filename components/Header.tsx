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
import Image from 'next/image'

export const Header = () => {
  return (
    <div>
      <Box w={'100vw'} h={'60px'} bg={UtilColors.background.main}>
        <HStack w={'auto'} h={'100%'} justifyContent={'space-between'} mr={'8px'}>
          <Box m={"0 20px"}><Image src={"/images/logo.png"} width={70} height={57} alt={"logo"}></Image></Box>
          <HStack>
          <Link href="/">
            <Button
              bg={'#fff'}
              w={'90px'}
              h={'40px'}
              fontSize={'1.4rem'}
              borderRadius={'5px'}
              _after={{
                pos: 'absolute',
                top: '2.5px',
                left: '2.5px',
                w: 'calc(100% - 5.5px)',
                h: 'calc(100% - 5.5px)',
                border: '#FFB800 2px solid',
                borderRadius: '5px',
                content: `""`,
              }}
            >
              活動一覧
            </Button>
          </Link>
          <Link href="/">
            <Button
              bg={'#fff'}
              w={'90px'}
              h={'40px'}
              fontSize={'1.4rem'}
              borderRadius={'5px'}
              _after={{
                pos: 'absolute',
                top: '2.5px',
                left: '2.5px',
                w: 'calc(100% - 5.5px)',
                h: 'calc(100% - 5.5px)',
                border: '#FFB800 2px solid',
                borderRadius: '5px',
                content: `""`,
              }}
            >
              登録・変更
            </Button>
          </Link>
          <Link href="/">
            <Button
              bg={'#fff'}
              w={'90px'}
              h={'40px'}
              fontSize={'1.4rem'}
              borderRadius={'5px'}
              _after={{
                pos: 'absolute',
                top: '2.5px',
                left: '2.5px',
                w: 'calc(100% - 5.5px)',
                h: 'calc(100% - 5.5px)',
                border: '#FFB800 2px solid',
                borderRadius: '5px',
                content: `""`,
              }}
            >
              グッドJOB
            </Button>
          </Link>
          <Link href="/">
            <Button
              bg={'#fff'}
              w={'90px'}
              h={'40px'}
              fontSize={'1.4rem'}
              borderRadius={'5px'}
              _after={{
                pos: 'absolute',
                top: '2.5px',
                left: '2.5px',
                w: 'calc(100% - 5.5px)',
                h: 'calc(100% - 5.5px)',
                border: '#FFB800 2px solid',
                borderRadius: '5px',
                content: `""`,
              }}
            >
              企業検索
            </Button>
          </Link>
          </HStack>
        </HStack>
      </Box>
    </div>
  )
}
