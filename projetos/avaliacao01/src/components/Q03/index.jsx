import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import PokeCard from "./PokeCard";

import { styles } from "./styles";

export default function Questao03() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonPerPage, setPokemonPerPage] = useState(10);
  const [currentPage] = useState(0);

  useEffect(() => {
    fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${pokemonPerPage}&offset=${currentPage}`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        setPokemons(responseJson.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pokemonPerPage, currentPage]);

  function morePokemons() {
    setPokemonPerPage(pokemonPerPage + 10);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Questão 03 - Lista de Pokémons</Text>
      <View style={styles.list}>
        {pokemons.map((pokemon) => (
          <PokeCard key={pokemon.url} name={pokemon.name} />
        ))}
      </View>
      <Button title="Carregar Pokemons" onPress={morePokemons} />
    </View>
  );
}
