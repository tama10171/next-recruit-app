import { PageLayout } from '@/components/layouts/PageLayout'
import SubTitle from '@/components/layouts/subTitle'
import { NewsAccordion } from '@/components/pages/news/NewsAccordion'
import { Box } from '@chakra-ui/react'

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
      </PageLayout>
    </>
  )
}
