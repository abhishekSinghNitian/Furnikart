import React, { Component } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

class Dashboard extends Component {
  render() {
    const barData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Sales Over Time',
          data: [1200, 2000, 1500, 1800, 2200, 2500],
          backgroundColor: 'rgba(0, 123, 255, 0.5)',
          borderColor: 'rgba(0, 123, 255, 1)',
          borderWidth: 1,
        },
      ],
    };

    const pieData = {
      labels: ['Furniture', 'Accessories', 'Electronics'],
      datasets: [
        {
          data: [300, 50, 150],
          backgroundColor: ['#ffa600', '#36a2eb', '#cc65fe'],
          hoverBackgroundColor: ['#ffa600', '#36a2eb', '#cc65fe'],
        },
      ],
    };

    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Harisons Furniture Dashboard</title>
        <style>
          {`
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f8f9fa;
            }
            header {
              background-color: #290761;
              color: #fff;
              padding: 10px 20px;
              text-align: center;
            }
           .container {
  max-width: 1400px;
  margin: 20px 0 20px 260px;  /* Adds more margin to the left, moving the container to the right */
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow-x: auto; /* Ensures that the container scrolls horizontally if needed */
}


            .summary {
              display: flex;
              justify-content: space-between;
              margin-bottom: 20px;
            }
            .summary-card {
              flex: 1;
              margin: 0 10px;
              padding: 20px;
              background: #007bff;
              color: #fff;
              border-radius: 5px;
              text-align: center;
            }
            .summary-card h2 {
              font-size: 24px;
            }
            .summary-card p {
              margin: 5px 0 0;
              font-size: 18px;
            }
            .dashboard-content {
              margin-left: 250px;
            }
            .charts {
              display: flex;
              gap: 20px;
              min-width: 1200px; /* Ensures the charts container has enough width */
              overflow-x: auto; /* Enable horizontal scrolling */
            }
            .chart {
              flex: 1;
              min-width: 400px; /* Minimum width for each chart */
              padding: 20px;
              background: #f1f3f5;
              border-radius: 5px;
              text-align: center;
            }
            .table-wrapper {
              margin-top: 20px;
              overflow-x: auto; /* Enables horizontal scrolling */
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 20px;
              min-width: 800px; /* Minimum width to trigger horizontal scrolling */
            }
            table th, table td {
              padding: 10px;
              text-align: left;
              border: 1px solid #ddd;
            }
            table th {
              background-color: #007bff;
              color: white;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              font-size: 14px;
              color: #6c757d;
              position: fixed;
              bottom: 0;
              width: 100%;
              padding:1px;
              background-color:white;
              border-top: 1px solid #ddd;
            }
          `}
        </style>
        <header>
          <h1>Harisons Furniture Store Dashboard</h1>
        </header>
        <div className="container">
          {/* Summary Section */}
          <div className="summary">
            <div className="summary-card">
              <h2>$69,700</h2>
              <p>Expected Earnings</p>
            </div>
            <div className="summary-card">
              <h2>1,836</h2>
              <p>Orders This Month</p>
            </div>
            <div className="summary-card">
              <h2>6.3k</h2>
              <p>New Customers</p>
            </div>
          </div>

          {/* Charts Section */}
          <div className="charts">
            <div className="chart">
              <h3>Sales Over Time</h3>
              <Bar data={barData} options={{
                plugins: {
                  tooltip: {
                    callbacks: {
                      label: function(context) {
                        let label = context.dataset.label || '';
                        if (label) {
                          label += ': ';
                        }
                        label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                        return label;
                      }
                    }
                  }
                }
              }} />
            </div>
            <div className="chart">
              <h3>Product Category Distribution</h3>
              <Pie data={pieData} options={{
                plugins: {
                  tooltip: {
                    callbacks: {
                      label: function(context) {
                        let label = context.label || '';
                        if (label) {
                          label += ': ';
                        }
                        label += Math.round((context.parsed / pieData.datasets[0].data.reduce((a, b) => a + b, 0)) * 100) + '%';
                        return label;
                      }
                    }
                  }
                }
              }} />
            </div>
          </div>

          {/* Recent Orders Table */}
          <div className="table-wrapper">
            <h3>Recent Orders</h3>
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Total</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#XGY-346</td>
                  <td>Albert Flores</td>
                  <td>$630.00</td>
                  <td>Pending</td>
                </tr>
                <tr>
                  <td>#YHD-047</td>
                  <td>Jenny Wilson</td>
                  <td>$25.00</td>
                  <td>Confirmed</td>
                </tr>
                <tr>
                  <td>#SRR-678</td>
                  <td>Robert Fox</td>
                  <td>$1,630.00</td>
                  <td>Pending</td>
                </tr>
                <tr>
                  <td>#PXF-534</td>
                  <td>Cody Fisher</td>
                  <td>$119.00</td>
                  <td>Shipped</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="footer">
          <p>&copy; 2025 Harison Furniture. All rights reserved.</p>
        </div>
      </div>
    );
  }
}

export default Dashboard;
