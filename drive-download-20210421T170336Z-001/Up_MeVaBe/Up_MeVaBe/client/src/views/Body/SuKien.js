import React from 'react'
import PhanTrenSuKien from './SuKien/PhanTrenSuKien'
import PhanDuoiSuKien from './SuKien/PhanDuoiSuKien'

function SuKien() {
    return (
        <React.Fragment>
            <PhanTrenSuKien></PhanTrenSuKien>
            <PhanDuoiSuKien></PhanDuoiSuKien>
        </React.Fragment>
    )
}

export default SuKien
