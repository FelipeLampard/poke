import React, { useEffect, useState } from "react";
import Pokecard from "../components/Pokecard";
import { useParams } from "react-router-dom";

const Details = () => {
  const { name } = useParams();
  const [items, setItems] = useState({});

  const url = "https://pokeapi.co/api/v2/pokemon";

  const getItems = async (name) => {
    try {
      const res = await fetch(`${url}/${name}`);
      if (!res.ok) {
        throw new Error("Network no esta respondiendo");
      }
      const data = await res.json();
      const src = data.sprites.other.dream_world.front_default;
      const stats = data.stats.map((stat) => ({
        name: stat.stat.name,
        base: stat.base_stat,
      }));
      const type = data.types.map(({ type }) => type.name).join("");
      setItems({ name, stats, src, type });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getItems(name);
  }, [name]);

  return (
    <>
      <Pokecard pokemon={items} />
    </>
  );
};

export default Details;
