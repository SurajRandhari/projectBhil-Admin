import React, { useState } from 'react';

const TableRight = () => {

    const initialContacts = [
        { id: 1, name: 'Ved Prakash', email: 'xabapaw162@harcity.com', topic: 'shhsi', comment: 'das' },
        { id: 2, name: 'Rahul', email: 'xabapaw162@harcity.com', topic: 'shhsi', comment: 'das' },
        { id: 3, name: 'Ved Prakash', email: 'prakashved37@gmail.com', topic: 'Test', comment: 'Testing...' },
        { id: 4, name: 'Ved Prakash', email: 'prakashved37@gmail.com', topic: 'Test', comment: 'Testing...' },
        { id: 5, name: 'Ved Prakash', email: 'prakashved37@gmail.com', topic: 'Test', comment: 'Testing...' },
        { id: 6, name: 'Anamika', email: 'anamikasinghrng@gmail.com', topic: 'market', comment: 'Please contact as early as possible.' },
        { id: 7, name: 'Anamika', email: 'anamikasinghrng@gmail.com', topic: 'market', comment: 'Please contact as early as possible.' },
        { id: 8, name: 'Anamika', email: 'anamikasinghrng@gmail.com', topic: 'market', comment: 'Please contact as 8early as possible.' },
        { id: 9, name: 'AVINASH', email: 'avinashpandey2220@gmail.com', topic: 'classNameES', comment: 'I NEED className ' },
        { id: 10, name: 'AVINASH', email: 'avinashpandey2220@@gmail.com', topic: 'classNameES', comment: 'I NEED className ' },
      ];
    
      const [contacts, setContacts] = useState(initialContacts);
      const [sortColumn, setSortColumn] = useState('');
      const [sortOrder, setSortOrder] = useState('');
      const [searchQuery, setSearchQuery] = useState('');
    
      // Function to handle column sorting
      const handleSort = (column) => {
        if (column === sortColumn) {
          // Reverse the sort order if the same column is clicked again
          setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
          // Set the new column and default sort order
          setSortColumn(column);
          setSortOrder('asc');
        }
      };
    
      // Function to get the appropriate arrow icon based on sort order
      const getArrowIcon = (column) => {
        if (column === sortColumn) {
          return sortOrder === 'asc' ? <i className="fa fa-sort-up"></i> : <i className="fa fa-sort-down"></i>;
        }
        return null;
      };
    
      // Function to handle search query change
      const handleSearch = (event) => {
        setSearchQuery(event.target.value);
      };
    
      // Filter contacts based on search query
      const filteredContacts = contacts.filter((contact) => {
        return (
          contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          contact.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
          contact.comment.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
    
      // Function to sort the contacts array based on the selected column and order
      const sortedContacts = [...filteredContacts].sort((a, b) => {
        const valueA = a[sortColumn];
        const valueB = b[sortColumn];
    
        if (valueA < valueB) {
          return sortOrder === 'asc' ? -1 : 1;
        }
        if (valueA > valueB) {
          return sortOrder === 'asc' ? 1 : -1;
        }
        return 0;
      });

      
  return (
    <div className="">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title mb-0">CONTACT</h4>
        </div>

        <div className="row m-2">
          <div className="col-sm-6 d-flex align-items-center">
            <div className="dataTables_length" id="zero_config_contect_length">
              <label className="d-flex align-items-center gap-2">
                Show
                <select name="zero_config_contect_length" aria-controls="zero_config_contect" className="form-control form-control-sm">
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                entries
              </label>
            </div>
          </div>
          <div className="col-sm-6">
            <div id="zero_config_contect_filter" className="dataTables_filter">
              <label className="text-right">
                Search:{' '}
                <input type="search" style={{width:'140px'}} placeholder="" aria-controls="zero_config_contect" value={searchQuery} onChange={handleSearch} />
              </label>
            </div>
          </div>
        </div>

        <div className="table-responsive m-2">
          <table className="table table-striped table-bordered dataTable no-footer">
            <thead>
              <tr>
                <th
                  className={sortColumn === '#' ? `sorting_${sortOrder}` : 'sorting'}
                  onClick={() => handleSort('#')}
                >
                  # {getArrowIcon('#')}
                </th>
                <th
                  className={sortColumn === 'name' ? `sorting_${sortOrder}` : 'sorting'}
                  onClick={() => handleSort('name')}
                >
                  Name {getArrowIcon('name')}
                </th>
                <th
                  className={sortColumn === 'email' ? `sorting_${sortOrder}` : 'sorting'}
                  onClick={() => handleSort('email')}
                >
                  Email {getArrowIcon('email')}
                </th>
                <th
                  className={sortColumn === 'topic' ? `sorting_${sortOrder}` : 'sorting'}
                  onClick={() => handleSort('topic')}
                >
                  Topic {getArrowIcon('topic')}
                </th>
                <th>Comment</th>
              </tr>
            </thead>
            <tbody>
              {sortedContacts.map((contact) => (
                <tr key={contact.id}>
                  <td>{contact.id}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.topic}</td>
                  <td>{contact.comment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TableRight