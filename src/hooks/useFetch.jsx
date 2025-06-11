import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useFetch({ baseUrl, endpoint = "", query = "" }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const url = `${baseUrl}${endpoint}${query ? `?${query}` : ""}`;
        const { data } = await axios.get(url);
        setData(data);
        setError(null);
      } catch (error) {
        setError(error.message);
        toast.error("خطا در دریافت اطلاعات");
        setData([]);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [baseUrl, endpoint, query]);

  return { data, isLoading, error };
}
