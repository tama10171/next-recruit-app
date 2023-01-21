import { PageLayout } from '@/components/layouts/PageLayout'
import { background, Box, Button, Center, color, FormControl, FormLabel, HStack, Input, Text } from '@chakra-ui/react'
import Link from "next/link";

export default function LinkButton({info}:any){
    return(
        <>
                <HStack>
                    <Link href="/">
                        <Box className="mainlist">
                            <Button className="text">
                                {info}
                            </Button>
                        </Box>
                    </Link>
                </HStack>
        </>
    )
}