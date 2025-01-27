import React from 'react';

const Categories = () => {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Categories - Harison Furniture Admin Panel</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      <style dangerouslySetInnerHTML={{__html: `
        /* General Styling */
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f7fc;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            min-height: 100vh;
        }

        /* Sidebar */
        .sidebar {
            background-color: #170841;
            width: 240px;
            height: 100vh;
            color: white;
            padding: 20px;
            position: fixed;
        }

        .sidebar h2 {
            text-align: center;
            font-size: 24px;
            margin-bottom: 30px;
        }

        .sidebar-nav ul {
            list-style: none;
            padding: 0;
        }

        .sidebar-nav ul li {
            margin: 15px 0;
        }

        .sidebar-nav ul li a {
            color: #fff;
            text-decoration: none;
            font-size: 16px;
            padding: 10px;
            border-radius: 4px;
            display: block;
            transition: background 0.3s;
        }

        .sidebar-nav ul li a:hover {
            background-color: #3b4c70;
        }

        /* Main Content */
        .main-content {
            margin-left: 200px; /* Moved content more to the left */
            padding: 30px;
            width: 100%;
            max-width: 1200px;
        }

        /* Header */
        .content-header h1 {
            font-size: 32px;
            color: #2d353f;
            text-align: center;
        }

        .content-header p {
            font-size: 16px;
            color: #777;
            text-align: center;
        }

        /* Search Bar */
        .search-container {
            margin-bottom: 30px;
            display: flex;
            justify-content: center;
        }

        .search-bar {
            width: 300px;
            padding: 8px;
            font-size: 14px;
            border-radius: 4px;
            border: 1px solid #ddd;
        }

        /* Categories Table */
        .categories-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            margin-left: -20px; /* Moved the table a bit to the left */
            text-align: center;
        }

        .categories-table th, .categories-table td {
            padding: 8px 10px;
            border: 1px solid #ddd;
            text-align: left;
        }

        .categories-table th {
            background-color: #f4f7fc;
            font-weight: bold;
        }

        .categories-table td {
            background-color: #ffffff;
        }

        .categories-table tr:nth-child(even) {
            background-color: #f9f9f9;
        }

        /* Button Styles */
        .add-category-btn {
            background-color: #3b80e3;
            color: white;
            padding: 8px 16px;
            border: none;
            border-radius: 4px;
            font-size: 14px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .add-category-btn:hover {
            background-color: #357ac9;
        }

        .action-btns .btn {
            padding: 6px 12px;
            font-size: 12px;
            border-radius: 4px;
            cursor: pointer;
            margin: 0 5px;
            transition: background-color 0.3s;
            font-size: 16px;
                width: auto;
                padding: 6px 12px;
        }

        .action-btns .edit-btn {
            background-color: #2478c7;
            color: white;
        }

        .action-btns .edit-btn:hover {
            background-color: #3f37bd;
        }

        .action-btns .delete-btn {
            background-color: #f44336;
            color: white;
        }

        .action-btns .delete-btn:hover {
            background-color: #e53935;
        }

        /* Footer Styling */
        footer {
            text-align: center;
            font-size: 14px;
            color: #777;
            margin-top: 40px;
        }

        footer a {
            color: #3b80e3;
            text-decoration: none;
        }

        footer a:hover {
            text-decoration: underline;
        }

        /* Responsive Styling */
        @media (max-width: 768px) {
            .main-content {
                margin-left: 0;
                padding: 20px;
            }

            .sidebar {
                width: 200px;
                padding: 15px;
            }

            .sidebar-nav ul li a {
                font-size: 14px;
                padding: 8px;
            }

            .categories-table th, .categories-table td {
                padding: 8px 10px;
            }

            .add-category-btn {
                font-size: 16px;
                width: auto;
                padding: 6px 12px;
            }

        }
      `}} />
      {/* Main Content */}
      <div className="main-content">
        <div className="content-header">
          <h1>Categories</h1>
          <p>Manage all categories for your furniture store.</p>
        </div>
        {/* Categories Table */}
        <table className="categories-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sofas</td>
              <td className="action-btns">
                <button className="btn edit-btn">Edit</button>
                <button className="btn delete-btn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>Chairs</td>
              <td className="action-btns">
                <button className="btn edit-btn">Edit</button>
                <button className="btn delete-btn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>Tables</td>
              <td className="action-btns">
                <button className="btn edit-btn">Edit</button>
                <button className="btn delete-btn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>Beds</td>
              <td className="action-btns">
                <button className="btn edit-btn">Edit</button>
                <button className="btn delete-btn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>Storage</td>
              <td className="action-btns">
                <button className="btn edit-btn">Edit</button>
                <button className="btn delete-btn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>Cabinets</td>
              <td className="action-btns">
                <button className="btn edit-btn">Edit</button>
                <button className="btn delete-btn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>Wardrobes</td>
              <td className="action-btns">
                <button className="btn edit-btn">Edit</button>
                <button className="btn delete-btn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>Bookshelves</td>
              <td className="action-btns">
                <button className="btn edit-btn">Edit</button>
                <button className="btn delete-btn">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        {/* Footer */}
        <footer>
          <p>© 2025 Harison Furniture. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
        </footer>
      </div>
    </div>
  );
};

export default Categories;
