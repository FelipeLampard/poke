import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

const Pokecard = ({ pokemon }) => {
  const { name, stats, src, types } = pokemon;
  const navigate = useNavigate();

  const touchClick = () => {
    navigate(`/pokemons`);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Card style={{ width: "25rem" }}>
          <Card.Img variant="top" src={src} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <span>
              <Card.Text>
                {stats?.map((stat, i) => (
                  <li key={i}>
                    {stat.name}: {stat.base}
                  </li>
                ))}
              </Card.Text>
            </span>
            <Card.Text>{types}</Card.Text>
          </Card.Body>
        </Card>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          
          onClick={touchClick}
        >
          Back
        </Button>
      </div>
    </>
  );
};

export default Pokecard;
