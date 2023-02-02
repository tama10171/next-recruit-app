import { PageLayout } from '@/components/layouts/PageLayout'
import { Center, SimpleGrid } from '@chakra-ui/react'
import { RecruitTable } from '@/components/pages/recruit/recruitTable'
const MainPage = () => {
  return (
    <PageLayout>
        <RecruitTable/>
    </PageLayout>
  )
}
export default MainPage
