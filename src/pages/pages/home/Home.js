import React from 'react'

const Home = () => {
  function handleFileUpload(e, imageId) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
      const imgElement = document.getElementById(imageId);
      imgElement.src = event.target.result;
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  return (
     <div>
       <h5 className="card-title">Main Page</h5>
            <div className="col-12 d-flex no-block align-items-center">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                   <li className="breadcrumb-item">
                    <a href="/">
                      Home
                    </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                    Main Page                      
                    </li>
                 </ol>
              </nav>
            </div>
            
    <div className="container-fluid">
      <form className="form-horizontal" id="BannerInsert" name="BannerInsert">
        {/* Your form content here */}

<div className="card"  style={{marginTop:'20px'}}>
                <div className="card-body">
                    <h5 className="card-title">About us Content</h5>
                    <div className="form-group row ">
                
                     <div className="col-sm-6  is-valid ">
                            <label to="cono1" className=" control-label col-form-label">
                                Description Part 1:
                            </label>
                            <textarea className="form-control" name="about_us_content" id="about_us_content" rows="9" required="">
                                VAINAVIN THE MARKET GURUKUL avinash pandey  an educational institution that provides training and education in the field of stock trading and investment. The main aim of the institute is to equip individuals with the knowledge and skills necessary to succeed in the stock market. 
                                * The courses offered at the institute cover a wide range of topics including stock market analysis, trading strategies, risk management, portfolio management, and financial planning. 
                                * The training is delivered by experienced professionals who have a deep understanding of the stock market and years of experience in trading and investment.
                        </textarea>
                        </div> 

                     <div className="col-sm-6  is-valid ">
                            <label to="cono1" className=" control-label col-form-label">
                                Description Part 2:
                            </label>
                            <textarea className="form-control" name="about_us_content_1" id="about_us_content_1" rows="9" required="">
                                    * The courses offered at the institute cover a wide rantopics including stock market analysis, trading straterisk management, portfolio management, and finaplanning. 
                                    * The training is delivered by experienced professionals who have a deep understanding of the stock market and years of experience in trading and investment.
                                    * The training programs are designed to meet the needs of both novice and experienced traders, and are delivered through a combination of theoretical and practical training methods. 
                                    * The goal of the institute is to help individuals gain the confidence and skills necessary to succeed in the stock market, and to achieve financial freedom through intomed investment 

                                    AINAVIN THE MARKET GURUKUL avinash pandey  an educational institution that provides training and education in the field of stock trading and investment. The main aim of the institute is to equip individuals with the knowledge and skills necessary to succeed in the stock market. 
                                    * The courses offered at the institute cover a wide range of topics including stock market analysis, trading strategies, risk management, portfolio management, and financial planning. 
                                    * The training is delivered by experienced professionals who have a deep understanding of the stock market and years of experience in trading and investment.

                    </textarea>
                    </div> 
                 </div> 
                
                 </div> 
                </div> 

    <div className="card" style={{marginTop:'20px'}}>
                            <div className="card-body">
                                <h5 className="card-title">
                                    Meta Tag
                                </h5>
                                <div className="form-group row ">
                                    <div className="col-sm-12  is-valid">
                                        <label to="meta_title" className=" control-label col-form-label">
                                        Meta Title
                                        </label>

                                        <input type="text" className="form-control" id="meta_title" value="sdfs" name="meta_title" required="" placeholder=" Meta Title Here"/>

                                    </div>
                                </div>

                                <div className="form-group row ">
                                    <div className="col-sm-12  is-valid">
                                        <label to="blog_title" className=" control-label col-form-label">
                                        Meta  Description</label>

                                    <textarea id="meta_desc" className="form-control" name="meta_desc">
                                        sdf s sdf 
                                    </textarea>

                                    </div>
                                </div>
                            </div>
                </div> 

                      {/* <!-- card 1 ---> */}
                 <div className="card" style={{marginTop:'20px'}}>
                            <div className="card-body">
                                <h5 className="card-title">Card 1</h5>

                                <div className="form-group row ">
                                    <div className="col-sm-12  is-valid">
                                        <label to="card_1_title" className=" control-label col-form-label">
                                            Title:
                                        </label>
                                        <input type="text" className="form-control" value="1000" id="card_1_title" name="card_1_title" required="" placeholder="Title Here"/>
                                    </div>
                                </div>

                                <div className="col-sm-12  is-valid ">
                                        <label to="cono1" className=" control-label col-form-label">Description :</label>
                                        <textarea className="form-control" name="card_1_desc" id="card_1_desc" rows="1" required="">
                                            Our clients smiles are the best reward to our hard work and dedication
                                        </textarea>
                                </div>

                            </div>
                </div> 

 {/* <!-- card 2  ---> */}

                 <div className="card" style={{marginTop:'20px'}}>
                    <div className="card-body">
                        <h5 className="card-title">Card 2</h5>
                        <div className="form-group row ">
                            <div className="col-sm-6  is-valid">
                                <label to="card_2_title" className=" control-label col-form-label">
                                    Title:</label>
                                <input type="text" className="form-control" value="122" id="card_2_title" name="card_2_title" required="" placeholder="Title Here"/>
                            </div>
                        </div>

                        <div className="col-sm-6  is-valid ">
                                <label to="cono1" className=" control-label col-form-label">Description :</label>
                                <textarea className="form-control" name="card_2_desc" id="card_2_desc" rows="1" required="">Happy Clients quos rerum natus nemo nesciunt quidem.Happy Clients quos rerum natus nemo nesciunt qui</textarea>
                        </div>

                    </div>
                </div>     

   {/* <!-- card 3  ---> */}

   <div className="card" style={{marginTop:'20px'}}>
                    <div className="card-body">
                        <h5 className="card-title">Card 3</h5>
                        <div className="form-group row ">
                            <div className="col-sm-6  is-valid">
                                <label to="card_3_title" className=" control-label col-form-label">
                                    Title:
                                </label>
                                <input type="text" className="form-control" value=" 133" id="card_3_title" name="card_3_title" required="" placeholder="Title Here"/>
                            </div>
                        </div>

                        <div className="col-sm-6  is-valid ">
                                <label to="cono1" className=" control-label col-form-label">Description :</label>
                                <textarea className="form-control" name="card_3_desc" id="card_3_desc" rows="1" required="">
                                       Happy Clients quos rerum natus nemo nesciunt quidem
                                </textarea>
                        </div>

                    </div>
             </div>   


        <div className="row">
            <div className="col-md-12">
            <div className="card" style={{marginTop:'20px'}}>
  <div className="card-body">
    <h5 className="card-title">Section 1</h5>
    <div className="form-group row">
      <div className="col-md-6 is-valid">
        <label className="control-label col-form-label">title</label>
        <div className="cono1">
          <input
            type="text"
            className="form-control"
            name="section_1_title"
            id="section_1_title"
            value="why learn with us?"
          />
        </div>
      </div>
      <div className="col-md-6 is-valid">
        <label className="control-label col-form-label">File Upload</label>
        <div className="cono1">
          <input
            type="file"
            className="form-control"
            name="section_1_title_image"
            id="section_1_title_image"
            onChange={(e) => handleFileUpload(e, 'blah')}
          />
          <input
            type="hidden"
            className="form-control"
            value="1683280509_2691cee948000a24f984.png"
            name="section_1_title_image_old"
            id="section_1_title_image_old"
          />
        </div>
      </div>
    </div>
    <p className="text-danger">size should be 1200 x 420 (w x h)</p>
    <div className="form-group row">
      <div className="col-sm-9 text-center section_1_title_imageimageShow">
        <img
          id="blah"
          src="https://futuresfoundry.com/demo/vainavin/public/uploads/home/1683280509_2691cee948000a24f984.png"
          style={{ height: '200px' }}
          alt=""
        />
      </div>
    </div>
  </div>
</div>

{/* Section 2.1 */}
<div className="card">
  <div className="card-body">
    <h5 className="card-title">Section 2.1</h5>
    <div className="tom-group row">
      <div className="col-sm-6 is-valid">
        <label htmlFor="section_2_title" className="control-label col-form-label">
          Title:
        </label>
        <input
          type="text"
          className="form-control"
          value="Our Mission"
          id="section_2_title"
          name="section_2_title"
          required=""
          placeholder="Title Here"
        />
      </div>
      <div className="col-md-6 is-valid">
        <label className="control-label col-form-label">File Upload</label>
        <div className="cono1">
          <input
            type="file"
            className="form-control"
            name="section_2_image"
            id="section_2_image"
            onChange={(e) => handleFileUpload(e, 'blah2')}
          />
          <input
            type="hidden"
            className="form-control"
            value="1683280509_fb08f0a35096dde55b9f.png"
            name="section_2_image_old"
            id="section_2_image_old"
          />
          <p className="text-danger">size should be 600 x 400 (w x h)</p>
        </div>
      </div>
    </div>
    <div className="form-group row">
      <div className="col-sm-6 is-valid">
        <label htmlFor="cono1" className="control-label col-form-label">
          Description
        </label>
        <textarea
          className="form-control"
          name="section_2_desc"
          id="section_2_desc"
          rows="9"
          required=""
        >
          Our mission is to provide high-quality education and training on stock market investing and trading, delivered through innovative and interactive programs. We aim to make our courses accessible to anyone who is interested in learning about the stock market, regardless of their background or experience. Through our programs, we strive to equip our students with the tools and strategies to make informed investment decisions and succeed in the stock market.
        </textarea>
      </div>
      <div className="col-sm-6 text-center section_2_imageimageShow">
        <img
          id="blah2"
          src="https://futuresfoundry.com/demo/vainavin/public/uploads/home/1683280509_fb08f0a35096dde55b9f.png"
          style={{ height: '200px' }}
          alt=""
        />
      </div>
    </div>
  </div>
</div>

{/* Section 3 */}
<div className="card" style={{marginTop:'20px'}}>
  <div className="card-body">
    <h5 className="card-title">Section 3</h5>
    <div className="form-group row">
      <div className="col-sm-6 is-valid">
        <label htmlFor="section_3_title" className="control-label col-form-label">
          Title:
        </label>
        <input
          type="text"
          className="form-control"
          value="Our Vision"
          id="section_3_title"
          name="section_3_title"
          required=""
          placeholder="Title Here"
        />
      </div>
      <div className="col-md-6 is-valid">
        <label className="control-label col-form-label">File Upload</label>
        <div className="cono1">
          <input
            type="file"
            className="form-control"
            name="section_3_image"
            id="section_3_image"
            onChange={(e) => handleFileUpload(e, 'blah3')}
          />
          <input
            type="hidden"
            className="form-control"
            value="1683280509_3ac9a96ccd1fb287dff8.png"
            name="section_3_image_old"
            id="section_3_image_old"
          />
          <p className="text-danger">size should be 600 x 400 (w x h)</p>
        </div>
      </div>
    </div>
    <div className="form-group row">
      <div className="col-sm-6 is-valid">
        <label htmlFor="cono1" className="control-label col-form-label">
          Description
        </label>
        <textarea
          className="form-control"
          name="section_3_desc"
          id="section_3_desc"
          rows="9"
          required=""
        >
          To empower individuals with the knowledge and skills to navigate the stock market confidently and achieve their financial goals.
        </textarea>
      </div>
      <div className="col-sm-6 text-center section_3_imageimageShow">
        <img
          id="blah3"
          src="https://futuresfoundry.com/demo/vainavin/public/uploads/home/1683280509_3ac9a96ccd1fb287dff8.png"
          style={{ height: '200px' }}
          alt=""
        />
      </div>
    </div>
  </div>
</div>


                 {/* <!-- section4.1 ---->        */}
                 <div className="card" style={{marginTop:'20px'}}>
                    <div className="card-body">
                        <h5 className="card-title">Section 4.1</h5>
                        <div className="form-group row ">
                            <div className="col-sm-6  is-valid">
                                <label to="section_4_caption_1" className=" control-label col-form-label">
                                    Caption:</label>
                                <input type="text" className="form-control" value="Educate yourself" id="section_4_caption_1" name="section_4_caption_1" required="" placeholder="Title Here"/>
                            </div>

                            <div className="col-md-6  is-valid">
                                <label className="control-label col-form-label">File Upload</label>
                                <div className="cono1 ">
                                    <input type="file" className="form-control" name="section_4_image_1" id="section_4_image_1"/>
                                    <input type="hidden" className="form-control" value="1683369194_60fab73d157a693b43b4.png" name="section_4_image_1_old" id="section_4_image_1_old"/>
                                    <p className="text-danger">size should be 350 x 500 (w x h)</p>
                                </div>
                            </div>

                        </div>

                        <div className="form-group row ">
                            <div className="col-sm-6  text-center section_4_image_1imageShow">
                                <img id="blah4" src="https://futuresfoundry.com/demo/vainavin/public/uploads/home/1683369194_60fab73d157a693b43b4.png" style={{height:'100px'}} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- section4.2 ---->        */}
                <div className="card" style={{marginTop:'20px'}}>
                    <div className="card-body">
                        <h5 className="card-title">Section 4.2</h5>
                        <div className="form-group row ">
                            <div className="col-sm-6  is-valid">
                                <label to="section_4_caption_2" className=" control-label col-form-label">
                                    Caption:
                                </label>
                                <input type="text" className="form-control" value="Set goals " id="section_4_caption_2" name="section_4_caption_2" required="" placeholder="Title Here"/>
                            </div>

                            <div className="col-md-6  is-valid">
                                <label className="control-label col-form-label">File Upload</label>
                                <div className="cono1 ">
                                    <input type="file" className="form-control" name="section_4_image_2" id="section_4_image_2"/>
                                    <input type="hidden" className="form-control" value="1683369194_1ac0983dda4d1f0a4e9e.jpg" name="section_4_image_2_old" id="section_4_image_2_old"/>
                                </div>
                            </div>

                        </div>
                        <div className="form-group row ">
                            <div className="col-sm-6  text-center section_4_image_2imageShow">
                                <img id="blah5" src="https://futuresfoundry.com/demo/vainavin/public/uploads/home/1683369194_1ac0983dda4d1f0a4e9e.jpg" style={{height:'100px'}} alt=""/>
                            </div>
                        </div>

                    </div>
                </div>

                  {/* <!-- section4.3 ---->        */}
                  <div className="card" style={{marginTop:'20px'}}>
                    <div className="card-body">
                        <h5 className="card-title">Section 4.3</h5>
                        <div className="tom-group row ">
                            <div className="col-sm-6  is-valid">
                                <label to="section_4_caption_3" className=" control-label col-form-label">
                                    Caption:
                                </label>
                                <input type="text" className="form-control" value="Develop a plan" id="section_4_caption_3" name="section_4_caption_3" required="" placeholder="Title Here"/>
                            </div>

                            <div className="col-md-6  is-valid">
                                <label className="control-label col-form-label">File Upload</label>
                                <div className="cono1 ">
                                    <input type="file" className="form-control" name="section_4_image_3" id="section_4_image_3"/>
                                    <input type="hidden" className="form-control" value="1683369194_20328a40e0eec8348bc7.png" name="section_4_image_3_old" id="section_4_image_3_old"/>
                                </div>
                            </div>

                        </div>
                        
                        <div className="form-group row ">
                            <div className="col-sm-6  text-center section_4_image_3imageShow">
                                <img id="blah6" src="https://futuresfoundry.com/demo/vainavin/public/uploads/home/1683369194_20328a40e0eec8348bc7.png" style={{height:'100px'}} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="card" style={{marginTop:'20px'}}>
                    <div className="card-body">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>        
{/* _____________________________________________________________________________________________ */}
          </div>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Home