import React from 'react'
import Card from './Card'




const Banner = () => {
  return (
    <div className="banner">
  
       {/* ------------------------------------------------------------------------ */}
       <div className="page-breadcrumb">
           <div className="row">
               <div className="col-12 d-flex no-block align-items-center">
                   <h4 className="page-title">Banner</h4>
                   <div className="ms-auto text-end">
                       <button type="button" className="btn btn-light" style={{padding:'0'}} >
                       <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" color='blue' viewBox="0 0 256 256"><path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-24 104h-48v48a8 8 0 0 1-16 0v-48H72a8 8 0 0 1 0-16h48V72a8 8 0 0 1 16 0v48h48a8 8 0 0 1 0 16Z"/></svg>
                       </button>
                   </div>
               </div>

               <div className="col-12 d-flex no-block align-items-center">
                   <nav aria-label="breadcrumb">
                       <ol className="breadcrumb">
                           <li className="breadcrumb-item">
                             <a href="/">
                             Home
                             </a>
                           </li>
                           <li className="breadcrumb-item active" aria-current="page">
                               Banner                        
                           </li>
                       </ol>
                   </nav>
               </div>
           </div>
       </div>
      {/* ------------------------------------------------------------------------ */}

      <Card/>
    </div>
  )
}

 

export default Banner