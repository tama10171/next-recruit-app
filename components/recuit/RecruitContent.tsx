import { supabase } from '@/libs/supabaseClient'
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export const RecruitContent = () => {
  const [companyinfos, setCompanyinfos] = useState<any[] | null>(null)

  const getData = async () => {
    const { data, error } = await supabase.from('profiles').select('*')
    if (error) console.log(error)

    setCompanyinfos(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Box p={5}>
      <Accordion allowToggle>
        {/* データがあるだけ表示 */}
        {companyinfos?.map((company) => {
          return <ListItem key={company.id} />
        })}

        {/* <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem /> */}
      </Accordion>
    </Box>
  )
}

const ListItem = () => {
  const [id, setId] = useState(null)

  const getData = async () => {
    const { data, error } = await supabase.from('companyinfo').select('*').eq('id', id).single()
  }

  // useEffect(() => {
  //   getData()
  //   // console.log()
  // }, [])

  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <AccordionIcon />
          <Box as="span" flex="1" textAlign="left" fontWeight={'bold'} fontSize={12}>
            CTB20_向川原 悠貴
          </Box>
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <TableContainer>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>通番</Th>
                <Th>企業コード</Th>
                <Th>企業名</Th>
                <Th>最終結果</Th>
                <Th>内定承諾提出日</Th>
                <Th>活動内容</Th>
                <Th>場所</Th>
                <Th>実施日</Th>
                <Th>公欠提出日</Th>
                <Th>公欠状態</Th>
                <Th>結果</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1</Td>
                <Td>1111</Td>
                <Td>株式会社ワン</Td>
                <Td>1</Td>
                <Td>1111</Td>
                <Td>株式会社ワン</Td>
                <Td>1</Td>
                <Td>1111</Td>
                <Td>株式会社ワン</Td>
                <Td>1</Td>
                <Td>1111</Td>
              </Tr>
              <Tr>
                <Td>2</Td>
                <Td>2222</Td>
                <Td>株式会社ツー</Td>
                <Td>2</Td>
                <Td>2222</Td>
                <Td>株式会社ツー</Td>
                <Td>2</Td>
                <Td>2222</Td>
                <Td>株式会社ツー</Td>
                <Td>2</Td>
                <Td>2222</Td>
              </Tr>
              <Tr>
                <Td>3</Td>
                <Td>3333</Td>
                <Td>株式会社スリー</Td>
                <Td>3</Td>
                <Td>3333</Td>
                <Td>株式会社スリー</Td>
                <Td>3</Td>
                <Td>3333</Td>
                <Td>株式会社スリー</Td>
                <Td>3</Td>
                <Td>3333</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </AccordionPanel>
    </AccordionItem>
  )
}
