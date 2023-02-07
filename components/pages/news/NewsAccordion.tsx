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
  Textarea,
} from '@chakra-ui/react'
import { supabase } from '@/libs/supabaseClient'
import { useEffect, useState } from 'react'

export const NewsAccordion = (props: any) => {
  const [news, setNews] = useState<any[] | null>(null)

  const newsData = async () => {
    let { data, error } = await supabase
      .from('news')
      .select('*')
      .order('created_at', { ascending: true })
    data?.reverse()
    setNews(data)

    console.log(data)
  }

  useEffect(() => {
    newsData()
    console.log(news)
  }, [])

  return (
    <>
      <Accordion allowToggle>
        {news?.map((m, index) => {
          return (
            <AccordionItem key={m.id} zIndex={999}>
              <h2>
                <AccordionButton
                  className="Accordion"
                  // borderTop={'#ffb800 1px solid'}
                  // borderBottom={index + 1 === news.length ? '#ffb800 1px solid' : ''}
                  p={'15px 5px'}
                >
                  <Box as="span" flex="1" w={'100%'}>
                    <HStack w={'100%'} display={'flex'} justifyContent={'flex-start'}>
                      <Box whiteSpace={'nowrap'} fontSize={{ base: '13px', md: '15px' }} mr={'5%'}>
                        {m.created_at}
                      </Box>
                      <Box
                        // whiteSpace={'nowrap'}
                        fontSize={{ base: '13px', md: '15px' }}
                        fontWeight={'bold'}
                      >
                        {m.subtitle}
                      </Box>
                    </HStack>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Textarea
                  isDisabled
                  opacity={'1!important'}
                  placeholder={m.description}
                  color={'#000'}
                  p={'15px 5px'}
                  bg={'#FFFAE8'}
                  borderRadius={'10px'}
                  padding={'2%'}
                  h={'300px'}
                  mb={'2%'}
                  fontSize={{ base: '14px', md: '16px' }}
                  _placeholder={{ color: 'black' }} // borderBottom={index + 1 === news.length ? '#ffb800 1px solid' : ''}
                />
              </AccordionPanel>
            </AccordionItem>
          )
        })}
      </Accordion>
    </>
  )
}
