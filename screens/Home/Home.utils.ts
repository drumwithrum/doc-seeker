import React, { useEffect, useState } from 'react';
import { City } from './Home.types';
import axios from 'axios';

export const useApi = (url: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return { isLoading, data };
};
