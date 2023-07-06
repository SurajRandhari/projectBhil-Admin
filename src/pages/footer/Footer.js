// import React from 'react'

// const Footer = () => {
//   return (
//     <div>Footer a</div>
//   )
// }

// export default Footer

import React from 'react';

const Footer = () => {
  function handleFileUpload(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
  
    reader.onload = function (event) {
      const imgElement = document.getElementById('footer_logo_preview');
      imgElement.src = event.target.result;
    };
  
    reader.readAsDataURL(file);
  }


  return (
<div>
<h5 className="card-title">Footer</h5>
            <div className="col-12 d-flex no-block align-items-center">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                   <li className="breadcrumb-item">
                    <a href="/">
                      Home
                    </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                       Footer                       
                    </li>
                 </ol>
              </nav>
            </div>

    <div className="container-fluid">
      <form
        className="form-horizontal"
        id="BannerInsert"
        name="BannerInsert"
        // action="https://futuresfoundry.com/demo/vainavin/Footer/save"
        method="POST"
      >
        <div className="row" >
          <input type="hidden" name="footer_logo_image_old" />
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Footer Content box</h5>
                <div className="form-group row">
                  <div className="col-sm-12">
                    <label
                      htmlFor="footer_box_content"
                      className="control-label col-form-label"
                    >
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      name="footer_box_content"
                      id="footer_box_content"
                      rows="2"
                      defaultValue="Education is the passport to the future, for tomorrow belongs to those who prepare for it"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div className="card" style={{ marginTop: '15px' }}>
                <div className="card-body">
                  <h5 className="card-title">Footer Logo</h5>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="control-label col-form-label">
                        File Upload
                      </label>
                      <div className="cono1">
                        <input
                          type="file"
                          className="form-control"
                          name="footer_logo"
                          id="footer_logo"
                          onChange={(e) => handleFileUpload(e)}
                        />
                        <input
                          type="hidden"
                          className="form-control"
                          value="1682310536_f9d96b1cc3c0fc050c90.png"
                          name="footer_logo_image_old"
                          id="footer_logo_image_old"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-9 text-center footer_logo_imageShow">
                        <img
                          id="footer_logo_preview"
                          style={{ height: '200px' }}
                          alt="Uploaded logo"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            <div className="card" style={{marginTop:'15px'}}>
              <div className="card-body">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Footer;
