import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  //   console.log(params.id);

  return <div>this is single product {id} </div>;
};

export default SingleProduct;
