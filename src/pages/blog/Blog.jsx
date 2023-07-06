import React, { useState } from 'react';

const Blog = () => {
  const [blogData, setBlogData] = useState([
    {
        id: 1,
        title: 'BLOG001',
        category: 'sagar',
        image: 'https://futuresfoundry.com/demo/vainavin/public/uploads/blog/1682417139_1a8deab7583cf3a0ac44.jpg',
        editLink: 'https://futuresfoundry.com/demo/vainavin/blog-edit/3'
      },
      {
        id: 2,
        title: 'hello',
        category: 'fgfar',
        image: 'https://futuresfoundry.com/demo/vainavin/public/uploads/blog/1681388005_e37f616b37cb89df6dd6.png',
        editLink: 'https://futuresfoundry.com/demo/vainavin/blog-edit/4'
      },
      {
        id: 3,
        title: 'qwdlo',
        category: 'zdar',
        image: 'https://futuresfoundry.com/demo/vainavin/public/uploads/blog/1681388005_e37f616b37cb89df6dd6.png',
        editLink: 'https://futuresfoundry.com/demo/vainavin/blog-edit/4'
      },
      {
        id: 4,
        title: 'llklo',
        category: 'gghgar',
        image: 'https://futuresfoundry.com/demo/vainavin/public/uploads/blog/1681388005_e37f616b37cb89df6dd6.png',
        editLink: 'https://futuresfoundry.com/demo/vainavin/blog-edit/4'
      },
      {
        id: 5,
        title: 'dsdff',
        category: 'bvvbr',
        image: 'https://futuresfoundry.com/demo/vainavin/public/uploads/blog/1681388005_e37f616b37cb89df6dd6.png',
        editLink: 'https://futuresfoundry.com/demo/vainavin/blog-edit/4'
      },
      {
        id: 6,
        title: 'jkjjk',
        category: 'sagar',
        image: 'https://futuresfoundry.com/demo/vainavin/public/uploads/blog/1681388005_e37f616b37cb89df6dd6.png',
        editLink: 'https://futuresfoundry.com/demo/vainavin/blog-edit/4'
      },
      {
        id: 7,
        title: 'gh',
        category: 'ghg',
        image: 'https://futuresfoundry.com/demo/vainavin/public/uploads/blog/1681388005_e37f616b37cb89df6dd6.png',
        editLink: 'https://futuresfoundry.com/demo/vainavin/blog-edit/4'
      },
      {
        id: 8,
        title: 'sdfs',
        category: 'sdfd ',
        image: 'https://futuresfoundry.com/demo/vainavin/public/uploads/blog/1681388005_e37f616b37cb89df6dd6.png',
        editLink: 'https://futuresfoundry.com/demo/vainavin/blog-edit/4'
      },
    // Add more blog objects here
  ]);

  const [sortColumn, setSortColumn] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  const sortByColumn = (column) => {
    let order = 'asc';
    if (sortColumn === column && sortOrder === 'asc') {
      order = 'desc';
    }

    setSortColumn(column);
    setSortOrder(order);

    setBlogData((prevData) => {
      const newData = [...prevData];
      newData.sort((a, b) => {
        if (a[column] < b[column]) return order === 'asc' ? -1 : 1;
        if (a[column] > b[column]) return order === 'asc' ? 1 : -1;
        return 0;
      });
      return newData;
    });
  };

  const renderSortArrow = (column) => {
    if (sortColumn === column) {
      return sortOrder === 'asc' ? <span>&#9660;</span> : <span>&#9650;</span>;
    }
    return null;
  };

  const handleDelete = (id) => {
    setBlogData((prevData) => prevData.filter((blog) => blog.id !== id));
  };

  return (
    <>
    <h5 className="card-title">Basic Datatable</h5>
    <div className="col-12 d-flex no-block align-items-center">
                   <nav aria-label="breadcrumb">
                       <ol className="breadcrumb">
                           <li className="breadcrumb-item">
                             <a href="/">
                             Home
                             </a>
                           </li>
                           <li className="breadcrumb-item active" aria-current="page">
                               Blog                       
                           </li>
                       </ol>
                   </nav>
               </div>
    <div className="container-fluid">
{/* ---------------------------------------------------------- */}
<div className="row">
          <div className="col-md-12">
<div className="card">
<div className="card-body">
                
<div className="table-responsive">

{/* ---------------------------------------------------------- */}
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

      
      <table
        id="zero_config"
        className="table table-striped table-bordered dataTable no-footer"
        role="grid"
        aria-describedby="zero_config_info"
      >
        <thead>
          <tr role="row">
            <th
              className="sorting"
              aria-controls="zero_config"
              aria-label="#: activate to sort column ascending"
              style={{ width: '42.066px' }}
            >
              <button type="button" onClick={() => sortByColumn('id')}>
                # {renderSortArrow('id')}
              </button>
            </th>
            <th
              className="sorting"
              aria-controls="zero_config"
              aria-label="Title: activate to sort column ascending"
              style={{ width: '191.458px' }}
            >
              <button type="button" onClick={() => sortByColumn('title')}>
                Title {renderSortArrow('title')}
              </button>
            </th>
            <th
              className="sorting_asc"
              aria-controls="zero_config"
              aria-label="Category: activate to sort column descending"
              style={{ width: '120.972px' }}
              aria-sort={sortColumn === 'category' ? sortOrder : 'none'}
            >
              <button type="button" onClick={() => sortByColumn('category')}>
                Category {renderSortArrow('category')}
              </button>
            </th>
            <th
              className="sorting"
              aria-controls="zero_config"
              aria-label="Image: activate to sort column ascending"
              style={{ width: '248.559px' }}
            >
              Image
            </th>
            <th
              className="sorting"
              aria-controls="zero_config"
              aria-label="Action: activate to sort column ascending"
              style={{ width: '284.774px' }}
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {blogData.map((blog) => (
            <tr key={blog.id} role="row" className="odd">
              <td>{blog.id}</td>
              <td>{blog.title}</td>
              <td className="sorting_1">{blog.category}</td>
              <td>
                <img src={blog.image} alt="user" height="100px" />
              </td>
              <td>
                <a href={blog.editLink}>
                  <button type="button" className="btn  btn-sm text-white" style={{ backgroundColor: '#27a9e3', marginRight: '5px' }}>
                    Edit
                  </button>
                </a>
                <button type="button" className="btn btn-warning btn-sm text-white"style={{ marginRight: '5px' }}>
                  unpublish
                </button>
                <button type="button" className="btn btn-danger btn-sm text-white" onClick={() => handleDelete(blog.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     {/* ---------------------------------------------------------- */}
</div>
</div>
</div>
</div>
</div>


     {/* ---------------------------------------------------------- */}

    </div>
    </>
  );
};

export default Blog;
