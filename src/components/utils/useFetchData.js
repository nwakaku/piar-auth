import { useEffect, useState } from "react";
import UserService from "../services/user.service";

const useFetchData = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = UserService.getUserBoard();
        console.log(response);
      } catch (error) {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setData(resMessage);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    data,
    loading,
  };
};

export default useFetchData;
