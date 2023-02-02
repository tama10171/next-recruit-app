import { PageLayout } from '@/components/layouts/PageLayout'
import SubTitle from '@/components/layouts/subTitle'
import { NewsAccordion } from '@/components/pages/news/NewsAccordion'
import { Box, Button, Link } from '@chakra-ui/react'

export default function news() {
  return (
    <>
      <PageLayout>
        <SubTitle className="sub_title" title="グッドJOB INFO" />
        <Box
          pos={'relative'}
          borderRadius={'20px'}
          w={{ base: '95%', md: '80%' }}
          background={'#fff'}
          m={'0 auto'}
          p={'3% 5% 5%'}
          border={'#ffb800 3px solid'}
        >
          <NewsAccordion className="Accordion" />
        </Box>
        <Link href="/newsAdd" position={'fixed'} bottom={'3%'} right={'10%'}>
          <Button
            borderRadius={'50%'}
            w={40}
            h={40}
            bg={'#ffb800'}
            fontSize={'20px'}
            _hover={{ bg: '#f0b800' }}
          >
            追加
          </Button>
        </Link>
      </PageLayout>
    </>
  )
}
