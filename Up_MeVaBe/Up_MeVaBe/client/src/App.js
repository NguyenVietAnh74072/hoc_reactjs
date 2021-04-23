/** @format */

import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Header from "./views/Header/Header";
import Main from "./views/Body/Main";
import Footer from "./views/Footer/Footer";
import ThanhMeunuMobile from "./views/Header/ThanhMeunuMobile";
import hosting from "./host/hosting";
function App() {
// Dữ liệu
    const getData = async ()=>{
      const response = await fetch(hosting.LoaiHang+`/true`)
      const JsonData = await response.json()
      
      if(window.localStorage.getItem('DanhMuc')===null){
        window.localStorage.setItem('DanhMuc',JSON.stringify(JsonData))
        window.location.href = "./"
      }else{
      }
    }
    
  getData()
  const [Tab, SetTab] = React.useState(
    window.localStorage.getItem("Tab") === null
      ? "Index"
      : window.localStorage.getItem("Tab")
  );
  const onTab = async (e) => {
    window.localStorage.setItem("Tab", e);
    SetTab(e);
    // console.log(e)
    window.location.reload();
  };
  React.useEffect(async () => {
    console.log(window.localStorage.getItem("Tab"));
    // getData()
  }, []);
  return (
    <React.Fragment>
      {/* Top Header */}
      <Header onTab={onTab}></Header>
      {/* Slider */}
      <Main Tab={Tab}></Main>
      
      <Footer></Footer>

      <ThanhMeunuMobile onTab={onTab}></ThanhMeunuMobile>
    </React.Fragment>
  );
}

export default App;
