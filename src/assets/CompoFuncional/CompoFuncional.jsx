import BtnCount from "./BtnCount";


function UserCard({ name, weight, due, price, btnbuy}) {


  return (
    <div className="card">
      <img
        src="https://images.jumpseller.com/store/serviceshop/11948453/1625773346549.png?1635772590"
        className="img-card"
      ></img>
      <div className="card-body" width='200px'>
        <p>Meat: {name} </p>
        <p>weight: {weight + " Grs"}</p>
        <p>Due Date: {due}</p>
        <p>Price: {price + " $"}</p>
        < BtnCount />
      </div>
    </div>
  );
}

export default UserCard;
