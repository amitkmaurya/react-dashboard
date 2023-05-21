import React from 'react'
import { Table } from 'antd';
import { Button, DatePicker, Space } from 'antd';

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const columns = [
  {
    title: 'SNo',
    dataIndex: 'key',
  },
  {
    title: 'Credit ID',
    dataIndex: 'creditid',
  },
  {
    title: 'Debit ID',
    dataIndex: 'debitid',
  },
  {
    title: 'TxnNo',
    dataIndex: 'txnno',
  },
  {
    title: 'Date',
    dataIndex: 'date',
  },
  {
    title: 'Mobile No',
    dataIndex: 'mobileno',
  },
  {
    title: 'TxnType',
    dataIndex: 'txntype',
  },
  {
    title: 'Total Amt',
    dataIndex: 'totalamt',
  },
  {
    title: 'Amount',
    dataIndex: 'amt',
  },
  {
    title: 'Charges',
    dataIndex: 'charges',
  },
  {
    title: 'comm',
    dataIndex: 'comm',
  },
  {
    title: 'GST',
    dataIndex: 'gst',
  },
  {
    title: 'TDS',
    dataIndex: 'tds',
  },
  {
    title: 'Balance',
    dataIndex: 'balance',
  },
];
const data = [];
for (let i = 1; i < 46; i++) {
  data.push({
    key: i,
    creditid: 'ANRP00001',
    debitid: 'ANRP00001',
    txnno: 'ANRC336184820230103060550',
    date: '20/05/2023',
    mobileno: '9999999999',
    txntype: 'BBPS Transaction',
    totalamt: '00.00',
    amt: '00.00',
    charges: '00.00',
    comm: '00.00',
    gst: '00.00',
    tds: '00.00',
    balance: '00.00',
  });
}
  
const LedgerReport = () => {
  return (
    <div>
       <div className="row mb-3">
        <div className="col-md-3 my-2">
          <h6>From Date<span className='red'>*</span></h6>
        <Space direction="vertical">
         <DatePicker onChange={onChange} />
        </Space>
        </div>
        <div className="col-md-3 my-2">
          <h6>To Date<span className='red'>*</span></h6>
        <Space direction="vertical">
         <DatePicker onChange={onChange} />
        </Space>
        </div>
        <div className="col-md-2 d-flex align-items-end my-2">
        <Space wrap>
         <Button type="primary">Search</Button>
        </Space>
        </div>
       </div>
        <div className="table-responsive">
       <Table columns={columns} dataSource={data} />
       </div>
    </div>
  )
}

export default LedgerReport