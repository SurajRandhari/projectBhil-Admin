import React, { useState } from 'react'

const TableTop = () => {

    const [data, setData] = useState([
        {
          id: 1,
          name: 'Sagar Bodlekar',
          subject: 'tes',
          email: 'sagarbodlekar@gmail.com',
          comment: 'sdfsdfsd',
          website: 'john.com',
        },
        {
          id: 2,
          name: 'Megha Khandelwal',
          subject: 'BLOG001',
          email: 'megha@futuresfoundry.co.in',
          comment: 'sdfsdfsd',
          website: 'john.com',
        },
        {
          id: 3,
          name: 'Megha Khandelwal',
          subject: 'BLOG001',
          email: 'megha@futuresfoundry.co.in',
          comment: 'This is a comment',
          website: 'john.com',
        },
        {
          id: 4,
          name: 'Megha Khandelwal',
          subject: 'BLOG001',
          email: 'megha@futuresfoundry.co.in',
          comment: 'This is a comment',
          website: 'john.com',
        },
        {
          id: 5,
          name: 'Megha Khandelwal',
          subject: 'BLOG001',
          email: 'megha@futuresfoundry.co.in',
          comment: 'nice post . Thank you for posting something like thi',
          website: 'john.com',
        },
        {
          id: 6,
          name: 'sss ffff',
          subject: 'tes',
          email: 'sagarbodlekar@gmail.com',
          comment: 'This is a comment',
          website: 'john.com',
        },
        {
          id:7,
          name: 'uuu fff',
          subject: 'BLOG001',
          email: 'john@example.com',
          comment: 'sdfsdfsd',
          website: 'example.com',
        },
        {
          id: 8,
          name: 'll hh',
          subject: 'BLOG001',
          email: 'john@example.com',
          comment: 'This is a comment',
          website: 'example.com',
        },
       
        
        // Add more data as needed
      ]);



  const [sortColumn, setSortColumn] = useState('id'); // Column to sort by
  const [sortOrder, setSortOrder] = useState('asc'); // Sort order ('asc' or 'desc')
  const [searchTerm, setSearchTerm] = useState(''); // Search term for filtering
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const itemsPerPage = 5; // Number of items to display per page

    
const handleSort = (column) => {
    if (column === sortColumn) {
      // If the same column is clicked again, toggle the sort order
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // Otherwise, set the new column and default sort order to 'asc'
      setSortColumn(column);
      setSortOrder('asc');
    }
  
    // Sort the data based on the selected column and sort order
    setData((prevData) =>
      [...prevData].sort((a, b) => {
        const aValue = a[column];
        const bValue = b[column];
  
        // Compare the values based on the sort order
        if (sortOrder === 'asc') {
          return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
        } else {
          return bValue < aValue ? -1 : bValue > aValue ? 1 : 0;
        }
      })
    );
  };
  // Function to handle searching/filtering
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  // Function to handle deleting a row by ID
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };


  // Function to handle page changes
const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Pagination logic
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = data.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(data.length / itemsPerPage);


  return (
    <div className="tab">
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Latest comment</h4>
          </div>

          <div
            className="comment-widgets scrollable ps-container ps-theme-default"
            data-ps-id="ef0e13e6-c411-8f12-a633-ab9304a829a0"
          >
            <div className="table-responsive">
              <div
                id="zero_config_wrapper"
                className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"
              >
                <div className="row">
                  <div className="col-sm-6 d-flex align-items-center">
                    <div
                      className="dataTables_length"
                      id="zero_config_length"
                    >
                      <label className="d-flex align-items-center gap-2">
                        Show{'  '}
                        <select
name="zero_config_length"
aria-controls="zero_config"
className="form-control form-control-sm"
value={itemsPerPage}
// onChange={(e) => {
//   // setItemsPerPage(Number(e.target.value));
//   setItemsPerPage(Number(e.target.value));
//   setCurrentPage(1);
// }}
>

                          <option value="10">10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                        </select>{' '}
                        Entries
                      </label>
                    </div>
                  </div>

                  <div className="col-sm-6 d-flex align-items-center justify-content-end">
                    <div
                      id="zero_config_filter"
                      className="dataTables_filter"
                    >
                      <label className="text-right">
                        Search:{' '}
                        <input
                          type="text"
                          placeholder="Search"
                          value={searchTerm}
                          onChange={handleSearch}
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row" style={{ marginTop: '10px' }}>
                  <div className="col-sm-12">
                    <table
                      id="zero_config"
                      className="table table-striped table-bordered dataTable no-footer"
                      role="grid"
                      aria-describedby="zero_config_info"
                    >
                      <thead role="row">
                        <tr>
                          <th
                            className="sorting_asc"
                            style={{ width: '8.4px' }}
                            onClick={() => handleSort('id')}
                          >
                            No.{' '}
                            {sortColumn === 'id' &&
                              (sortOrder === 'asc' ? '▲' : '▼')}
                          </th>
                          <th
                            className="sorting"
                            style={{ width: '98.7167px' }}
                            aria-label="Name: activate to sort column ascending"
                            onClick={() => handleSort('name')}
                          >
                            Name{' '}
                            {sortColumn === 'name' &&
                              (sortOrder === 'asc' ? '▲' : '▼')}
                          </th>
                          <th
                            className="sorting"
                            style={{ width: '48.6667px' }}
                            onClick={() => handleSort('subject')}
                          >
                            Blog{' '}
                            {sortColumn === 'subject' &&
                              (sortOrder === 'asc' ? '▲' : '▼')}
                          </th>
                          <th
                            className="sorting"
                            style={{ width: '165.9px' }}
                            onClick={() => handleSort('email')}
                          >
                            Email{' '}
                            {sortColumn === 'email' &&
                              (sortOrder === 'asc' ? '▲' : '▼')}
                          </th>
                          <th
                            className="sorting"
                            style={{ width: '263.267px' }}
                            onClick={() => handleSort('comment')}
                          >
                            Comment{' '}
                            {sortColumn === 'comment' &&
                              (sortOrder === 'asc' ? '▲' : '▼')}
                          </th>
                          <th
                            className="sorting"
                            style={{ width: '49.55px' }}
                            onClick={() => handleSort('website')}
                          >
                            Website{' '}
                            {sortColumn === 'website' &&
                              (sortOrder === 'asc' ? '▲' : '▼')}
                          </th>
                          <th className="sorting" style={{ width: '40.5px' }}>
                            Action
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {currentItems
                          .filter((item) =>
                            item.name
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase())
                          )
                          .map((item, index) => (
                            <tr
                              key={item.id}
                              role="row"
                              className={
                                index % 2 === 0 ? 'even' : 'odd'
                              }
                            >
                              <td>{item.id}</td>
                              <td>{item.name}</td>
                              <td>{item.subject}</td>
                              <td>{item.email}</td>
                              <td>{item.comment}</td>
                              <td>{item.website}</td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-danger btn-sm text-white"
                                  onClick={() =>
                                    handleDelete(item.id)
                                  }
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>

                    <div className="pagination-container">
                      <ul className="pagination justify-content-end">
                        {Array.from(
                          { length: totalPages },
                          (_, index) => index + 1
                        ).map((pageNumber) => (
                          <li
                            key={pageNumber}
                            className={`page-item ${
                              currentPage === pageNumber ? 'active' : ''
                            }`}
                          >
                            <button
                              className="page-link"
                              onClick={() =>
                                handlePageChange(pageNumber)
                              }
                            >
                              {pageNumber}
                            </button>
                          </li>
                        ))}
                      </ul>
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

export default TableTop