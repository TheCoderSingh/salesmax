import { Box, Button, FormControl, Input } from '@chakra-ui/react';
import Image from 'next/image';
import sales from '../assets/sales.jpg';

const login = () => (
  <Box className="login">
    <Box className="login-left">
      <Box className="login-form">
        <h1>Login to SalesMax</h1>
        <form>
          <FormControl isRequired>
            <Input placeholder="Username" />
          </FormControl>
          <FormControl isRequired>
            <Input placeholder="Password" type="password" />
          </FormControl>
          <FormControl>
            <Button type="submit">Login</Button>
          </FormControl>
        </form>
      </Box>
    </Box>
    <Box className="login-right">
      <Image src={sales} alt="Sales" />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.freepik.com/free-vector/demand-analysts-shaking-hands-from-laptops-screens-planning-future-demand-demand-planning-demand-analytics-digital-sales-forecast-concept-illustration_11668571.htm#query=sales&position=1&from_view=search"
      >
        Image by vectorjuice on Freepik
      </a>
    </Box>
  </Box>
);

export default login;
