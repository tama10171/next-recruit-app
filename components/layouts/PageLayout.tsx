import { Box } from '@chakra-ui/react'
import { Header } from '@/components/Header'

interface PageLayoutProps {
  children: any
  hasHeader?: boolean
}

export const PageLayout = (props: PageLayoutProps) => {
  const { children, hasHeader = true } = props

  return (
    <Box bg={'#FFE7A9'} minHeight={'100vh'} height="auto" width={'100vw'}>
      {hasHeader && <Header />}
      {children}
    </Box>
  )
}
