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
} from '@chakra-ui/react'
import { supabase } from '@/libs/supabaseClient'
import { useEffect, useState } from 'react'

// export const NewsAdd = (props: any) => {
export default function NewsAdd() {
    const [news, setNews] = useState<any[] | null>(null)
  
    const newsData = async () => {
      let { data, error } = await supabase.from('news').select('*')
  
      setNews(data)
  
      console.log(data)
    }

    return (
      <>
        <Box>
          <Stack >
            <HStack>
              <Box>日付</Box>
              <Input ></Input>
            </HStack>
            <HStack>
              <Box>タイトル</Box>
              <Input ></Input>
            </HStack>
            <HStack>
              <Box>内容</Box>
              <Input ></Input>
            </HStack>
          </Stack>
          <Button>追加</Button>
        </Box>
      </>
    )
}