import { PageLayout } from '@/components/layouts/PageLayout'
import { Box, Center, SimpleGrid } from '@chakra-ui/react'
import { RecruitTable } from '@/components/pages/recruit/recruitTable'
const MainPage = () => {
  return (
    <PageLayout>
      <RecruitTable />
      <Box h={200} w={'100vw'}></Box>
    </PageLayout>
  )
}
export default MainPage
