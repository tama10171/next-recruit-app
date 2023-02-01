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
          <Box m={'0 20px'}>
            <Link href='./main'>
            <Image src={'/images/logo.png'} width={70} height={57} alt={'logo'}></Image>
            </Link>
          </Box>
          <HStack>
            <Link href="/recruit">
              <Button
                bg={'#fff'}
                w={{ base: '58px', sm: '90px' }}
                h={'40px'}
                fontSize={{ base: '0.8rem', sm: '1.4rem' }}
                borderRadius={'5px'}
                _after={{
                  pos: 'absolute',
                  top: '1.5px',
                  left: '1.5px',
                  w: 'calc(100% - 3.5px)',
                  h: 'calc(100% - 3.5px)',
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
                w={{ base: '58px', sm: '90px' }}
                h={'40px'}
                fontSize={{ base: '0.8rem', sm: '1.4rem' }}
                borderRadius={'5px'}
                _after={{
                  pos: 'absolute',
                  top: '1.5px',
                  left: '1.5px',
                  w: 'calc(100% - 3.5px)',
                  h: 'calc(100% - 3.5px)',
                  border: '#FFB800 2px solid',
                  borderRadius: '5px',
                  content: `""`,
                }}
              >
                登録・変更
              </Button>
            </Link>
            <Link href="/news">
              <Button
                bg={'#fff'}
                w={{ base: '58px', sm: '90px' }}
                h={'40px'}
                fontSize={{ base: '0.8rem', sm: '1.4rem' }}
                borderRadius={'5px'}
                _after={{
                  pos: 'absolute',
                  top: '1.5px',
                  left: '1.5px',
                  w: 'calc(100% - 3.5px)',
                  h: 'calc(100% - 3.5px)',
                  border: '#FFB800 2px solid',
                  borderRadius: '5px',
                  content: `""`,
                }}
              >
                グッドJOB
              </Button>
            </Link>
            <Link href="http://intra.denpa.ac.jp/prog/career/company.php">
              <Button
                bg={'#fff'}
                w={{ base: '58px', sm: '90px' }}
                h={'40px'}
                fontSize={{ base: '0.8rem', sm: '1.4rem' }}
                borderRadius={'5px'}
                _after={{
                  pos: 'absolute',
                  top: '1.5px',
                  left: '1.5px',
                  w: 'calc(100% - 3.5px)',
                  h: 'calc(100% - 3.5px)',
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
