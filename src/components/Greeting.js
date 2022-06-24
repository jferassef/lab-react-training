import { useState } from 'react';

const Greeting = ({ lang, children }) => {
  let languageGreet = '';
  switch (lang) {
    case 'de':
      languageGreet = 'Hallo';
      break;
    case 'es':
      languageGreet = 'Hola';
      break;
    case 'en':
      languageGreet = 'Hello';
      break;
    case 'fr':
      languageGreet = 'Bonjour';
      break;
    default:
  }
  return (
    <div>
      {' '}
      <p>{languageGreet + ' ' + children}</p>;
    </div>
  );
};

export default Greeting;
