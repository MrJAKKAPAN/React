import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Link from '../components/head'
import Banner from '../components/banner'
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

const Home =() => (
  <div>
  <h1>Home</h1>
  <Banner/>
  </div>
);

export default Home;