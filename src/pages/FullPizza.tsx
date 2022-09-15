import React from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    title: string;
    imageUrl: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://6293ec25089f87a57ac77f49.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("Ошибка при получении пиццы!");
        navigate("/");
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return <div className="container">"Загрузка..."</div>;
  }

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <img
        style={{ maxWidth: "300px" }}
        alt={pizza?.title}
        src={pizza?.imageUrl}
      />
      <h1>{pizza?.title}</h1>
      <h2>{pizza?.price} $</h2>
      <Link
        to="/"
        className="button button--black"
        style={{ marginTop: "40px" }}
      >
        <span>Back</span>
      </Link>
    </div>
  );
};

export default FullPizza;
