import React from 'react';

function useFetchGraph(
  method: string,
  url: string,
  body?: any,
  variables?: any,
  headers?: any
) {
  const [graph, setGraph] = React.useState({});
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState<boolean>(true);

  const fetchGraph = async () => {
    try {
      const res = await fetch(url, {
        method,
        headers: headers
          ? headers
          : {
              'Content-Type': 'application/json',
            },
        body: JSON.stringify({
          query: body,
          variables: variables ? variables : {},
        }),
      });

      const result = await res.json();
      if (result.errors && result.errors.length > 0) {
        setError('Error in query');
        setLoading(false);
      } else {
        setGraph(result);
        setLoading(false);
      }
    } catch (e) {
      setError('Error fetching from graph');
      setLoading(false);
    }
  };

  React.useEffect(() => {
    setLoading(true);
    fetchGraph();
  }, [method, url, body]);

  return { graph, error, loading };
}

export default useFetchGraph;
