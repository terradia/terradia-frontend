import React from 'react'
import Head from 'next/head'
import Button from "../components/Button";
import Input from "../components/Input"

const inputStyle = {
    width: "200px"
};

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
      <Button text={"bite"} color={"primary"} >TEST</Button>
      <Input type={"password"} style={inputStyle} />
  </div>
);

export default Home
