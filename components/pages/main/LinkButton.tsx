import { PageLayout } from '@/components/layouts/PageLayout'
import {
  background,
  Box,
  Button,
  Center,
  color,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
  Link,
  LinkProps,
} from '@chakra-ui/react'

interface LinkButtonProps extends LinkProps {
  info: string
  href: string
}

export const LinkButton = (props: LinkButtonProps) => {
  const { info, href } = props
  return (
    <Link to={href} {...props}>
      <Button
        m={'10%'}
        w={'250px'}
        _hover={{ bg: '#dd8800', transform: 'translate(5px,5px)', boxShadow: '0px 0px 0px 0px' }}
        fontSize={'20px'}
        borderRadius={'10px'}
        bg={'#FFB800'}
        padding={'40px 0'}
        boxShadow={'5px 5px 10px rgba(0, 0, 0, 0.542)'}
        _after={{
          pos: 'absolute',
          w: 'calc(100% - 7px)',
          h: 'calc(100% - 7px)',
          border: '#fff 2px solid',
          borderRadius: '8px',
          content: `""`,
        }}
      >
        {info}
      </Button>
    </Link>
  )
}
