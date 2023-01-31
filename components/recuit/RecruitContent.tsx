import { supabase } from '@/libs/supabaseClient'
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionPanel,
  AccordionIcon,
  Text,
  CircularProgress,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { User } from 'src/interfaces/userType'

export const RecruitContent = () => {
  const [users, setUsers] = useState<any[] | null>(null)

  const getUserData = async () => {
    const { data, error } = await supabase.from('profiles').select('*')
    if (error) console.log(error)

    setUsers(data)
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <Box p={5}>
      x
      <Accordion allowToggle>
        {/* データがあるだけ表示 */}
        {users?.map((user) => {
          return <ListItem key={user.id} user={user} />
        })}
      </Accordion>
    </Box>
  )
}

const ListItem = (props: { user: User }) => {
  const { user } = props
  const [companys, setCompanys] = useState<any[] | null>(null)

  const getCompanyData = async () => {
    const { data, error } = await supabase.from('companyinfo').select('*').eq('user_id', user.id)
    if (error) console.log(error)
    console.log(data)

    setCompanys(data)
  }

  useEffect(() => {
    getCompanyData()
  }, [])

  if (!companys) return <CircularProgress isIndeterminate color="green.300" />

  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <AccordionIcon />
          <Box as="span" flex="1" textAlign="left" fontWeight={'bold'} fontSize={12}>
            CTB20_{user.full_name}
          </Box>
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        {companys.length === 0 ? (
          <Text>活動はありません</Text>
        ) : (
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
                {companys.map((company: any) => {
                  return (
                    <Tr key={company.id}>
                      <Td>{company.serial_number}</Td>
                      <Td>{company.code}</Td>
                      <Td>{company.name}</Td>
                      <Td>{company.result}</Td>
                      <Td>{company.acceptance_date}</Td>
                      <Td>{company.content}</Td>
                      <Td>{company.place}</Td>
                      <Td>{company.Implementation_date}</Td>
                      <Td>{company.absence_date}</Td>
                      <Td>{company.absence_status}</Td>
                      <Td>{company.intermediat_result}</Td>
                    </Tr>
                  )
                })}
              </Tbody>
            </Table>
          </TableContainer>
        )}
      </AccordionPanel>
    </AccordionItem>
  )
}

