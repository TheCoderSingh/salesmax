import { Box } from '@chakra-ui/react';
import { AiFillDashboard, AiFillProfile, AiFillSave } from 'react-icons/ai';
import {
  BsFillPersonPlusFill,
  BsPeopleFill,
  BsPersonLinesFill
} from 'react-icons/bs';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { GiArchiveResearch } from 'react-icons/gi';
import { MdCreateNewFolder, MdInventory, MdPersonSearch } from 'react-icons/md';

const HomePage = () => (
  <Box className="home">
    <Box className="home-nav">
      <h1 className="greeting">Welcome Jaskaran!</h1>
      <Box className="home-nav-section">
        <Box className="home-nav-item">
          <AiFillDashboard />
          <span>Dashboard</span>
        </Box>
      </Box>

      <h2>Sales</h2>
      <hr />
      <Box className="home-nav-section">
        <Box className="home-nav-item">
          <MdCreateNewFolder />
          <span>Create Sales Order</span>
        </Box>
        <Box className="home-nav-item">
          <GiArchiveResearch />
          <span>Sales Order Lookup</span>
        </Box>
        <Box className="home-nav-item">
          <AiFillProfile />
          <span>Orders</span>
        </Box>
        <Box className="home-nav-item">
          <MdInventory />
          <span>Inventory Lookup</span>
        </Box>
        <Box className="home-nav-item">
          <FaMoneyCheckAlt />
          <span>Commission</span>
        </Box>
        <Box className="home-nav-item">
          <AiFillSave />
          <span>Saved Orders</span>
        </Box>
      </Box>

      <h2>Customer Information</h2>
      <hr />
      <Box className="home-nav-section">
        <Box className="home-nav-item">
          <BsFillPersonPlusFill />
          <span>Add Customer</span>
        </Box>
        <Box className="home-nav-item">
          <MdPersonSearch />
          <span>Customer Lookup</span>
        </Box>
        <Box className="home-nav-item">
          <BsPersonLinesFill />
          <span>Customers</span>
        </Box>
      </Box>

      <h2>Adminstration</h2>
      <hr />
      <Box className="home-nav-section">
        <Box className="home-nav-item">
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
    <Box className="home-content">Content</Box>
  </Box>
);

export default HomePage;
