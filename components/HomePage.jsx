import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import { AiFillDashboard, AiFillProfile, AiFillSave } from 'react-icons/ai';
import {
  BsFillPersonPlusFill,
  BsPeopleFill,
  BsPersonLinesFill
} from 'react-icons/bs';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { GiArchiveResearch } from 'react-icons/gi';
import { MdCreateNewFolder, MdInventory, MdPersonSearch } from 'react-icons/md';
import Dashboard from './Dashboard';
import CreateSalesOrder from './CreateSalesOrder';
import SalesOrderLookup from './SalesOrderLookup';
import Orders from './Orders';
import InventoryLookup from './InventoryLookup';
import Commission from './Commission';
import SavedOrders from './SavedOrders';
import AddCustomer from './AddCustomer';
import CustomerLookup from './CustomerLookup';
import Customers from './Customers';
import Salespersons from './Salespersons';

// import {
//   Dashboard,
//   CreateSalesOrder,
//   SalesOrderLookup,
//   Orders,
//   InventoryLookup,
//   Commission,
//   SavedOrders,
//   AddCustomer,
//   CustomerLookup,
//   Customers,
//   Salespersons
// } from '.';

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <Box className="home">
      <Box className="home-nav">
        <h1 className="greeting">Welcome Jaskaran!</h1>
        <Box className="home-nav-section">
          <Box
            className="home-nav-item"
            onClick={() => setCurrentPage('dashboard')}
          >
            <AiFillDashboard />
            <span>Dashboard</span>
          </Box>
        </Box>

        <h2>Sales</h2>
        <hr />
        <Box className="home-nav-section">
          <Box
            className="home-nav-item"
            onClick={() => setCurrentPage('createsalesorder')}
          >
            <MdCreateNewFolder />
            <span>Create Sales Order</span>
          </Box>
          <Box
            className="home-nav-item"
            onClick={() => setCurrentPage('salesorderlookup')}
          >
            <GiArchiveResearch />
            <span>Sales Order Lookup</span>
          </Box>
          <Box
            className="home-nav-item"
            onClick={() => setCurrentPage('orders')}
          >
            <AiFillProfile />
            <span>Orders</span>
          </Box>
          <Box
            className="home-nav-item"
            onClick={() => setCurrentPage('inventorylookup')}
          >
            <MdInventory />
            <span>Inventory Lookup</span>
          </Box>
          <Box
            className="home-nav-item"
            onClick={() => setCurrentPage('commission')}
          >
            <FaMoneyCheckAlt />
            <span>Commission</span>
          </Box>
          <Box
            className="home-nav-item"
            onClick={() => setCurrentPage('savedorders')}
          >
            <AiFillSave />
            <span>Saved Orders</span>
          </Box>
        </Box>

        <h2>Customer Information</h2>
        <hr />
        <Box className="home-nav-section">
          <Box
            className="home-nav-item"
            onClick={() => setCurrentPage('addcustomer')}
          >
            <BsFillPersonPlusFill />
            <span>Add Customer</span>
          </Box>
          <Box
            className="home-nav-item"
            onClick={() => setCurrentPage('customerlookup')}
          >
            <MdPersonSearch />
            <span>Customer Lookup</span>
          </Box>
          <Box
            className="home-nav-item"
            onClick={() => setCurrentPage('customers')}
          >
            <BsPersonLinesFill />
            <span>Customers</span>
          </Box>
        </Box>

        <h2>Adminstration</h2>
        <hr />
        <Box className="home-nav-section">
          <Box
            className="home-nav-item"
            onClick={() => setCurrentPage('salespersons')}
          >
            <BsPeopleFill />
            <span>Salespersons</span>
          </Box>
        </Box>

        <Box className="dashboard-nav-section logout">
          <Box className="dashboard-nav-item">
            <span>Logout</span>
          </Box>
        </Box>
      </Box>

      <Box className="home-content">
        {currentPage === 'dashboard' ? <Dashboard /> : null}
        {currentPage === 'createsalesorder' ? <CreateSalesOrder /> : null}
        {currentPage === 'salesorderlookup' ? <SalesOrderLookup /> : null}
        {currentPage === 'orders' ? <Orders /> : null}
        {currentPage === 'inventorylookup' ? <InventoryLookup /> : null}
        {currentPage === 'commission' ? <Commission /> : null}
        {currentPage === 'savedorders' ? <SavedOrders /> : null}
        {currentPage === 'addcustomer' ? <AddCustomer /> : null}
        {currentPage === 'customerlookup' ? <CustomerLookup /> : null}
        {currentPage === 'customers' ? <Customers /> : null}
        {currentPage === 'salespersons' ? <Salespersons /> : null}
      </Box>
    </Box>
  );
};

export default HomePage;
