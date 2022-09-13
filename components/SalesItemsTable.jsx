import {
  Box,
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
import { MdDelete, MdInventory2 } from 'react-icons/md';
import { useStateContext } from '../context/StateContext';
import { getSkuIndexInCart } from '../utils/helper';

const SalesItemsTable = () => {
  const { cartItems, setCartItems } = useStateContext();

  const subtotal = cartItems.reduce((acc, obj) => acc + obj.price, 0);

  const removeItem = sku => {
    const index = getSkuIndexInCart(sku, cartItems);

    const newState = [...cartItems];
    newState.splice(index, 1);
    setCartItems(newState);
  };

  return (
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
          {cartItems.map(item => (
            <Tr key={item.id}>
              <Td>
                <Input
                  placeholder="Qty"
                  defaultValue={item.quantity}
                  className="quantity-inp"
                  type="number"
                  min={1}
                  value={item.quantity}
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
                  <Box onClick={() => removeItem(item.sku)}>
                    <Tooltip label="Remove Item">
                      <span>
                        <MdDelete size={25} />
                      </span>
                    </Tooltip>
                  </Box>
                  <Box>
                    <Tooltip label="Check inventory">
                      <span>
                        <MdInventory2 size={25} />
                      </span>
                    </Tooltip>
                  </Box>
                </Box>
              </Td>
            </Tr>
          ))}
          <Tr>
            <Td />
            <Td />
            <Td />
            <Td>Subtotal</Td>
            <Td>${subtotal}</Td>
            <Td />
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default SalesItemsTable;
