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
} from '@chakra-ui/react'
import { supabase } from '@/libs/supabaseClient'
import { useEffect, useState } from 'react'

export const NewsAccordion = (props: any) => {
  const [news, setNews] = useState<any[] | null>(null)

  const newsData = async () => {
    let { data, error } = await supabase.from('news').select('*')

    setNews(data)

    console.log(data)
  }

  useEffect(() => {
    newsData()
  }, [])

  return (
    <>
      <Accordion allowToggle>
        {news?.map((m) => {
          return (
            <AccordionItem key={m.id} zIndex={999}>
              <h2>
                <AccordionButton borderTop={'#ffb800 1px solid'} p={'15px 5px'}>
                  <Box as="span" flex="1" w={'100%'}>
                    <HStack w={'100%'} display={'flex'} justifyContent={'flex-start'}>
                      <Box whiteSpace={'nowrap'} fontSize={'15px'} mr={'5%'}>
                        {m.created_at}
                      </Box>
                      <Box whiteSpace={'nowrap'} fontSize={'15px'} fontWeight={'bold'}>
                        {m.subtitle}
                      </Box>
                    </HStack>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                p={'15px 5px'}
                bg={'#FFFAE8'}
                borderRadius={'10px'}
                mb={'1%'}
                padding={'2%'}
              >
                {m.description}
              </AccordionPanel>
            </AccordionItem>
          )
        })}
      </Accordion>
    </>
  )
}
