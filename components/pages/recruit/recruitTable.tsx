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
    Button,
    Box,
    AccordionPanel,
    AccordionIcon,
    Input,
    Stack,
    Select,
  } from '@chakra-ui/react'  
import { supabase } from '@/libs/supabaseClient'
import { useEffect, useState } from 'react'
import { m } from 'framer-motion'

export const RecruitTable = (props: any) => {
  const [ user, setUser ] = useState<any[] | null>(null)
  const [ table, setTable ] = useState<any[] | null>(null)
  const [ user_id, setUser_id ] = useState('')
  const [ full_name, setFullName ] = useState('')

  const [serial_number, setSerial_number] = useState(0)
  const [code, setCode] = useState(0)
  const [name, setName] = useState('')
  const [result, setResult] = useState()
  const [acceptance_date, setAcceptance_date] = useState<Date>()
  const [content, setContent] = useState('')
  const [place, setPlace] = useState('')
  const [Implementation_date, setImplementation_date] = useState<Date>()
  const [absence_date, setAbsence_data] = useState<Date>()
  const [absence_status, setAbsence_status] = useState()
  const [intermediate_result, setIntermediate_result] = useState()
  

  const TableData = async () => {
    const { data: { user } ,error  } = await supabase.auth.getUser()
    console.log(user);
    // if (error) console.log(error)
    
    if (user){
      setUser_id(user.id)
      // setFullName(user.full_name)
      let { data, error } = await supabase.from('profiles').select('*').eq('id', user.id)
      console.log(data);
      setUser(data)
      data?.map((data: any, index) => {
        setFullName(data.full_name)
      })
    }
      
    if (user){
      let { data, error } = await supabase.from('companyinfo').select('*').eq('user_id', user.id).order('serial_number', { ascending: true })
      console.log(data);
      if (error) console.log(error)
      // setData(data)
      setTable(data)
      // table?.map((data: any, index) => {
      //   setSerial_number(parseInt(data.serial_number))
      //   // console.log(serial_number);
      // })
    }
  }
  useEffect(() => {
    TableData()
  }, [])

  const upDate = async () => {
  }

  return (
    <>
      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <AccordionIcon />
              <Box as="span" flex="1" textAlign="left" fontWeight={'bold'} fontSize={12}>
                CTB20_{full_name}
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
                    {table?.map((data: any, index) => {
                      return (
                        <Tr key={data.id}>
                          {/* <Td><Input type="number" onChange={(e) => { setSerial_number(parseInt(e.target.value)), data.serial_number = e.target.value }} value={serial_number} ></Input></Td> */}
                          <Td><Input type="number" onChange={(e) => { data.serial_number = e.target.value }} value={data.serial_number} ></Input></Td>
                          <Td><Input type="number" onChange={(e) => { data.code = e.target.value }} value={data.code}></Input></Td>
                          <Td><Input onChange={(e) => { data.name = e.target.value }} value={data.name}></Input></Td>
                          <Td><Select placeholder={(data.result ? '合格':'不合格')} onChange={(e) => { data.result = (e.target.value === "合格"); }}>
                            <option value={(data.result ? '不合格':'合格')}>{(data.result ? '不合格':'合格')}</option>
                          </Select></Td>
                          <Td><Input type="date" onChange={(e) => { data.acceptance_date = e.target.value }} value={data.acceptance_date}></Input></Td>
                          <Td><Input onChange={(e) => { data.content = e.target.value }} value={data.content}></Input></Td>
                          <Td><Input onChange={(e) => { data.place = e.target.value }} value={data.place}></Input></Td>
                          <Td><Input type="date" onChange={(e) => { data.Implementation_date = e.target.value }} value={data.Implementation_date}></Input></Td>
                          <Td><Input type="date" onChange={(e) => { data.absence_date = e.target.value }} value={data.absence_date}></Input></Td>
                          <Td><Select placeholder={(data.absence_status ? '許可':'不許可')} onChange={(e) => { data.absence_status = (e.target.value === '許可'); }}>
                            <option value={(data.absence_status ? '不許可':'許可')}>{(data.absence_status ? '不許可':'許可')}</option>
                          </Select></Td>
                          <Td><Select placeholder={(data.intermediate_result ? '合格':'不合格')} onChange={(e) => { data.intermediate_result = (e.target.value === "合格"); }}>
                            <option value={(data.intermediate_result ? '不合格':'合格')}>{(data.intermediate_result ? '不合格':'合格')}</option>
                          </Select></Td>
                          {/* <Td><Input onChange={(e) => { setSerial_number(parseInt(e.target.value)) }} value={serial_number} ></Input></Td>
                          <Td><Input onChange={(e) => { setCode(parseInt(e.target.value)) }} value={code}></Input></Td>
                          <Td><Input onChange={(e) => { setName(e.target.value) }} value={name}></Input></Td>
                          <Td><Input onChange={(e) => { setResult(e.target.value) }} value={result}></Input></Td>
                          <Td><Input onChange={(e) => { setAcceptance_date(e.target.value) }} value={acceptance_date}></Input></Td>
                          <Td><Input onChange={(e) => { setContent(e.target.value) }} value={content}></Input></Td>
                          <Td><Input onChange={(e) => { setPlace(e.target.value) }} value={place}></Input></Td>
                          <Td><Input onChange={(e) => { setImplementation_date(e.target.value) }} value={implementation_date}></Input></Td>
                          <Td><Input onChange={(e) => { setAbsence_data(e.target.value) }} value={absence_date}></Input></Td>
                          <Td><Input onChange={(e) => { setAbsence_status(e.target.value) }} value={absence_status}></Input></Td>
                          <Td><Input onChange={(e) => { setIntermediate_result(e.target.value) }} value={intermediate_result}></Input></Td> */}
                          {/* <Td><Input onChange={(e) => { setResult(e.target.value) }} value={result}></Input></Td>
                          <Td><Input onChange={(e) => { setAbsence_data(e.target.value) }} value={absence_date}></Input></Td>
                          <Td><Input onChange={(e) => { setAbsence_status(e.target.value) }} value={absence_status}></Input></Td>
                          <Td><Input onChange={(e) => { setIntermediate_result(e.target.value) }} value={intermediate_result}></Input></Td> */}
                        </Tr>
                      )
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      
      <Button onClick={upDate}>変更</Button>
    </>
  )
}