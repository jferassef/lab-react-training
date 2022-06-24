const Random = ({ min, max }) => {
  const randomValue = Math.floor(Math.random() * (max - min)) + min;
  return (
    <div>
      <p>
        {' '}
        Random value between {min} and {max} is {randomValue}
      </p>
    </div>
  );
};

export default Random;
