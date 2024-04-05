
import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, ZAxis } 
 from 'recharts';

function Home() {

    const data = [
        {
          name: 'Sun',
          Monthly: 400,
          Weekly: 240,
          Today: 240,
        },
        {
          name: 'Mon',
          Monthly: 300,
          Weekly: 139,
          Today: 221,
        },
        {
          name: 'Tue',
          Monthly: 200,
          Weekly: 980,
          Today: 229,
        },
        {
          name: 'Wed',
          Monthly: 278,
          Weekly: 390,
          Today: 200,
        },
        {
          name: 'Thu',
          Monthly: 189,
          Weekly: 480,
          Today: 218,
        },
        {
          name: 'Fri',
          Monthly: 239,
          Weekly: 380,
          Today: 250,
        },
        {
          name: 'Sat',
          Monthly: 349,
          Weekly: 430,
          Today: 210,
        },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>TOTAL MENUS</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>300</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>TOTAL ORDERS</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>12</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>TOTAL CLIENTS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>33</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>ALERTS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>42</h1>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 2,
                right: 15,
                left: 10,
                bottom: 3,
            }}
            >
                <CartesianGrid strokeDasharray="3 3 " />
                <XAxis dataKey="name" />
                <YAxis />
                
                <Tooltip />
                <Legend />
                <Bar dataKey="Monthly" fill="#9e9ea4" />
                <Bar dataKey="Weekly" fill="#8884d8" />
                <Bar dataKey="Today" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3 " />
                <XAxis dataKey="name" />
                <YAxis />
               
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Monthly" stroke="#9e9ea4"activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Weekly" stroke="#8884d8"  />
                <Line type="monotone" dataKey="Today" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}
export default Home