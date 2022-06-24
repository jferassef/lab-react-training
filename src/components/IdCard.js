const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="card">
      <img src={picture} alt="img"></img>
      <p>First name: {firstName}</p>
      <p>Last name: {lastName}</p>
      <p>gender: {gender}</p>
      <p>height: {height}</p>
      <p>birth: {birth.toUTCString()}</p>
    </div>
  );
};

export default IdCard;
