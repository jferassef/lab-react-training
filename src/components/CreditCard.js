import creditCard from './creditCard.css';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  return (
    <div className="cardContainer" style={{ backgroundColor: bgColor, color }}>
      <img src={type} alt="icon" />
      <div>
        <p className="cardNumber">{number} </p>
      </div>
      <div className="cardInfo">
        <p>
          Expiration date: {expirationMonth}/{expirationYear}
        </p>
        <p>{bank}</p>
      </div>
      <div>
        <p className=" owner">{owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
