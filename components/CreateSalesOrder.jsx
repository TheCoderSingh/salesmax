import {
  Box,
  Button,
  FormControl,
  Image,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tooltip,
  Tr
} from '@chakra-ui/react';
import { useState } from 'react';
import { MdDelete, MdInventory2 } from 'react-icons/md';

const CreateSalesOrder = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      sku: '25551645',
      name: 'Carson Dining Set',
      category: 'Dining',
      price: 999,
      inventory: 4,
      imageUrl:
        'https://cdn.shopify.com/s/files/1/2660/5106/products/iif2qfxz8blus4u6jndk_1400x.jpg?v=1569295614'
    },
    {
      id: 2,
      sku: '25551035',
      name: 'Boyd Dining Set',
      category: 'Dining',
      price: 899,
      inventory: 2,
      imageUrl:
        'https://cdn.shopify.com/s/files/1/2660/5106/products/z4vgldhyidbro8mz8tac_1400x.jpg?v=1569295613'
    }
  ]);
  const [currentSku, setCurrentSku] = useState();

  const handleChange = e => {
    setCurrentSku(e.target.value);
  };

  const handleClick = e => {
    e.preventDefault();

    for (let i = 0; i < items.length; i++) {
      if (items[i].sku === currentSku) {
        console.log('Matched...');
      }
    }
  };

  return (
    <Box className="sales-order-create">
      <h1>Create Sales Order</h1>

      <Box className="sales-order-area">
        <form>
          <Box className="sku-input">
            <FormControl isRequired>
              <Input placeholder="Add item by SKU" onChange={handleChange} />
            </FormControl>
          </Box>
          <Box className="sku-btn">
            <FormControl>
              <Button type="submit" onClick={handleClick}>
                Add
              </Button>
            </FormControl>
          </Box>
        </form>

        <TableContainer className="sales-items-table">
          <Table>
            <Thead>
              <Tr>
                <Th>Quantity</Th>
                <Th>Image</Th>
                <Th>SKU</Th>
                <Th>Item</Th>
                <Th>Price</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {items.map(item => (
                <Tr key={item.id}>
                  <Td>
                    <Input
                      placeholder="Qty"
                      defaultValue="1"
                      className="quantity-inp"
                      type="number"
                    />
                  </Td>
                  <Td>
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      className="sales-item-img"
                    />
                  </Td>
                  <Td>{item.sku}</Td>
                  <Td>{item.name}</Td>
                  <Td>${item.price}</Td>
                  <Td>
                    <Box className="sales-item-actions">
                      <Tooltip label="Remove Item">
                        <span>
                          <MdDelete size={25} />
                        </span>
                      </Tooltip>
                      <Tooltip label="Check inventory">
                        <span>
                          <MdInventory2 size={25} />
                        </span>
                      </Tooltip>
                    </Box>
                  </Td>
                </Tr>
              ))}
              <Tr>
                <Td />
                <Td />
                <Td />
                <Td>Subtotal</Td>
                <Td>$1898</Td>
                <Td />
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default CreateSalesOrder;
