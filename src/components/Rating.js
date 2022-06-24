import './Rating.css';

const Rating = ({ children }) => {
  let stars = '';
  const roundedNumber = Math.round(parseFloat(children));
  switch (roundedNumber) {
    case 1:
      stars = '★☆☆☆☆';
      break;
    case 2:
      stars = '★★☆☆☆';
      break;
    case 3:
      stars = '★★★☆☆';
      break;
    case 4:
      stars = '★★★★☆';
      break;
    case 5:
      stars = '★★★★★';
      break;
    default:
      stars = '☆☆☆☆☆';
  }

  return (
    <div>
      <p>{children}</p>
      <p>{stars}</p>
    </div>
  );
};

export default Rating;
