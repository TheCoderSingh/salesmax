import { Box, Button, FormControl, Input } from '@chakra-ui/react';

const CreateSalesOrder = () => (
  <Box className="sales-order-create">
    <h1>Create Sales Order</h1>

    <Box className="sales-order-area">
      <form>
        <Box className="sku-input">
          <FormControl isRequired>
            <Input placeholder="Add item by SKU" />
          </FormControl>
        </Box>
        <Box className="sku-btn">
          <FormControl>
            <Button type="submit">Add</Button>
          </FormControl>
        </Box>
      </form>
    </Box>
  </Box>
);

export default CreateSalesOrder;
