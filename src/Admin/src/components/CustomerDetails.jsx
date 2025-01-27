import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 30px auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-left:19%;
  margin-top:4%;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const SearchBar = styled.input`
  width: 300px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const CustomerTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  padding: 12px 15px;
  border: 1px solid #ddd;
  text-align: left;
  background-color: #f4f7fc;
  font-weight: bold;
`;

const TableCell = styled.td`
  padding: 12px 15px;
  border: 1px solid #ddd;
  text-align: left;
`;

const StatusActive = styled.span`
  color: #28a745;
  font-weight: bold;
`;

const StatusLocked = styled.span`
  color: #dc3545;
  font-weight: bold;
`;

const Pagination = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
`;

const PageLink = styled.a`
  margin: 0 5px;
  text-decoration: none;
  padding: 8px 12px;
  border: 1px solid #ddd;
  color: #007bff;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }

  &.active {
    background-color: #007bff;
    color: white;
  }
`;

const Footer = styled.footer`
  text-align: center;
  font-size: 14px;
  color: #777;
  margin-top: 30px;
`;

const TransactionHistory = styled.div`
  margin-top: 30px;
`;

const TransactionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 15px;
  color: #333;
`;

const TransactionDescription = styled.p`
  font-size: 16px;
  color: #555;
`;

const CustomerDetails = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const customersPerPage = 10;

  const customers = [
    { name: "Emma Smith", email: "smith@kpmg.com", status: "Locked", ipAddress: "147.73.20.116", createdDate: "19 Aug 2025, 6:05 pm" },
    { name: "Melody Macy", email: "melody@altbox.com", status: "Active", ipAddress: "185.73.42.228", createdDate: "25 Oct 2025, 6:05 pm" },
    { name: "Max Smith", email: "max@kt.com", status: "Locked", ipAddress: "127.76.42.203", createdDate: "19 Aug 2025, 11:30 am" },
    // Add more customers as needed
  ];

  // Filter customers based on search term
  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = filteredCustomers.slice(indexOfFirstCustomer, indexOfLastCustomer);

  const totalPages = Math.ceil(filteredCustomers.length / customersPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container>
      <Title>Customer Details</Title>

      {/* Search Bar */}
      <SearchContainer>
        <SearchBar
          type="text"
          placeholder="Search Customers"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchContainer>

      {/* Customer Table */}
      <CustomerTable>
        <thead>
          <tr>
            <TableHeader>Customer Name</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>IP Address</TableHeader>
            <TableHeader>Created Date</TableHeader>
          </tr>
        </thead>
        <tbody>
          {currentCustomers.length > 0 ? (
            currentCustomers.map((customer, index) => (
              <tr key={index}>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>
                  {customer.status === "Active" ? (
                    <StatusActive>{customer.status}</StatusActive>
                  ) : (
                    <StatusLocked>{customer.status}</StatusLocked>
                  )}
                </TableCell>
                <TableCell>{customer.ipAddress}</TableCell>
                <TableCell>{customer.createdDate}</TableCell>
              </tr>
            ))
          ) : (
            <tr>
              <TableCell colSpan="5">No customers found</TableCell>
            </tr>
          )}
        </tbody>
      </CustomerTable>

      {/* Pagination */}
      <Pagination>
        <PageLink href="#" onClick={() => handlePageChange(currentPage - 1)}>
          &laquo;
        </PageLink>
        {[...Array(totalPages)].map((_, index) => (
          <PageLink
            key={index}
            href="#"
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </PageLink>
        ))}
        <PageLink href="#" onClick={() => handlePageChange(currentPage + 1)}>
          &raquo;
        </PageLink>
      </Pagination>

      {/* Transaction History */}
      <TransactionHistory>
        <TransactionTitle>Transaction History</TransactionTitle>
        <TransactionDescription>Select a customer to view detailed transaction history.</TransactionDescription>
      </TransactionHistory>

      {/* Footer */}
      <Footer>
        <p>&copy; 2025 Harison Furniture. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
      </Footer>
    </Container>
  );
};

export default CustomerDetails;