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
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
} from '@chakra-ui/react'  
import { supabase } from '@/libs/supabaseClient'
import { useEffect, useState } from 'react'

export const RecruitTable = () => {
  const [ user, setUser ] = useState<any[] | null>(null)
  const [ user_id, setUser_id ] = useState<any | null>(null)
  const [ table, setTable ] = useState<any[] | null>(null)
  const [ full_name, setFullName ] = useState('')

  const [serial_number, setSerial_number] = useState<number>(1)
  const [code, setCode] = useState<number>(0)
  const [name, setName] = useState('')
  const [result, setResult] = useState<Boolean>()
  const [acceptance_date, setAcceptance_date] = useState('')
  // const [acceptance_date, setAcceptance_date] = useState<Date>()
  const [content, setContent] = useState('')
  const [place, setPlace] = useState('')
  const [Implementation_date, setImplementation_date] = useState('')
  const [absence_date, setAbsence_data] = useState('')
  const [absence_status, setAbsence_status] = useState<Boolean>()
  const [intermediate_result, setIntermediate_result] = useState<Boolean>()
  
  let count = 1

  const tableData = async () => {
    count = 1
    const { data: { user } ,error  } = await supabase.auth.getUser()
    console.log(user);
    if (error) console.log(error)

    if (user){
      setUser_id(user.id)
      let { data, error } = await supabase.from('profiles').select('*').eq('id', user.id)
      console.log(data);
      if (error) console.log(error)
      setUser(data)
      data?.map((data: any, index) => {
        setFullName(data.full_name)
      })
    }
      
    if (user){
      let { data, error } = await supabase.from('companyinfo').select('*').eq('user_id', user.id).order('serial_number', { ascending: true })
      console.log(data);
      if (error) console.log(error)
      setTable(data)
      if (table) setSerial_number(5)
    }
    console.log(serial_number);
  }

  useEffect(() => {
    tableData()
  }, [])


  const upDate = async () => {
    // 更新
    if(table){
      
      const postData = await Promise.all(
        table.map(async (td: any, index) => {
          let { data, error } = await supabase.from('companyinfo')
          .update({
            // serial_number: td.serial_number,
            // user_id: user_id,
            code: td.code,
            name: td.name,
            result: td.result,
            acceptance_date: td.acceptance_date,
            content: td.content,
            place: td.place,
            Implementation_date: td.Implementation_date,
            absence_date: td.absence_date,
            absence_status: td.absence_status,
            intermediate_result: td.intermediate_result,
          }).eq('user_id', user_id).eq('serial_number', index+1)
        })
      )
    }
    
    console.log(serial_number);
    // 追加
    if (
      serial_number==0
      || code==0
      || name==''
      || acceptance_date==null
      || content==''
      || place==''
      || Implementation_date==null
      || absence_date==null
    ) {
      console.log("not insert")
    }
    else{
      console.log("insert")
      
      const updates = {
        serial_number: serial_number,
        user_id: user_id,
        code: code,
        name: name,
        result: result,
        acceptance_date: acceptance_date,
        content: content,
        place: place,
        Implementation_date: Implementation_date,
        absence_date: absence_date,
        absence_status: absence_status,
        intermediate_result: intermediate_result,
      }
      
      let { data, error } = await supabase.from('companyinfo').insert([updates])
      tableData()
    }
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
                    {/* 更新 */}
                    {table?.map((data: any, index) => {
                      if (count <= index+1) count++
                      return (
                        <Tr key={data.id}>
                          <Td>{data.serial_number}</Td>
                          <Td><NumberInput defaultValue={data.code} min={0} onChange={(e) => { data.code = parseInt(e.valueOf()) }}>
                            <NumberInputField />
                            <NumberInputStepper>
                              <NumberIncrementStepper />
                              <NumberDecrementStepper />
                            </NumberInputStepper>
                          </NumberInput></Td>
                          <Td><Input onChange={(e) => { data.name = e.target.value }} placeholder={data.name}></Input></Td>
                          <Td><Select placeholder={(data.result ? '合格':'不合格')} onChange={(e) => { data.result = (e.target.value === "合格"); }}>
                            <option value={(data.result ? '不合格':'合格')}>{(data.result ? '不合格':'合格')}</option>
                          </Select></Td>
                          <Td><Input onChange={(e) => { data.acceptance_date = e.target.value }} placeholder={data.acceptance_date}></Input></Td>
                          <Td><Input onChange={(e) => { data.content = e.target.value }} placeholder={data.content}></Input></Td>
                          <Td><Input onChange={(e) => { data.place = e.target.value }} placeholder={data.place}></Input></Td>
                          <Td><Input onChange={(e) => { data.Implementation_date = e.target.value }} placeholder={data.Implementation_date}></Input></Td>
                          <Td><Input  onChange={(e) => { data.absence_date = e.target.value }} placeholder={data.absence_date}></Input></Td>
                          <Td><Select placeholder={(data.absence_status ? '許可':'不許可')} onChange={(e) => { data.absence_status = (e.target.value === '許可'); }}>
                            <option value={(data.absence_status ? '不許可':'許可')}>{(data.absence_status ? '不許可':'許可')}</option>
                          </Select></Td>
                          <Td><Select placeholder={(data.intermediate_result ? '合格':'不合格')} onChange={(e) => { data.intermediate_result = (e.target.value === "合格"); }}>
                            <option value={(data.intermediate_result ? '不合格':'合格')}>{(data.intermediate_result ? '不合格':'合格')}</option>
                          </Select></Td>
                        </Tr>
                      )
                    })}
                    {/* 追加 */}
                    <Tr>
                      <Td>{count}</Td>
                      <Td><NumberInput defaultValue={code} min={0} onChange={(e) => { setCode(parseInt(e.valueOf())), setSerial_number(count) }}>
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput></Td>
                      <Td><Input onChange={(e) => { setName(e.target.value)  }}></Input></Td>
                      <Td><Select placeholder=' ' onChange={(e) => { setResult( e.target.value === "合格" )}}>
                        <option value='合格'>合格</option>
                        <option value='不合格'>不合格</option>
                      </Select></Td>
                      <Td><Input onChange={(e) => { setAcceptance_date(e.target.value) }}></Input></Td>
                      <Td><Input onChange={(e) => { setContent(e.target.value) }}></Input></Td>
                      <Td><Input onChange={(e) => { setPlace(e.target.value) }}></Input></Td>
                      <Td><Input onChange={(e) => { setImplementation_date(e.target.value) }}></Input></Td>
                      <Td><Input onChange={(e) => { setAbsence_data(e.target.value) }}></Input></Td>
                      <Td><Select placeholder=' ' onChange={(e) => { setAbsence_status( e.target.value === "許可" )}}>
                        <option value='許可'>許可</option>
                        <option value='不許可'>不許可</option>
                      </Select></Td>
                      <Td><Select placeholder=' ' onChange={(e) => { setIntermediate_result(e.target.value === "合格"); }}>
                        <option value='合格'>合格</option>
                        <option value='不許可'>不合格</option>
                      </Select></Td>
                    </Tr>
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