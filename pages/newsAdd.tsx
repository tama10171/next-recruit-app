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
} from '@chakra-ui/react'
import { supabase } from '@/libs/supabaseClient'
import { useEffect, useState } from 'react'

// export const NewsAdd = (props: any) => {
export default function NewsAdd() {
  // const [date, setDate] = useState('')
  const [title, setTitle] = useState('')
  const [contents, setContents] = useState('')

    const newsData = async () => {

      const updates = {
        created_at: new Date().toLocaleDateString(),
        subtitle: title,
        description: contents,
      }
      
      let { data, error } = await supabase.from('news').insert([updates])
  
      console.log(data)
      if (error) console.log(error)
    }

    return (
      <>
        <Box>
          <Stack >
            <HStack>
              <Box>タイトル</Box>
              <Input 
                onChange={(e) => {
                  setTitle(e.target.value)
                }}
              ></Input>
            </HStack>
            <HStack>
              <Box>内容</Box>
              <Input 
                onChange={(e) => {
                  setContents(e.target.value)
                }}
              ></Input>
            </HStack>
          </Stack>
          <Link href="/news">
            <Button >戻る</Button>
          </Link>
          <Button onClick={newsData}>追加</Button>
        </Box>
      </>
    )
}