import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { publicRequest } from "@/shared/api/request";

export const useGetSingleProduct = () => {
  const [product, setproduct] = useState();
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const getProduct = async () => {
    setisLoading(true);
    try {
      // const res = await fetch(`http://localhost:4000/api/v1/product/${id}`);
      // const data = await res.json();

      const { data } = await publicRequest.get(`/product/${id}`);
      setproduct(data);
    } catch (error) {
      setisError(true);
    } finally {
      setisLoading(false);
    }
  };

  const handleDeleteProduct = async () => {
    try {
      const res = await publicRequest.delete(`/product/delete/${id}`);
      console.log(res.data);
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return {
    product,
    isError,
    isLoading,
    handleDeleteProduct,
  };
};
