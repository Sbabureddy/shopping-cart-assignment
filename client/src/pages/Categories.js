import { Layout } from "../layout/category/Layout";

export const Categories = ({
  handleBuy,
  handleDec,
  total,
  cartItems,
  open,
  handleClose,
  handleOpen,
}) => {
  return (
    <>
      <Layout
        handleBuy={handleBuy}
        handleDec={handleDec}
        total={total}
        cartItems={cartItems}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
};
