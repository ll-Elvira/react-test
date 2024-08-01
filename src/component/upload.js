import React,{ useState,useRef ,useEffect} from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload, Table} from 'antd';

const Up = () => {
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    render:()=><button
    onClick={()=>{

    }}
    >按钮</button>

  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '5',
    name: 'Disabled User',
    age: 99,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '6',
    name: 'Disabled User',
    age: 99,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '7',
    name: 'Disabled User',
    age: 99,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '8',
    name: 'Disabled User',
    age: 99,
    address: 'Sydney No. 1 Lake Park',
  },

];


  
  const tableRef = useRef(null)
  
 

  useEffect(()=>{
    const handleScroll = ()=>{
      const table = tableRef.current
      if (table) {
      const { scrollTop, scrollHeight, clientHeight } = table;
      console.log("数据-----------",scrollTop, scrollHeight, clientHeight)
      if(scrollTop+clientHeight>scrollHeight){
        console.log("更新表格")
      }
    }
  }
    const table = tableRef.current
    const { scrollTop, scrollHeight, clientHeight } = table;
  


  },[])

  return (
  <div>
    <Table
    ref = {tableRef}
    columns={columns}
    dataSource={data}
    scroll={{
      y: 240,
    }}
    />
    <button

    >111111111</button>


</div>
  )
}
export default Up;