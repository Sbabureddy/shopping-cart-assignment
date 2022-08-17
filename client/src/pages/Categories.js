import { Layout } from "../layout/category/Layout";

const Categories = ({
  handleBuy,
  handleDec,
  total,
  cartItems,
  open,
  handleClose,
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

export default Categories;
