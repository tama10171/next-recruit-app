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
import SubTitle from '../layouts/subTitle'

export const RecruitContent = () => {
  const [users, setUsers] = useState<any[] | null>(null)

  const getUserData = async () => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .order('class_number', { ascending: true })
    if (error) console.log(error)

    setUsers(data)
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <Box p={5}>
      <SubTitle className="sub_title" title="活動一覧" />

      <Accordion allowToggle m={'0 5%'}>
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
    const { data, error } = await supabase
      .from('companyinfo')
      .select('*')
      .eq('user_id', user.id)
      .order('serial_number', { ascending: true })
    if (error) console.log(error)
    console.log(data)

    setCompanys(data)
  }

  useEffect(() => {
    getCompanyData()
  }, [])

  if (!companys) return <CircularProgress isIndeterminate color="green.300" />

  return (
    <AccordionItem background={'#fff'} color={'#000'} fontSize={16}>
      <h2>
        <AccordionButton p={'10px'}>
          <AccordionIcon />
          <Box as="span" flex="1" textAlign="left" fontWeight={'bold'} fontSize={16} ml={'10px'}>
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
                <Tr bg={'#000'} h={'25px'} border={'1px solid #000'}>
                  <Th fontSize={13} color={'#FF9900'}>
                    通番
                  </Th>
                  <Th fontSize={13} color={'#FF9900'}>
                    企業コード
                  </Th>
                  <Th fontSize={13} color={'#FF9900'}>
                    企業名
                  </Th>
                  <Th fontSize={13} color={'#FF9900'}>
                    最終結果
                  </Th>
                  <Th fontSize={13} color={'#FF9900'}>
                    内定承諾提出日
                  </Th>
                  <Th fontSize={13} color={'#FF9900'}>
                    活動内容
                  </Th>
                  <Th fontSize={13} color={'#FF9900'}>
                    場所
                  </Th>
                  <Th fontSize={13} color={'#FF9900'}>
                    実施日
                  </Th>
                  <Th fontSize={13} color={'#FF9900'}>
                    公欠提出日
                  </Th>
                  <Th fontSize={13} color={'#FF9900'}>
                    公欠状態
                  </Th>
                  <Th fontSize={13} color={'#FF9900'}>
                    結果
                  </Th>
                </Tr>
              </Thead>
              <Tbody m={'6px'}>
                {companys.map((company: any) => {
                  return (
                    <Tr key={company.id} h={'30px'}>
                      <Td
                        fontSize={15}
                        borderRight={'1px solid #000'}
                        borderLeft={'1px solid #000'}
                        borderBottom={'1px solid #000'}
                      >
                        {company.serial_number}
                      </Td>
                      <Td
                        fontSize={15}
                        borderRight={'1px solid #000'}
                        borderLeft={'1px solid #000'}
                        borderBottom={'1px solid #000'}
                      >
                        {company.code}
                      </Td>
                      <Td
                        fontSize={15}
                        borderRight={'1px solid #000'}
                        borderLeft={'1px solid #000'}
                        borderBottom={'1px solid #000'}
                      >
                        {company.name}
                      </Td>
                      <Td
                        fontSize={15}
                        borderRight={'1px solid #000'}
                        borderLeft={'1px solid #000'}
                        borderBottom={'1px solid #000'}
                      >
                        {company.result}
                      </Td>
                      <Td
                        fontSize={15}
                        borderRight={'1px solid #000'}
                        borderLeft={'1px solid #000'}
                        borderBottom={'1px solid #000'}
                      >
                        {company.acceptance_date}
                      </Td>
                      <Td
                        fontSize={15}
                        borderRight={'1px solid #000'}
                        borderLeft={'1px solid #000'}
                        borderBottom={'1px solid #000'}
                      >
                        {company.content}
                      </Td>
                      <Td
                        fontSize={15}
                        borderRight={'1px solid #000'}
                        borderLeft={'1px solid #000'}
                        borderBottom={'1px solid #000'}
                      >
                        {company.place}
                      </Td>
                      <Td
                        fontSize={15}
                        borderRight={'1px solid #000'}
                        borderLeft={'1px solid #000'}
                        borderBottom={'1px solid #000'}
                      >
                        {company.Implementation_date}
                      </Td>
                      <Td
                        fontSize={15}
                        borderRight={'1px solid #000'}
                        borderLeft={'1px solid #000'}
                        borderBottom={'1px solid #000'}
                      >
                        {company.absence_date}
                      </Td>
                      <Td
                        fontSize={15}
                        borderRight={'1px solid #000'}
                        borderLeft={'1px solid #000'}
                        borderBottom={'1px solid #000'}
                      >
                        {company.absence_status}
                      </Td>
                      <Td
                        fontSize={15}
                        borderRight={'1px solid #000'}
                        borderLeft={'1px solid #000'}
                        borderBottom={'1px solid #000'}
                      >
                        {company.intermediat_result}
                      </Td>
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
