import { PageLayout } from '@/components/layouts/PageLayout'
import { background, Box, Button, Center, color, FormControl, FormLabel, HStack, Input, Text } from '@chakra-ui/react'
import Link from "next/link";

export const Style = () => {
    const buttonStyle = {
      bg: 'orange'
    };
  };

export default function MainPage() {
  return (
    
    <>
        <PageLayout>
            <style>{`
                .mainlist {
                    background-color: orange;
                    background-color: #FFAF26;
                    // border: 6px solid white;
                    border-radius: 15px;
                    width: 490px;
                }
                .mainlist:before{
                    content: "";
                    position: absolute;
                    bottom: -38px;
                    right: -30px;
                    margin-top: -15px;
                    border: 20px solid transparent;
                    border-left: 45px solid #FFAF26;
                    z-index: 0;
                    -webkit-transform: rotate(60deg);
                    transform: rotate(60deg);
                }
                .text{
                    background-color: #FFAF26;
                    width: 100%;
                    border: 6px solid white;
                    border-radius: 15px;
                    font-size: 50px
                }
           `}</style>
            <FormControl isRequired width={'100vw'} height={'10vh'} bg="orange">
                <Text>ヘッダーを追加</Text>
            </FormControl>
            <FormControl isRequired width={'100vw'} height={'90vh'} paddingTop={'200px'}>
                <HStack>
                    <Link href="/">
                        {/* <Button className="mainlist" width={'490px'} height={'175px'} marginLeft={'418px'}>活動登録</Button> */}
                        <Box className="mainlist" height={'175px'} marginLeft={'418px'} marginBottom={'93px'}>
                            <Button className="text" height={'158px'}>
                                活動登録
                            </Button>
                        </Box>
                    </Link>
                    <Link href="/">
                        <Button className="mainlist" height={'175px'} marginLeft={'97px'} marginBottom={'93px'}>
                            <Button className="text" height={'158px'}>
                                活動一覧
                            </Button>
                        </Button>
                    </Link>
                </HStack>
                <HStack>
                    <Link href="/">
                        <Button className="mainlist" height={'175px'} marginLeft={'418px'}>
                            <Button className="text" height={'158px'}>
                                グッドJOB
                            </Button>
                        </Button>
                    </Link>
                    <Link href="/">
                        <Button className="mainlist" height={'175px'} marginLeft={'97px'}>
                            <Button className="text" height={'158px'}>
                                企業検索
                            </Button>
                        </Button>
                    </Link>
                </HStack>
            </FormControl>
        </PageLayout>
    </>
  )
}