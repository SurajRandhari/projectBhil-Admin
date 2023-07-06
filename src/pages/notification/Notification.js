import React from 'react'

const Notification = () => {
  const data = [
    { title: 'First Blog', description: 'Lorem ipsum dolor sit amet' },
    { title: 'Second Blog', description: 'Consectetur adipiscing elit' },
    // Add more blog entries as needed
  ];

  return (
    <div>
       <h5 className="card-title">Notification</h5>
            <div className="col-12 d-flex no-block align-items-center">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                   <li className="breadcrumb-item">
                    <a href="/">
                      Home
                    </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Notification                      
                    </li>
                 </ol>
              </nav>
            </div>
    <div className="container-fluid">
     
      <div className="row" >
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Blog</h5>
              <div className="table-responsive">
                <div
                  id="zero_config_wrapper"
                  className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"
                >
                     <div className="row" style={{marginBottom: '10px'}}>
        <div className="col-md-6 d-flex align-items-center">
          <div className="dataTables_length" id="zero_config_length">
            <label className="d-flex align-items-center">
              Show{' '}
              <select
                name="zero_config_length"
                aria-controls="zero_config"
                className="form-control form-control-sm"
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>{' '}
              entries
            </label>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-end align-items-center">
          <div id="zero_config_filter" className="dataTables_filter">
            <label className="d-flex align-items-center">
              Search:
              <input
                type="search"
                className="form-control form-control-sm ml-2"
                placeholder=""
                aria-controls="zero_config"
              />
            </label>
          </div>
        </div>
      </div>



                  <div className="row">
                    <div className="col-sm-12">
                      <table
                        id="zero_config"
                        className="table table-striped table-bordered dataTable no-footer"
                        role="grid"
                        aria-describedby="zero_config_info"
                      >
                        <thead>
                          <tr role="row">
                            <th
                              className="sorting_asc"
                              aria-controls="zero_config"
                              aria-sort="ascending"
                              aria-label="#: activate to sort column descending"
                              style={{ width: '104.306px' }}
                            >
                              #
                            </th>
                            <th
                              className="sorting"
                              aria-controls="zero_config"
                              aria-label="Title: activate to sort column ascending"
                              style={{ width: '253.351px' }}
                            >
                              Title
                            </th>
                            <th
                              className="sorting"
                              aria-controls="zero_config"
                              aria-label="Description: activate to sort column ascending"
                              style={{ width: '275.885px' }}
                            >
                              Description
                            </th>
                            <th
                              className="sorting"
                              aria-controls="zero_config"
                              aria-label="Action: activate to sort column ascending"
                              style={{ width: '302.5px' }}
                            >
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.map((item, index) => (
                            <tr role="row" className="odd" key={index}>
                              <td className="sorting_1">{index + 1}</td>
                              <td>{item.title}</td>
                              <td>{item.description}</td>
                              <td>
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#notifyModel"
                                  className="btn btn-sm text-white"
                                  style={{ backgroundColor: '#27a9e3', marginRight: '5px' }}
                                >
                                  Edit
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-success btn-sm text-white"
                                >
                                  Active
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Notification