import React from 'react'
import { background, Box, Button, Center, color, FormControl, FormLabel, HStack, Input, Link, Text } from '@chakra-ui/react'


export const Header = () => {
  return (
    <div>
        <HStack>
            <Link href="/">
                <Button>
                    活動一覧
                </Button>
            </Link>
            <Link href="/">
                <Button>
                    登録・変更
                </Button>
            </Link>
            <Link href="/">
                <Button>
                    グッドJOB
                </Button>
            </Link>
            <Link href="/">
                <Button>
                    企業検索
                </Button>
            </Link>
        </HStack>
    </div>
  )
}
