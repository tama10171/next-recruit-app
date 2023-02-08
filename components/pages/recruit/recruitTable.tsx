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
import SubTitle from '@/components/layouts/subTitle'

export const RecruitTable = () => {
  const [user, setUser] = useState<any[] | null>(null)
  const [user_id, setUser_id] = useState<any | null>(null)
  const [table, setTable] = useState<any[] | null>(null)
  const [full_name, setFullName] = useState('')
  const [class_number, setClass_number] = useState('')
  const [serial_number, setSerial_number] = useState<number>(1)
  const [code, setCode] = useState<number>(0)
  const [name, setName] = useState('')
  const [result, setResult] = useState<Boolean | null>()
  const [acceptance_date, setAcceptance_date] = useState<String | null>()
  // const [acceptance_date, setAcceptance_date] = useState<Date>()
  const [content, setContent] = useState('')
  const [place, setPlace] = useState('')
  const [Implementation_date, setImplementation_date] = useState<String | null>()
  const [absence_date, setAbsence_data] = useState<String | null>()
  const [absence_status, setAbsence_status] = useState<Boolean | null>()
  const [intermediate_result, setIntermediate_result] = useState<Boolean | null>()

  let flg = false
  let count = 1

  const tableData = async () => {
    count = 1
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser()
    console.log(user)
    if (error) console.log(error)

    if (user) {
      setUser_id(user.id)
      let { data, error } = await supabase.from('profiles').select('*').eq('id', user.id)
      console.log(data)
      if (error) console.log(error)
      setUser(data)
      data?.map((data: any, index) => {
        setFullName(data.full_name)
        setClass_number(data.class_number)
      })
    }

    if (user) {
      let { data, error } = await supabase
        .from('companyinfo')
        .select('*')
        .eq('user_id', user.id)
        .order('serial_number', { ascending: true })
      console.log(data)
      if (error) console.log(error)
      setTable(data)
    }
    setSerial_number(serial_number + 1)
    flg = false
    console.log(serial_number)
  }

  useEffect(() => {
    tableData()
  }, [])

  const upDate = async () => {
    // 更新
    if (flg) {
      if (table) {
        let log = ''
        const postData = await Promise.all(
          table.map(async (td: any, index) => {
            let { data, error } = await supabase
              .from('companyinfo')
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
              })
              .eq('user_id', user_id)
              .eq('serial_number', index + 1)
            console.log(data)
            console.log(error)
            if (error == null) {
              log = '活動登録内容を変更しました\n'
            } else {
              log = '通番：' + td.serial_number + ' の更新失敗\n'
            }
          })
        )
        if (log != '') {
          alert(log)
        }
      }
    }

    console.log(serial_number)
    // 追加
    if (
      serial_number == 0 ||
      code == 0 ||
      name == '' ||
      // acceptance_date == null ||
      content == '' ||
      place == '' ||
      Implementation_date == null
      // || absence_date == null
    ) {
      console.log('not insert')
    } else {
      console.log('insert')

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
      console.log(error)
      if (error == null) {
        alert('新しい活動を登録しました')
      } else {
        alert('追加失敗\n\n日付を正しく入力してください')
      }
    }
    tableData()
  }

  return (
    <>
      <SubTitle className="sub_title" title="活動登録・変更" />
      <Accordion allowMultiple m={'0 5%'}>
        <AccordionItem background={'#fff'} color={'#000'} fontSize={16}>
          <h2>
            <AccordionButton p={'10px'}>
              <AccordionIcon />
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontWeight={'bold'}
                fontSize={16}
                ml={'10px'}
              >
                CTB20_{class_number}_{full_name}
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <TableContainer>
              <Table size="md">
                <Tbody>
                  <Tr bg={'#ffb800'} h={50} border={'3px solid black'}>
                    <Td fontWeight={'bold'} colSpan={11} fontSize={'18px'}>
                      ▼ 変更
                    </Td>
                  </Tr>
                  {/* 更新 */}
                  <Tr bg={'#000'} h={'25px'} border={'3px solid #000'}>
                    <Th fontSize={13} color={'#FF9900'}>
                      通番
                    </Th>
                    <Th fontSize={13} color={'#FF9900'}>
                      企業コード
                    </Th>
                    <Th fontSize={13} color={'#FF9900'} minW={150}>
                      企業名
                    </Th>
                    <Th fontSize={13} color={'#FF9900'}>
                      最終結果
                    </Th>
                    <Th fontSize={13} color={'#FF9900'}>
                      内定承諾提出日
                    </Th>
                    <Th fontSize={13} color={'#FF9900'} minW={150}>
                      活動内容
                    </Th>
                    <Th fontSize={13} color={'#FF9900'} minW={150}>
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
                    <Th fontSize={13} color={'#FF9900'} minW={85}>
                      結果
                    </Th>
                  </Tr>
                  {table?.map((data: any, index) => {
                    if (count <= index + 1) count++
                    return (
                      <Tr key={data.id}>
                        <Td>{data.serial_number}</Td>
                        <Td>
                          <NumberInput
                            defaultValue={data.code}
                            min={0}
                            onChange={(e) => {
                              data.code = parseInt(e.valueOf())
                              flg = true
                            }}
                          >
                            <NumberInputField />
                            <NumberInputStepper>
                              <NumberIncrementStepper />
                              <NumberDecrementStepper />
                            </NumberInputStepper>
                          </NumberInput>
                        </Td>
                        <Td>
                          <Input
                            onChange={(e) => {
                              data.name = e.target.value
                              flg = true
                            }}
                            defaultValue={data.name}
                          ></Input>
                        </Td>
                        <Td>
                          <Select
                            onChange={(e) => {
                              data.result =
                                e.target.value === '合格'
                                  ? true
                                  : e.target.value === '不合格'
                                  ? false
                                  : null
                              flg = true
                            }}
                          >
                            <option
                              value={
                                data.result == true ? '合格' : data.result == false ? '不合格' : ' '
                              }
                            >
                              {data.result == true ? '合格' : data.result == false ? '不合格' : ' '}
                            </option>
                            <option
                              value={
                                data.result == null ? '合格' : data.result == true ? '不合格' : ' '
                              }
                            >
                              {data.result == null ? '合格' : data.result == true ? '不合格' : ' '}
                            </option>
                            <option
                              value={
                                data.result == null ? '不合格' : data.result == false ? '合格' : ' '
                              }
                            >
                              {data.result == null ? '不合格' : data.result == false ? '合格' : ' '}
                            </option>
                          </Select>
                        </Td>
                        <Td>
                          <Input
                            type={'date'}
                            defaultValue={data.acceptance_date == null ? '' : data.acceptance_date}
                            onChange={(e) => {
                              data.acceptance_date = e.target.value != '' ? e.target.value : null
                              flg = true
                            }}
                          ></Input>
                        </Td>
                        <Td>
                          <Input
                            onChange={(e) => {
                              data.content = e.target.value
                              flg = true
                            }}
                            defaultValue={data.content}
                          ></Input>
                        </Td>
                        <Td>
                          <Input
                            onChange={(e) => {
                              data.place = e.target.value
                              flg = true
                            }}
                            defaultValue={data.place}
                          ></Input>
                        </Td>
                        <Td>
                          <Input
                            type={'date'}
                            onChange={(e) => {
                              data.Implementation_date =
                                e.target.value != '' ? e.target.value : null
                              flg = true
                            }}
                            defaultValue={data.Implementation_date}
                          ></Input>
                        </Td>
                        <Td>
                          <Input
                            type={'date'}
                            onChange={(e) => {
                              data.absence_date = e.target.value != '' ? e.target.value : null
                              flg = true
                            }}
                            defaultValue={data.absence_date}
                          ></Input>
                        </Td>
                        <Td>
                          <Select
                            onChange={(e) => {
                              data.absence_status =
                                e.target.value === '許可'
                                  ? true
                                  : e.target.value === '不許可'
                                  ? false
                                  : null
                              flg = true
                            }}
                          >
                            <option
                              value={
                                data.absence_status == true
                                  ? '許可'
                                  : data.absence_status == false
                                  ? '不許可'
                                  : ' '
                              }
                            >
                              {data.absence_status == true
                                ? '許可'
                                : data.absence_status == false
                                ? '不許可'
                                : ' '}
                            </option>
                            <option
                              value={
                                data.absence_status == null
                                  ? '許可'
                                  : data.absence_status == true
                                  ? '不許可'
                                  : ' '
                              }
                            >
                              {data.absence_status == null
                                ? '許可'
                                : data.absence_status == true
                                ? '不許可'
                                : ' '}
                            </option>
                            <option
                              value={
                                data.absence_status == null
                                  ? '不許可'
                                  : data.absence_status == false
                                  ? '許可'
                                  : ' '
                              }
                            >
                              {data.absence_status == null
                                ? '不許可'
                                : data.absence_status == false
                                ? '許可'
                                : ' '}
                            </option>
                          </Select>
                        </Td>
                        <Td>
                          <Select
                            onChange={(e) => {
                              data.intermediate_result =
                                e.target.value === '合格'
                                  ? true
                                  : e.target.value === '不合格'
                                  ? false
                                  : null
                              flg = true
                            }}
                          >
                            <option
                              value={
                                data.intermediate_result == true
                                  ? '合格'
                                  : data.intermediate_result == false
                                  ? '不合格'
                                  : ' '
                              }
                            >
                              {data.intermediate_result == true
                                ? '合格'
                                : data.intermediate_result == false
                                ? '不合格'
                                : ' '}
                            </option>
                            <option
                              value={
                                data.intermediate_result == null
                                  ? '合格'
                                  : data.intermediate_result == true
                                  ? '不合格'
                                  : ' '
                              }
                            >
                              {data.intermediate_result == null
                                ? '合格'
                                : data.intermediate_result == true
                                ? '不合格'
                                : ' '}
                            </option>
                            <option
                              value={
                                data.intermediate_result == null
                                  ? '不合格'
                                  : data.intermediate_result == false
                                  ? '合格'
                                  : ' '
                              }
                            >
                              {data.intermediate_result == null
                                ? '不合格'
                                : data.intermediate_result == false
                                ? '合格'
                                : ' '}
                            </option>
                          </Select>
                        </Td>
                      </Tr>
                    )
                  })}{' '}
                  {/* 追加 */}
                  <Tr h={'20px'}>
                    <Td></Td>
                  </Tr>
                  <Tr h={50} fontSize={'18px'} border={'3px solid black'}>
                    <Td fontWeight={'bold'} colSpan={11} bg={'#ffb800'}>
                      ▼ 登録
                    </Td>
                  </Tr>
                  {/* <Thead> */}
                  <Tr bg={'#000'} h={'25px'} border={'3px solid #000'}>
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
                  {/* </Thead> */}
                  <Tr>
                    <Td>{count}</Td>
                    <Td>
                      <NumberInput
                        defaultValue={code}
                        min={0}
                        onChange={(e) => {
                          setCode(parseInt(e.valueOf())), setSerial_number(count)
                        }}
                      >
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </Td>
                    <Td>
                      <Input
                        onChange={(e) => {
                          setName(e.target.value)
                        }}
                        placeholder="例：〇〇株式会社"
                      ></Input>
                    </Td>
                    <Td>
                      <Select
                        placeholder=" "
                        onChange={(e) => {
                          if (e.target.value == '') {
                            setResult(null)
                          } else {
                            setResult(e.target.value === '合格')
                          }
                        }}
                      >
                        <option value="合格">合格</option>
                        <option value="不合格">不合格</option>
                      </Select>
                    </Td>
                    <Td>
                      <Input
                        type={'date'}
                        onChange={(e) => {
                          setAcceptance_date(e.target.value != '' ? e.target.value : null)
                        }}
                      ></Input>
                    </Td>
                    <Td>
                      <Input
                        onChange={(e) => {
                          setContent(e.target.value)
                        }}
                        placeholder="例：一次面接"
                      ></Input>
                    </Td>
                    <Td>
                      <Input
                        onChange={(e) => {
                          setPlace(e.target.value)
                        }}
                        placeholder="例：オンライン"
                      ></Input>
                    </Td>
                    <Td>
                      <Input
                        type={'date'}
                        onChange={(e) => {
                          setImplementation_date(e.target.value != '' ? e.target.value : null)
                        }}
                      ></Input>
                    </Td>
                    <Td>
                      <Input
                        type={'date'}
                        onChange={(e) => {
                          setAbsence_data(e.target.value != '' ? e.target.value : null)
                        }}
                      ></Input>
                    </Td>
                    <Td>
                      <Select
                        placeholder=" "
                        onChange={(e) => {
                          if (e.target.value == '') {
                            setAbsence_status(null)
                          } else {
                            setAbsence_status(e.target.value === '許可')
                          }
                        }}
                      >
                        <option value="許可">許可</option>
                        <option value="不許可">不許可</option>
                      </Select>
                    </Td>
                    <Td>
                      <Select
                        placeholder=" "
                        onChange={(e) => {
                          if (e.target.value == '') {
                            setIntermediate_result(null)
                          } else {
                            setIntermediate_result(e.target.value === '合格')
                          }
                        }}
                      >
                        <option value="合格">合格</option>
                        <option value="不許可">不合格</option>
                      </Select>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Button
        borderRadius={'50%'}
        w={40}
        h={40}
        bg={'#ffb800'}
        fontSize={'20px'}
        _hover={{ bg: '#f0b800' }}
        onClick={upDate}
        position={'fixed'}
        bottom={'3%'}
        right={'7%'}
      >
        保存
      </Button>
    </>
  )
}
