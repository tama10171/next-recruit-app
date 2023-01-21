import { PageLayout } from '@/components/layouts/PageLayout'
import { background, Box, Button, Center, color, FormControl, FormLabel, HStack, Input, Text } from '@chakra-ui/react'
import Link from "next/link";
import LinkButton from "@/components/LinkButton"

export default function MainPage() {
  return (
    
    <>
        <PageLayout>
            <FormControl isRequired width={'100vw'}>
                <LinkButton info="活動登録" />
                <LinkButton info="活動一覧" />
                <LinkButton info="グッドJOB" />
                <LinkButton info="企業検索" />
            </FormControl>
        </PageLayout>
    </>
  )
}