import React from 'react';
import { BsArrowDownRight, BsArrowUpRight } from 'react-icons/bs';
import { Column } from '@ant-design/plots';

const MyDashboard = () => {
  const data = [
    {
      type: 'Jan',
      sales: 38,
    },
    {
      type: 'Feb',
      sales: 52,
    },
    {
      type: 'Mar',
      sales: 61,
    },
    {
      type: 'Apr',
      sales: 145,
    },
    {
      type: 'may',
      sales: 48,
    },
    {
      type: 'Jun',
      sales: 38,
    },
    {
      type: 'Jul',
      sales: 38,
    },
    {
      type: 'Aug',
      sales: 38,
    },
    {
      type: 'Sep',
      sales: 38,
    },
    {
      type: 'Oct',
      sales: 38,
    },
    {
      type: 'Nov',
      sales: 38,
    },
    {
      type: 'Dec',
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    color: ({ type }) => {
      return "#ffd333";
    },
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'Months',
      },
      sales: {
        alias: 'Transaction',
      },
    },
  };
  return (
    <div>
      <div>
        <h3> Admin Dashboard</h3>
        <div className="d-flex justify-content-between align-items-center gap-3">
          <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
            <div className="">
              <p>Total</p>
              <h4 className='mb-0'>00</h4>
            </div>
            <div className="d-flex flex-column align-items-end">
              <h6 className='green'><BsArrowUpRight />32%</h6>
              <p className='mb-0'>compared To April 2023</p>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
            <div className="">
              <p>Total</p>
              <h4 className='mb-0'>00</h4>
            </div>
            <div className="d-flex flex-column align-items-end">
              <h6 className='red'><BsArrowDownRight />32%</h6>
              <p className='mb-0'>compared To April 2023</p>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
            <div className="">
              <p>Total</p>
              <h4 className='mb-0'>00</h4>
            </div>
            <div className="d-flex flex-column align-items-end">
              <h6 className='green'><BsArrowUpRight />32%</h6>
              <p className='mb-0'>compared To April 2023</p>
            </div>
          </div>
        </div>
        <div className='col-12 mt-5'>
          <h3 className='mb-3'>Transacton Statics</h3>
          <div><Column {...config} /></div>
        </div>
      </div>
    </div>
  )
}

export default MyDashboard;