import React from 'react'
import PhanDuoiMucYeuThich from './MucYeuThich/PhanDuoiMucYeuThich'
import PhanTrenMucYeuThich from './MucYeuThich/PhanTrenMucYeuThich'

function MucYeuThich() {
    return (
        <React.Fragment>
            <PhanTrenMucYeuThich></PhanTrenMucYeuThich>
            <PhanDuoiMucYeuThich></PhanDuoiMucYeuThich>
        </React.Fragment>
    )
}

export default MucYeuThich
