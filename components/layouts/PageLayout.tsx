import { Box } from '@chakra-ui/react'

export const PageLayout = ({ children }: any) => {
  return (
    <Box bg={'#FFE7A9'} height="100vh" width={'100vw'}>
      {children}
    </Box>
  )
}
