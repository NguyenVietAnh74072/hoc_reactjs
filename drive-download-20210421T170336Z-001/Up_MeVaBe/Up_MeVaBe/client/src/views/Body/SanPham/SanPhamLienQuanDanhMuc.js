import React from 'react'

function SanPhamLienQuanDanhMuc() {
    return (
        <React.Fragment>
            {/* Product Section Start */}
<div className="section section-margin mt-0 position-relative">
  <div className="container">
    {/* Section Title & Tab Start */}
    <div className="row mb-lg-8 mb-md-6 mb-4">
      {/* Section Title Start */}
      <div className="col-lg col-12">
        <div className="section-title mb-0 text-center">
          <h2 className="title mb-2">Sản phẩm liên quan</h2>
          {/* <p>Add featured products to weekly lineup</p> */}
        </div>
      </div>
      {/* Section Title End */}
    </div>
    {/* Section Title & Tab End */}
    {/* Products Start */}
    <div className="row">
      <div className="col">
        <div className="product-carousel arrow-outside-container">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {/* Product Start */}
              <div className="swiper-slide">
                <div className="product-wrapper">
                  <div className="product">
                    <div className="thumb">
                      <a href="single-product.html" className="image">
                        <img className="fit-image" src="assets/images/products/medium-product/1.jpg" alt="Product" />
                        <img className="second-image fit-image" src="assets/images/products/medium-product/3.jpg" alt="Product" />
                      </a>
                      <span className="badges">
                        <span className="sale">-18%</span>
                      </span>
                      <div className="actions">
                        <a href="wishlist.html" className="action wishlist"><i className="pe-7s-like" /></a>
                        <a href="compare.html" className="action compare"><i className="pe-7s-refresh-2" /></a>
                        <a href="#" className="action quickview" data-bs-toggle="modal" data-bs-target="#quick-view"><i className="pe-7s-search" /></a>
                      </div>
                      <div className="add-cart-btn">
                        <button className="btn btn-whited btn-hover-primary text-capitalize add-to-cart">Add To Cart</button>
                      </div>
                    </div>
                    <div className="content">
                      <h5 className="title"><a href="single-product.html">Dinosaur Toys for Baby</a></h5>
                      <span className="price">
                        <span className="new">
                          $12.50
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Product End */}
              {/* Product Start */}
              <div className="swiper-slide">
                <div className="product-wrapper">
                  <div className="product">
                    <div className="thumb">
                      <a href="single-product.html" className="image">
                        <img className="fit-image" src="assets/images/products/medium-product/2.jpg" alt="Product" />
                      </a>
                      <span className="badges">
                        <span className="sale">-20%</span>
                      </span>
                      <div className="actions">
                        <a href="wishlist.html" className="action wishlist"><i className="pe-7s-like" /></a>
                        <a href="compare.html" className="action compare"><i className="pe-7s-refresh-2" /></a>
                        <a href="#" className="action quickview" data-bs-toggle="modal" data-bs-target="#quick-view"><i className="pe-7s-search" /></a>
                      </div>
                      <div className="add-cart-btn">
                        <button className="btn btn-sm btn-whited btn-hover-primary text-capitalize add-to-cart">Add To Cart</button>
                      </div>
                    </div>
                    <div className="content">
                      <h5 className="title"><a href="single-product.html">Mini Car Toy for Kids</a></h5>
                      <span className="price">
                        <span className="new">$38.50</span>
                        <span className="old">$42.85</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Product End */}
              {/* Product Start */}
              <div className="swiper-slide">
                <div className="product-wrapper">
                  <div className="product">
                    <div className="thumb">
                      <a href="single-product.html" className="image">
                        <img className="fit-image" src="assets/images/products/medium-product/3.jpg" alt="Product" />
                      </a>
                      <span className="badges">
                        <span className="new">New</span>
                      </span>
                      <div className="actions">
                        <a href="wishlist.html" className="action wishlist"><i className="pe-7s-like" /></a>
                        <a href="compare.html" className="action compare"><i className="pe-7s-refresh-2" /></a>
                        <a href="#" className="action quickview" data-bs-toggle="modal" data-bs-target="#quick-view"><i className="pe-7s-search" /></a>
                      </div>
                      <div className="add-cart-btn">
                        <button className="btn btn-sm btn-whited btn-hover-primary text-capitalize add-to-cart">Add To Cart</button>
                      </div>
                    </div>
                    <div className="content">
                      <h5 className="title"><a href="single-product.html">Robotics for Kids</a></h5>
                      <span className="price">
                        <span className="new">
                          $28.50
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Product End */}
              {/* Product Start */}
              <div className="swiper-slide">
                <div className="product-wrapper">
                  <div className="product">
                    <div className="thumb">
                      <a href="single-product.html" className="image">
                        <img className="fit-image" src="assets/images/products/medium-product/4.jpg" alt="Product" />
                      </a>
                      <div className="actions">
                        <a href="wishlist.html" className="action wishlist"><i className="pe-7s-like" /></a>
                        <a href="compare.html" className="action compare"><i className="pe-7s-refresh-2" /></a>
                        <a href="#" className="action quickview" data-bs-toggle="modal" data-bs-target="#quick-view"><i className="pe-7s-search" /></a>
                      </div>
                      <div className="add-cart-btn">
                        <button className="btn btn-sm btn-whited btn-hover-primary text-capitalize add-to-cart">Add To Cart</button>
                      </div>
                    </div>
                    <div className="content">
                      <h5 className="title"><a href="single-product.html">Baby Cat Doll</a></h5>
                      <span className="price">
                        <span className="new">
                          $25.50
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Product End */}
            </div>
            <div className="swiper-pagination d-block d-md-none" />
            <div className="swiper-button-prev swiper-nav-button d-none d-md-flex"><i className="pe-7s-angle-left" /></div>
            <div className="swiper-button-next swiper-nav-button d-none d-md-flex"><i className="pe-7s-angle-right" /></div>
          </div>
        </div>
      </div>
    </div>
    {/* Products End */}
  </div>
</div>
{/* Product Section End */}

        </React.Fragment>
    )
}

export default SanPhamLienQuanDanhMuc
