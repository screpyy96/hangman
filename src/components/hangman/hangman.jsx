import React from 'react';


const Hangman = ({ stage }) => (
  <>
  {/* use images from assets folder  */}
    <img src={require(`../../assets/images/state${stage}.GIF`)} alt={`state${stage}`} />
  </>
);


export default Hangman;