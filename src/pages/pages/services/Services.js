import React, { useState } from 'react';

const Services = () => {
  const [titleImage, setTitleImage] = useState('https://futuresfoundry.com/demo/vainavin/public/uploads/services/1683543876_7743abfd8a5247fb5e2e.jpg');

  const handleTitleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setTitleImage(e.target.result);
    };

    reader.readAsDataURL(file);
  };


  return (
    <div>
    <h5 className="card-title">Services</h5>
       <div className="col-12 d-flex no-block align-items-center">
         <nav aria-label="breadcrumb">
           <ol className="breadcrumb">
              <li className="breadcrumb-item">
               <a href="/">
                 Home
               </a>
               </li>
               <li className="breadcrumb-item active" aria-current="page">
                    Services                       
               </li>
            </ol>
         </nav>
       </div>
<div className="container-fluid">
   <form className="form-horizontal" id="BannerInsert" name="BannerInsert" action="https://futuresfoundry.com/demo/vainavin/Services/save" method="POST" >
   <div className="row">
       <div className="col-md-12">
               <input type="hidden" name="section_1_image_old" value="1681735049_024b5abce51d4aa4c43e.jpg"/>
               <input type="hidden" name="section_2_image_old" value="1681735049_aaac340f4a5618b7ab24.jpg"/>
               <input type="hidden" name="title_image_old" value="1683543876_7743abfd8a5247fb5e2e.jpg"/>
               <input type="hidden" name="section_3_1_logo_old" value="1683971284_b7dc9948b8e83653a4bd.png"/>
               <input type="hidden" name="section_3_2_logo_old" value="1683977563_65a81ac231944d86623c.jpg"/>
               <input type="hidden" name="section_3_3_logo_old" value="1683977563_65a81ac231944d86623c.jpg"/>
               <div className="card">
                   <div className="card-body">
                           <h5 className="card-title">header</h5>
                               <div className="form-group row">
                                <div className="col-sm-6  is-valid">
                                   <label to="section_2_title" className=" control-label col-form-label">
                                       Title:</label>
                                   <input type="text" className="form-control" id="title" name="title" value="Services" required="" placeholder="Title Here"/>
                               </div>
                               <div className="col-md-6  is-valid">
                                   <label className="control-label col-form-label">File Upload</label>
                                   <div className="cono1">
                                   <input type="file" className="form-control" name="title_image" id="title_image" onChange={handleTitleImageChange} />
                                   </div>
                               </div>
                               </div>

                           <div className="form-group row">
                           <div className="col-sm-9 text-center title_imageimageShow">
                               <img id="blah4" src={titleImage} style={{ height: '200px' }} alt="" />
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

                               <input type="text" className="form-control" id="meta_title" value="sdfasf  sdf" name="meta_title" required="" placeholder=" Meta Title Here"/>

                           </div>
                       </div>

                       <div className="form-group row ">
                           <div className="col-sm-12  is-valid">
                               <label to="blog_title" className=" control-label col-form-label">
                                            Meta  Description
                               </label>

                               <textarea id="meta_desc" className="form-control" name="meta_desc">safd sadf sdf sdf
                               </textarea>

                           </div>
                       </div>
                   </div>
               </div>

               <div className="card"  style={{marginTop:'20px'}}>
                   <div className="card-body">
                       <h5 className="card-title">Section 1</h5>
                       <div className="form-group row ">
                           <div className="col-sm-6  is-valid">
                               <label to="banner_title" className=" control-label col-form-label">
                                   Title:</label>
                               <input type="text" className="form-control" id="section_1_title" name="section_1_title" value="Personal finance advice" required="" placeholder="Title Here"/>
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
                               <textarea className="form-control" name="section_1_des" id="section_1_des" rows="9" required="">
                                   &lt;p&gt;To become a youth icon at an early age is not easy as pie. Years of hard work, passion, and determination go into becoming one of the youngest millionaires and digital entrepreneurs. Pushkar Raj Thakur wants to promote #GoSelfMade across the country and has started to touch the sky with his recent feat of receiving the honor of getting his name written into the Guinness Book of World Records 2022. He achieved this master stroke by holding the largest social media event of 2022, named Social Media Growth Conclave 2022. Featured in publications such as Times of India and Hindustan Times, PRT trains in Digital Marketing, Entrepreneurship, Online Business Development, and other such core disciplines to help you grow as an individual as well as an organization.&lt;/p&gt;
                                   &lt;p&gt;To become a youth icon at an early age is not easy as pie. Years of hard work, passion, and determination go into becoming one of the youngest millionaires and digital entrepreneurs. Pushka&lt;/p&gt;
                               </textarea>
                           </div>

                           <div className="col-sm-6  text-center section_1_imageimageShow">
                               <img id="blah" src="https://futuresfoundry.com/demo/vainavin/public/uploads/services/1681735049_024b5abce51d4aa4c43e.jpg"  style={{height:'200px'}} alt=""/>
                           </div>
                       </div>

                   </div>
               </div>

               {/* <!-- section 2 --> */}
               <div className="card"  style={{marginTop:'20px'}}>
                   <div className="card-body">
                       <h5 className="card-title">Section 2</h5>
                       <div className="form-group row ">
                           <div className="col-sm-6  is-valid">
                               <label to="section_2_title" className=" control-label col-form-label">
                                   Title:
                               </label>
                               <input type="text" className="form-control" id="section_2_title" name="section_2_title" value="India Stock Makret Investors" required="" placeholder="Title Here"/>
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
                                           &lt;p&gt;Baap of Chart has a mission to eradicate poverty and financial shortfalls, especially for the people who slog long hours at their jobs and are mostly underpaid. BOC with its very lenient terms and conditions will help support every subscriber financially with an exponential return rate fuelling a comfortable lifestyle. BOC will also eradicate so-called advisors and strategists from the market and simplify wealth creation. BOC through its simple formulas will make it possible for any individual with a basic knowledge of mathematics to trade profitably and will change the mindset of the people who have been misled to believe that trading mastery is only achieved through complex charts, convoluted indicators, and other trading jargon, glorified by so-called “expert registered analysts&lt;/p&gt;                                     
                               </textarea>
                           </div>
                           <div className="col-sm-6  text-center section_2_imageimageShow">
                               <img id="blah2" src="https://futuresfoundry.com/demo/vainavin/public/uploads/services/1681735049_aaac340f4a5618b7ab24.jpg"  style={{height:'200px'}} alt=""/>
                           </div>
                       </div>
                   </div>
               </div>

               {/* <!-- section3.1 ---->        */}
               <div className="card"  style={{marginTop:'20px'}}>
                   <div className="card-body">
                       <h5 className="card-title">Section 3.1</h5>
                       <div className="form-group row ">
                           <div className="col-sm-6  is-valid">
                               <label to="section_3_1_title" className=" control-label col-form-label">
                                   Title:
                               </label>
                               <input type="text" className="form-control" id="section_3_1_title" name="section_3_1_title" value="doubt session" required="" placeholder="Title Here"/>
                           </div>
                           <div className="col-md-6  is-valid">
                               <label className="control-label col-form-label">
                                   File Upload
                               </label>
                               <div className="cono1 ">
                                   <input type="file" className="form-control" name="section_3_1_logo" id="section_3_1_logo"/>
                               </div>
                           </div>
                       </div>

                       <div className="form-group row ">
                           <div className="col-sm-6  is-valid ">
                               <label to="cono1" className=" control-label col-form-label">
                                   Description
                               </label>
                               <textarea className="form-control" name="section_3_1_desc" id="section_3_1_desc" rows="2" required="">                                gf                   
                               </textarea>
                           </div>
                           <div className="col-sm-6  text-center section_3_1_descimageShow">
                               <img id="blah7" src="https://futuresfoundry.com/demo/vainavin/public/uploads/services/1683971284_b7dc9948b8e83653a4bd.png"  style={{height:'100px'}} alt=""/>
                           </div>
                       </div>
                   </div>
               </div>
               

               {/* <!-- section3.2----> */}
               <div className="card"  style={{marginTop:'20px'}}>
                   <div className="card-body">
                       <h5 className="card-title">Section 3.2</h5>
                       <div className="form-group row ">
                           <div className="col-sm-6  is-valid">
                               <label to="section_3_2_title" className=" control-label col-form-label">
                                   Title:
                               </label>
                               <input type="text" className="form-control" id="section_3_2_title" name="section_3_2_title" value="algo trading" required="" placeholder="Title Here"/>
                           </div>
                           <div className="col-md-6  is-valid">
                               <label className="control-label col-form-label">File Upload</label>
                               <div className="cono1 ">
                                   <input type="file" className="form-control" name="section_3_2_logo" id="section_3_2_logo"/>
                               </div>
                           </div>
                       </div>
                       <div className="form-group row ">
                           <div className="col-sm-6  is-valid ">
                               <label to="cono1" className=" control-label col-form-label">Description</label>
                               <textarea className="form-control" name="section_3_2_desc" id="section_3_2_desc" rows="2" required="">
                                          It scans stocks in all supported markets every night, based on standards of Technical Analysis                             
                               </textarea>
                           </div>
                           <div className="col-sm-6  text-center section_3_2_descimageShow">
                               <img id="blah6" src="https://futuresfoundry.com/demo/vainavin/public/uploads/services/1683977563_65a81ac231944d86623c.jpg"  style={{height:'100px'}}alt=""/>
                           </div>
                       </div>
                   </div>
               </div>


                 {/* <!-- section3.3----> */}
                 <div className="card"  style={{marginTop:'20px'}}>
                   <div className="card-body">
                       <h5 className="card-title">Section 3.3</h5>
                       <div className="form-group row ">
                           <div className="col-sm-6  is-valid">
                               <label to="section_3_3_title" className=" control-label col-form-label">
                                   Title:
                               </label>
                               <input type="text" className="form-control" id="section_3_3_title" name="section_3_3_title" value="HOW DOES IT WORK?" required="" placeholder="Title Here"/>
                           </div>
                           <div className="col-md-6  is-valid">
                               <label className="control-label col-form-label">File Upload</label>
                               <div className="cono1 ">
                                   <input type="file" className="form-control" name="section_3_3_logo" id="section_3_3_logo"/>
                               </div>
                           </div>
                       </div>
                       <div className="form-group row ">
                           <div className="col-sm-6  is-valid ">
                               <label to="cono1" className=" control-label col-form-label">
                                   Description
                               </label>
                               <textarea className="form-control" name="section_3_3_desc" id="section_3_3_desc" rows="2" required="">
                                      It scans stocks in all supported markets every night, based on standards of Technical Analysis                             
                               </textarea>
                           </div>
                           <div className="col-sm-6  text-center section_3_3_descimageShow">
                               <img id="blah5" src="https://futuresfoundry.com/demo/vainavin/public/uploads/services/1683977563_65a81ac231944d86623c.jpg"  style={{height:'100px'}} alt=""/>
                           </div>
                       </div>
                   </div>
               </div>

               <div className="card"  style={{marginTop:'20px'}}>
                   <div className="card-body">
                       <button type="submit" className="btn btn-primary">Submit</button>
                   </div>
               </div>
                
{/* ________________________________________________________                 */}
       </div>
   </div>
   </form>
</div>
</div>
  )
}

export default Services