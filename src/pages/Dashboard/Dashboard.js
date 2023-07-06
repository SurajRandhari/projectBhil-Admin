import React from 'react'
import './Dashboard.css'
import TableTop from '../../components/Dashboard/TableTop/TableTop'
import TableLeft from '../../components/Dashboard/TableLeft/TableLeft'
import TableRight from '../../components/Dashboard/TableRight/TableRight'

const Dashboard = () => {
  return (
    <div className='Dashboard'>Dashboard
    
    <div className="row" style={{paddingBottom: '20px' ,}}>
 


 
 {/* <!-- Column --> * */}
    <div className="col-md-6 col-lg-3">
        <div className="card card-hover">
            <div className="box bg-info text-center">
                <h1 className="font-light text-white">
                <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                >
                <path
                    fill="currentColor"
                    d="M13 3v6h8V3m-8 18h8V11h-8M3 21h8v-6H3m0-2h8V3H3v10Z"
                />
                </svg>
                </h1>
                <h6 className="text-white">Dashboard</h6>
            </div>
        </div>
    </div>
{/* <!-- Column --> */}
     <div className="col-md-6 col-lg-3">
        <div className="card card-hover">
            <div className="box bg-success text-center">
                <h1 className="font-light text-white">
                7                        </h1>
                <h6 className="text-white">BLOG</h6>
            </div>
        </div>
      </div>
{/* <!-- Column --> */}
        <div className="col-md-6 col-lg-3">
            <div className="card card-hover">
                <div className="box bg-warning text-center">
                    <h1 className="font-light text-white">
                    5                        </h1>
                    <h6 className="text-white">COMMENT</h6>
                </div>
            </div>
        </div>
{/* <!-- Column --> */}
    <div className="col-md-6 col-lg-3">
        <div className="card card-hover">
            <div className="box bg-danger text-center">
                <h1 className="font-light text-white">
                37                        </h1>
                <h6 className="text-white">CONTACT</h6>
            </div>
        </div>
    </div>
</div> 


<TableTop />
      <div className="flex-container " style={{marginTop:'8px'}}>
        <div id="left" style={{marginRight:'8px'}}>
          <TableLeft />
        </div>
        <div id="right">
          <TableRight />
        </div>
      </div>

    </div>
  )
}

export default Dashboard