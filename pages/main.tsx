import { PageLayout } from '@/components/layouts/PageLayout'
import { Center, SimpleGrid } from '@chakra-ui/react'
import { LinkButton } from '@/components/pages/main/LinkButton'

const MainPage = () => {
  return (
    <PageLayout>
      <Center h={'calc(100vh - 60px)'}>
        <SimpleGrid columns={2} spacing={'2px'} w="50%" m={'0 auto'}>
          <LinkButton info="活動登録" href={'/main'} />
          <LinkButton info="活動一覧" href={'/'} />
          <LinkButton info="グッドJOB" href={'/'} />
          <LinkButton info="企業検索" href={'/'} />
        </SimpleGrid>
      </Center>
    </PageLayout>
  )
}
export default MainPage
