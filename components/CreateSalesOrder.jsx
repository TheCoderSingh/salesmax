import { Box, Button, FormControl, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { ImCross } from 'react-icons/im';
import { useStateContext } from '../context/StateContext';
import {
  getItemBySku,
  getSkuIndexInCart,
  isSkuInCart,
  isSkuValid
} from '../utils/helper';
import SalesItemsTable from './SalesItemsTable';

const CreateSalesOrder = () => {
  const [currentSku, setCurrentSku] = useState();
  const [skuValid, setSkuValid] = useState(true);

  const { cartItems, setCartItems } = useStateContext();

  const handleClick = e => {
    e.preventDefault();

    if (isSkuValid(currentSku)) {
      setSkuValid(true);

      if (isSkuInCart(currentSku, cartItems)) {
        const skuIndex = getSkuIndexInCart(currentSku, cartItems);

        const newState = [...cartItems];
        newState[skuIndex].quantity++;
        setCartItems(newState);
      } else {
        const item = getItemBySku(currentSku);
        setCartItems(prevCartItems => [...prevCartItems, item]);
      }
    } else setSkuValid(false);
  };

  return (
    <Box className="sales-order-create">
      <h1>Create Sales Order</h1>

      <Box className="sales-order-area">
        <form>
          <Box className="sku-input">
            <FormControl isRequired>
              <Input
                placeholder="Add item by SKU"
                onChange={e => setCurrentSku(e.target.value)}
              />
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

        {!skuValid ? (
          <Box className="invalid-sku">
            <ImCross color="#fff" />
            <p>SKU is invalid</p>
          </Box>
        ) : null}

        <SalesItemsTable />
      </Box>
    </Box>
  );
};

export default CreateSalesOrder;
