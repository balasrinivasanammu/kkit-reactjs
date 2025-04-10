import React, { useEffect, useState } from 'react';

const RandomQuote = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch quote');
        return res.json();
      })
      .then(data => {
        setQuote(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <blockquote>
      "{quote.content}" — {quote.author}
    </blockquote>
  );
};

export default RandomQuote;
