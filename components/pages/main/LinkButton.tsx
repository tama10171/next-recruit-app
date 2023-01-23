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
        _hover={{ transform: 'translate(5px,5px)', boxShadow: '0px 0px 0px 0px' }}
        fontSize={'25px'}
        borderRadius={'10px'}
        bg={'#FFB800'}
        padding={'40px 0'}
        boxShadow={'0 8px 0 #cd8800'}
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
