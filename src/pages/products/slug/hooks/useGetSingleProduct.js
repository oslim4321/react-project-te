import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useGetSingleProduct = () => {
  const [product, setproduct] = useState();
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const { id } = useParams();

  const getProduct = async () => {
    setisLoading(true);
    try {
      const res = await fetch(`http://localhost:4000/api/v1/product/${id}`);
      const data = await res.json();
      setproduct(data);
    } catch (error) {
      setisError(true);
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return {
    product,
    isError,
    isLoading,
  };
};
