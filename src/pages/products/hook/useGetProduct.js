import { useEffect, useState } from "react";

export const useGetProduct = () => {
  const [product, setproduct] = useState();
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  async function getAllProduct() {
    setisLoading(true);
    try {
      const res = await fetch("http://localhost:4000/api/v1/product");
      const data = await res.json();
      console.log(data);
      setproduct(data);
    } catch (error) {
      console.log(error);
      setisError(true);
    } finally {
      setisLoading(false);
    }
  }

  useEffect(() => {
    getAllProduct();
  }, []);

  return {
    product,
    isLoading,
    isError,
  };
};
