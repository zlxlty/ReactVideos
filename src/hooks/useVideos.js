/*
 * @Author: Tianyi Lu
 * @Description: 
 * @Date: 2021-07-31 19:44:29
 * @LastEditors: Tianyi Lu
 * @LastEditTime: 2021-07-31 19:53:30
 */

import { useEffect, useState } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
