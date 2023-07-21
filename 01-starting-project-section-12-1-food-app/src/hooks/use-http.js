import { useCallback, useState } from "react";

const useHttp = () => {
  // state
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // fns

  // we will wrap this in a callback to not have to recreate on each component rendering
  const sendRequest = useCallback(async (requestConfig, applyDataFn = null) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      // parse response
      const data = await response.json();

      if (applyDataFn) {
        applyDataFn(data);
      }
    } catch (e) {
      setError(e.message || "Something went wrong");
    }
    setIsLoading(false);
  }, []); // no dependencies here

  return {
    isLoading: isLoading,
    error: error,
    sendRequest: sendRequest,
  };
};

export default useHttp;
