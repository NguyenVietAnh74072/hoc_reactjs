import React from 'react'
import Navbar from '../views/Navbar'
import Header from '../views/Header'
import Footer from '../views/Footer'
import Body from '../views/Body'
function Main() {
    const [Tab,SetTab]= React.useState('')
    const _Tab = (e)=>{
        SetTab(e)
    }
    React.useEffect(()=>{
    },[])
    console.log(Tab)
    return (
        <React.Fragment>
            {/* <Navbar Tab={_Tab}></Navbar> */}
            <Navbar Tab={_Tab} _Tab={Tab}></Navbar>
            <div id="right-panel" className="right-panel">
                <Header Tab={_Tab}></Header>
                <div className="clearfix"></div>
                <Body Tab={Tab}></Body>
                <div className="clearfix"></div>
                <Footer></Footer>
            </div>
        </React.Fragment>
    )
}

export default Main
