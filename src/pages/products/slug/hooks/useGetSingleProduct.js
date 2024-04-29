import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export const useGetSingleProduct = () => {
  const [product, setproduct] = useState();
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate()

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

  const handleDeleteProduct = async() =>{
    try {
      const res = await axios.delete(`http://localhost:4000/api/v1/product/delete/${id}`)
      console.log(res.data);
      navigate('/products')
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProduct();
  }, [id]);

  return {
    product,
    isError,
    isLoading,handleDeleteProduct
  };
};
