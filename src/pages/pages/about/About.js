import React, { useState } from 'react'

const About = () => {
  const [imagePreview, setImagePreview] = useState(
    'https://futuresfoundry.com/demo/vainavin/public/uploads/about/1682507444_8085c1715054b53c0fd7.jpg'
  );

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImagePreview(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
    <h5 className="card-title"> About-us</h5>
       <div className="col-12 d-flex no-block align-items-center">
         <nav aria-label="breadcrumb">
           <ol className="breadcrumb">
              <li className="breadcrumb-item">
               <a href="/">
                 Home
               </a>
               </li>
               <li className="breadcrumb-item active" aria-current="page">
                    About-us                       
               </li>
            </ol>
         </nav>
       </div>
   <div className="container-fluid">
   <form className="form-horizontal" id="BannerInsert" name="BannerInsert" action="https://futuresfoundry.com/demo/vainavin/Aboutus/save" method="POST">
   <div className="row" >
   <div className="col-md-12">
 <input type="hidden" name="section_1_image_old" value="1682410963_1ea581e36eef89d4590b.jpg" />
 <input type="hidden" name="section_2_image_old" value="1683281843_cc1f107ae1c0dd3c111b.png" />
 <input type="hidden" name="section_3_image_old" value="1683281843_79b66824bdf8fc2ffce7.png" />
 <input type="hidden" name="title_image_old" value="1682507444_8085c1715054b53c0fd7.jpg" />
 {/* Header */}
 <div className="card">
   <div className="card-body">
     <h5 className="card-title">Header</h5>
     <div className="form-group row">
       <div className="col-sm-6 is-valid">
         <label htmlFor="title" className="control-label col-form-label">
           Title:
         </label>
         <input
           type="text"
           className="form-control"
           id="title"
           name="title"
           value="About us"
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
             name="title_image"
             id="title_image"
             onChange={handleImageChange}
           />
         </div>
       </div>
     </div>
     <div className="form-group row" style={{marginTop:'20px'}}>
       <div className="col-sm-9 text-center title_imageimageShow">
         <img
           id="blah4"
           src={imagePreview}
           style={{ height: '200px' }}
           alt=""
         />
       </div>
     </div>
   </div>
 </div>
</div>

           <div className="card" style={{marginTop:'20px'}}>
               <div className="card-body">
                   <h5 className="card-title">Meta Tag</h5>
                   <div className="form-group row ">
                       <div className="col-sm-12  is-valid">
                           <label to="meta_title" className=" control-label col-form-label">
                               Meta Title
                           </label>

                           <input type="text" className="form-control" id="meta_title" value="sdfaf" name="meta_title" required="" placeholder=" Meta Title Here"/>
                       </div>
                   </div>

                    <div className="form-group row ">
                       <div className="col-sm-12  is-valid">
                           <label to="blog_title" className=" control-label col-form-label">
                               Meta  Description
                           </label>

                           <textarea id="meta_desc" className="form-control" name="meta_desc">
                               sad fsdf s adf
                           </textarea>

                       </div>

                   </div>
               </div>
            </div>


            <div className="card" style={{marginTop:'20px'}}>
               <div className="card-body">
                   <h5 className="card-title">Section 1</h5>
                   <div className="form-group row ">
                       <div className="col-sm-6  is-valid">
                           <label to="banner_title" className=" control-label col-form-label">
                                       Title:
                           </label>
                           <input type="text" className="form-control" id="section_1_title" name="section_1_title" value="AVINASH PANDEY " required="" placeholder="Title Here"/>
                       </div>

                       <div className="col-md-6  is-valid">
                           <label className="control-label col-form-label">File Upload</label>
                               <div className="cono1 ">
                                   <input type="file" className="form-control" name="section_1_image" id="section_1_image"/>
                               </div>
                       </div>
                   </div>

                    <div className="form-group row ">
                           <div className="col-sm-6  is-valid ">
                               <label to="cono1" className=" control-label col-form-label">Description</label>
                               <textarea className="form-control" name="section_1_des" id="section_1_des" rows="9" required="">&lt;p&gt;To become a youth icon at an early age is not easy as pie. Years of hard work, passion, and determination go into becoming one of the youngest millionaires and digital entrepreneurs. Pushkar Raj Thakur wants to promote #GoSelfMade across the country and has started to touch the sky with his recent feat of receiving the honor of getting his name written into the Guinness Book of World Records 2022. He achieved this master stroke by holding the largest social media event of 2022, named Social Media Growth Conclave 2022. Featured in publications such as Times of India and Hindustan Times, PRT trains in Digital Marketing, Entrepreneurship, Online Business Development, and other such core disciplines to help you grow as an individual as well as an organization.&lt;/p&gt;
                               &lt;p&gt;To become a youth icon at an early age is not easy as pie. Years of hard work, passion, and determination go into becoming one of the youngest millionaires and digital entrepreneurs. Pushkar Raj Thakur wants to promote #GoSelfMade across the country and has started to touch the sky with his recent feat of receiving the honor of getting his name written into the Guinness Book of World Records 2022. He achieved this master stroke by holding the largest social media event of 2022, named Social Media Growth Conclave 2022. Featured in publications such as Times of India and Hindustan Times, PRT trains in Digital Marketing, Entrepreneurship, Online Business Development, and other such core disciplines to help you grow as an individual as well as an organization.&lt;/p&gt;</textarea>
                           </div>

                           <div className="col-sm-6  text-center section_1_imageimageShow">
                               <img id="blah" src="https://futuresfoundry.com/demo/vainavin/public/uploads/about/1682410963_1ea581e36eef89d4590b.jpg"  style={{height:'200px'}} alt=""/>
                           </div>
                    </div>

               </div>
            </div>

            {/* <!-- section 2 --> */}
            <div className="card" style={{marginTop:'20px'}}>
                <div className="card-body">
                       <h5 className="card-title">Section 2</h5>
                       <div className="form-group row ">
                           <div className="col-sm-6  is-valid">
                               <label to="section_2_title" className=" control-label col-form-label">
                                   Title:</label>
                               <input type="text" className="form-control" id="section_2_title" name="section_2_title" value=" Our Mission" required="" placeholder="Title Here"/>
                           </div>
                           <div className="col-md-6  is-valid">
                               <label className="control-label col-form-label">File Upload</label>
                               <div className="cono1 ">
                                   <input type="file" className="form-control" name="section_2_image" id="section_2_image"/>
                               </div>
                           </div>

                       </div>

                       <div className="form-group row ">
                           <div className="col-sm-6  is-valid ">
                               <label to="cono1" className=" control-label col-form-label">Description</label>
                               <textarea className="form-control" name="section_2_des" id="section_2_des" rows="9" required="">
                                                Vainavin the Market Gurukul is to Educate, Empower, and Transform Individuals into  Investors through Comprehensive and Practical Stock Market classNamees. We Strive to Provide High-Quality Education, Cutting-Edge Tools, and Personalized Guidance to Help Our Students Gain Confidence, Build Wealth, and Achieve Financial Independence in the Dynamic World of Stock Market Investing."      
                               </textarea>
                           </div>
                           <div className="col-sm-6  text-center section_2_imageimageShow">
                               <img id="blah2" src="https://futuresfoundry.com/demo/vainavin/public/uploads/about/1683281843_cc1f107ae1c0dd3c111b.png"  style={{height:'200px'}} alt=""/>
                           </div>
                       </div>
                  </div>
            </div>
           {/* <!-- section 3 --> */}
             <div className="card" style={{marginTop:'20px'}}>
                <div className="card-body">
                   <h5 className="card-title">Section 3</h5>
                   <div className="form-group row ">
                        <div className="col-sm-6  is-valid">
                               <label to="section_3_title" className=" control-label col-form-label">
                                   Title:
                               </label>
                               <input type="text" className="form-control" id="section_3_title" name="section_3_title" value="Our Vision" required="" placeholder="Title Here"/>
                           </div>

                           <div className="col-md-6  is-valid">
                               <label className="control-label col-form-label">File Upload</label>
                               <div className="cono1 ">
                                   <input type="file" className="form-control" name="section_3_image" id="section_3_image"/>
                               </div>
                           </div>

                    </div>

                   <div className="form-group row ">
                        <div className="col-sm-6  is-valid ">
                           <label to="cono1" className=" control-label col-form-label">Description</label>
                            <textarea className="form-control" name="section_3_des" id="section_3_des" rows="9" required="">
                                            The Market Gurukul is to become the premier destination for stock market education, providing comprehensive and practical learning experiences to empower individuals with the knowledge, skills, and confidence needed to succeed in the dynamic world of stock market investing. Our aim is to inspire and educate investors, equipping them with the understanding of stock market fundamentals, technical analysis, risk management, and trading strategies to make informed investment decisions and achieve financial prosperity.
                            </textarea>
                         </div>

                        <div className="col-sm-6  text-center section_3_imageimageShow">
                               <img id="blah3" style={{height:'200px'}} alt="" src="https://futuresfoundry.com/demo/vainavin/public/uploads/about/1683281843_79b66824bdf8fc2ffce7.png"/>
                        </div>

                   </div>
                </div>
             </div>

             {/* <!-- section 4 --> */}
               {/* <div className="card" style={{height:'400px'}}>
               <div className="card-body">
                           <h5 className="card-title">Our Team</h5>
                           <div className="form-group row ">
                           
                               <div className="col-md-6  is-valid">
                                   <label className="control-label col-form-label">File Upload</label>
                                   <div className="cono1 ">
                                       <input type="file" className="form-control" name="our_team_image" id="our_team_image"/>
                                   </div>
                               </div>
                           </div>

                           <div className="form-group row ourTeam ">
                               <div className="col-sm-3  ">
                               <div className="row el-element-overlay"> <div className="card">
                               <div className="el-card-item">
                               <div className="el-card-avatar el-overlay-1">
                               <img src="https://futuresfoundry.com/demo/vainavin/public/uploads/ourTeam/1681731725_330688a5999f63bdbffe.png" alt="user"/>
                               <div className="el-overlay">
                               <ul className="list-style-none el-info">
                               <li className="el-item">
                               <a className="btn  btn-outline-danger el-link" >
                               <i className="fas fa-trash">
                               </i>
                           </a>
                           </li>
                           </ul>
                           </div>
                           </div>
                           </div>
                           </div>
                           </div>
                           </div><div className="col-sm-3  ">
                               <div className="row el-element-overlay">
                               <div className="card">
                               <div className="el-card-item">
                               <div className="el-card-avatar el-overlay-1">
                               <img src="https://futuresfoundry.com/demo/vainavin/public/uploads/ourTeam/1681972189_1d212c05a327dc961198.png" alt="user"/>
                               <div className="el-overlay">
                               <ul className="list-style-none el-info">
                               <li className="el-item">
                               <a className="btn  btn-outline-danger el-link" >
                               <i className="fas fa-trash">
                               </i>
                           </a>
                           </li>
                           </ul>
                           </div>
                           </div>
                           </div>

                           </div>
                           </div>
                           </div>
                           <div className="col-sm-3  "> <div className="row el-element-overlay">
                               <div className="card">
                               <div className="el-card-item">
                               <div className="el-card-avatar el-overlay-1">
                               <img src="https://futuresfoundry.com/demo/vainavin/public/uploads/ourTeam/1683976828_8f4645e6ec9844d29e1e.jpg" alt="user"/>
                                   <div className="el-overlay">
                                   <ul className="list-style-none el-info">
                                   <li className="el-item">
                                   <a className="btn  btn-outline-danger el-link" >
                                   <i className="fas fa-trash">
                                   </i>
                               </a>
                               </li>
                               </ul>
                               </div>
                               </div>
                               </div>
                               </div>
                               </div>
                               </div>
                               <div className="col-sm-3  ">
                                   <div className="row el-element-overlay">
                                   <div className="card">
                                   <div className="el-card-item">
                                   <div className="el-card-avatar el-overlay-1">
                                   <img src="https://futuresfoundry.com/demo/vainavin/public/uploads/ourTeam/1683976837_7698b80a350651591a9f.jpg" alt="user"/>
                                   <div className="el-overlay">
                                   <ul className="list-style-none el-info">
                                   <li className="el-item">
                                   <a className="btn  btn-outline-danger el-link" >
                                   <i className="fas fa-trash">
                                   </i>
                               </a>
                               </li>
                               </ul>
                               </div>
                               </div>
                               </div>
                               </div>
                               </div>
                               </div>
                               </div>
               </div>
           </div> */}

           <div className="card"  style={{marginTop:'20px'}}>
                   <div className="card-body">
                       <button type="submit" className="btn btn-primary">Submit</button>
                   </div>
            </div>
{/* ______________________________________________________________________________________        */}
   </div>
   </form>
   </div>
</div>
  )
}

export default About