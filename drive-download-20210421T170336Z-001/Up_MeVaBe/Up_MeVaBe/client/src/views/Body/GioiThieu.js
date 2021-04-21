import React from 'react'
import PhanTrenGioiThieu from './GioiThieu/PhanTrenGioiThieu'
import PhanDuoiGioiThieu from './GioiThieu/PhanDuoiGioiThieu'

function GioiThieu() {
    const [Load,SetLoad] = React.useState(false)
    // React.useEffect(()=>{
    //     SetLoad(false)
    // },[])
    return (
        <React.Fragment>
            <PhanTrenGioiThieu></PhanTrenGioiThieu>
            <PhanDuoiGioiThieu></PhanDuoiGioiThieu>
        </React.Fragment>
    )
}

export default GioiThieu
