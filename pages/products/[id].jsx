import { useRouter } from "next/router";

const ProductDetail = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Product Detail</h1>
      <p>ID: {router.query.id}</p>
      {/* <p>Filter: {router.query.filter}</p> */}
      {/* <p>{JSON.stringify(router.query)}</p> */}
    </div>
  );
};

export default ProductDetail;
