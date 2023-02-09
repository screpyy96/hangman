import { useState, useEffect } from 'react';
import dictionary from '../../assets/dictionary.txt';

const useWords = () => {
  const [words, setWords] = useState([]);

  // fetch dictionary.txt
  useEffect(() => {
    fetch(dictionary)
      .then((response) => response.text())
      .then((text) => {
        setWords(text.split('\n'));
      });
  }, []);

  return words;
};

export default useWords;