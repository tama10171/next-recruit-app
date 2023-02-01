import { PageLayout } from '@/components/layouts/PageLayout'
import { Center, SimpleGrid } from '@chakra-ui/react'
import { LinkButton } from '@/components/pages/main/LinkButton'
const MainPage = () => {
  return (
    <PageLayout>
      <Center h={'calc(100vh - 60px)'}>
        <SimpleGrid columns={2} spacing={{ base: '10px 30px', md: '20px 50px' }} m={'0 auto'}>
          <LinkButton info="活動登録" href={'/main'} ml={'-10%'} />
          <LinkButton info="活動一覧" href={'/recruit'} ml={'-10%'} />
          <LinkButton info="グッドJOB" href={'/news'} ml={'-10%'} />
          <LinkButton info="企業検索" href={'http://intra.denpa.ac.jp/prog/career/company.php'} ml={'-10%'} />
        </SimpleGrid>
      </Center>
    </PageLayout>
  )
}
export default MainPage
