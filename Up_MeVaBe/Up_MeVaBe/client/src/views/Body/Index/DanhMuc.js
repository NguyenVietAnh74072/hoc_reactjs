import React from 'react'

function DanhMuc() {
    const [DanhMucSanPham,SetDanhMucSanPham]=React.useState(
        window.localStorage.getItem('DanhMuc') === null ? []:
        JSON.parse(
            window.localStorage.getItem('DanhMuc')
        )
    )

    React.useState(()=>{
        SetDanhMucSanPham(
            JSON.parse(
                window.localStorage.getItem('DanhMuc')
            )
        )
    },[])
    console.log(DanhMucSanPham)
    return (
        <React.Fragment>
            {/* Product Banner Carousel Start */}
        <div className="section section-padding">
        <div className="container">
        <div className='row mb-lg-8 mb-6'>
            {/* Section Title Start */}
            <div className='col-lg col-12'>
              <div
                className='section-title mb-0 text-center'
                data-aos='fade-up'
                data-aos-delay={400}>
                <h2 className='title mb-2'>Danh mục sản phẩm</h2>
                {/* <p>Add featured products to weekly lineup</p> */}
              </div>
            </div>
            {/* Section Title End */}
          </div>
            <div className="row">
            <div className="col-12">
                <div className="product-banner-carousel">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                    {DanhMucSanPham.map(x=>(
                        <div className="swiper-slide" onClick={
                            // async ()=> alert( JSON.stringify(x))
                            async ()=>{
                                window.localStorage.setItem('onClickDanhMuc',JSON.stringify(x))
                                window.localStorage.setItem('Tab','Danh mục')
                                window.location.href = "./"
                            }
                        }>
                        <div className="single-product-banner" data-aos="fade-up" data-aos-delay={1000}>
                        <div className="banner-img">
                            <a style={{cursor:'pointer'}} onClick={
                            // async ()=> alert( JSON.stringify(x))
                            async ()=>{
                                window.localStorage.setItem('onClickDanhMuc',JSON.stringify(x))
                                window.localStorage.setItem('Tab','Danh mục')
                                window.location.href = "./"
                            }
                        }><img src={x.link_danh_muc} alt="Banner Thumb" /></a>
                        </div>
                        <div className="single-banner-content">
                            <h4 className="title">
                            <a style={{cursor:'pointer'}} onClick={
                            // async ()=> alert( JSON.stringify(x))
                            async ()=>{
                                window.localStorage.setItem('onClickDanhMuc',JSON.stringify(x))
                                window.localStorage.setItem('Tab','Danh mục')
                                window.location.href = "./"
                            }
                        }>{x.ten_loai_hang}</a>
                            </h4>
                        </div>
                        </div>
                    </div>
                    ))}
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        {/* Product Banner Carousel End */}

        </React.Fragment>
    )
}

export default DanhMuc
