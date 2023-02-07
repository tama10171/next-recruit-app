import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  AccordionButtonProps,
  HStack,
  Flex,
  Input,
  Stack,
  Button,
  Link,
  Textarea,
} from '@chakra-ui/react'
import { supabase } from '@/libs/supabaseClient'
import { useEffect, useState } from 'react'
import { PageLayout } from '../components/layouts/PageLayout'

// export const NewsAdd = (props: any) => {
export default function NewsAdd() {
  // const [date, setDate] = useState('')
  const [title, setTitle] = useState<String>()
  const [contents, setContents] = useState<String>()

  const newsData = async () => {
    const updates = {
      created_at: new Date().toLocaleDateString(),
      subtitle: title,
      description: contents,
    }

    let { data, error } = await supabase.from('news').insert([updates])

    if (error == null) {
      alert('追加成功！')
    } else {
      alert('追加失敗\n\n「タイトル 内容」を入力してください')
    }

    console.log(data)
    if (error) console.log(error)
  }

  return (
    <>
      <PageLayout>
        <Box
          display={'flex'}
          h={'calc(100vh - 60px)'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Box
            borderRadius={'20px'}
            w={{ base: '97%', sm: '80%' }}
            bg={'#fff'}
            p={{ base: '20% 5%', sm: '5% 5% 2% 5%' }}
            m={'auto'}
            border={'#ffb800 3px solid'}
          >
            <Stack>
              <HStack>
                <Box
                  textAlign={'center'}
                  whiteSpace={'nowrap'}
                  w={'80px'}
                  fontSize={'15px'}
                  fontWeight={'bold'}
                >
                  タイトル
                </Box>
                <Input
                  h={'30px'}
                  bgColor={'#FFFAE8'}
                  border={'#FFB800 1px solid'}
                  fontSize={'1.6rem'}
                  onChange={(e) => {
                    setTitle(e.target.value)
                  }}
                ></Input>
              </HStack>
              <HStack>
                <Box
                  textAlign={'center'}
                  whiteSpace={'nowrap'}
                  w={'80px'}
                  fontSize={'15px'}
                  fontWeight={'bold'}
                >
                  内容
                </Box>
                <Textarea
                  h={'150px'}
                  bgColor={'#FFFAE8'}
                  border={'#FFB800 1px solid'}
                  fontSize={'1.6rem'}
                  onChange={(e) => {
                    setContents(e.target.value)
                  }}
                />
              </HStack>
            </Stack>
            <Box
              mt={'20px'}
              w={'100%'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={{ base: 'center', sm: 'flex-end' }}
            >
              <Link href="/news" m={'5% 5px 5% 0'}>
                <Button
                  bg={'#ffb800'}
                  w={'150px'}
                  h={'50px'}
                  fontSize={'20px'}
                  borderRadius={'10px'}
                >
                  戻る
                </Button>
              </Link>
              <Button
                bg={'#ffb800'}
                m={'5% 0 5% 5px'}
                w={'150px'}
                h={'50px'}
                fontSize={'20px'}
                borderRadius={'10px'}
                onClick={newsData}
              >
                追加
              </Button>
            </Box>
          </Box>
        </Box>
      </PageLayout>
    </>
  )
}
