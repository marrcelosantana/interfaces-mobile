import React, { useState } from "react";
import { Button, Text, View } from "react-native";

import { styles } from "./styles";

export function Vote() {
  const [quixada, setQuixada] = useState(0);
  const [fortaleza, setFortaleza] = useState(0);
  const [juazeiro, setJuazeiro] = useState(0);
  const [winner, setWinner] = useState("");

  function voteQuixada() {
    setQuixada(quixada + 1);
  }

  function voteFortaleza() {
    setFortaleza(fortaleza + 1);
  }

  function voteJuazeiro() {
    setJuazeiro(juazeiro + 1);
  }

  function clear() {
    setQuixada(0);
    setFortaleza(0);
    setJuazeiro(0);
  }

  function finish() {
    if (quixada > fortaleza && quixada > juazeiro) {
      setWinner("Quixadá");
    }

    if (fortaleza > quixada && fortaleza > juazeiro) {
      setWinner("Fortaleza");
    }

    if (juazeiro > quixada && juazeiro > fortaleza) {
      setWinner("Juazeiro");
    }
    clear();
  }

  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        <View style={styles.cityContainer}>
          <Text style={styles.city}>Quixadá</Text>
          <Text style={styles.counter}>{quixada}</Text>
          <Button title="Votar" onPress={voteQuixada} />
        </View>
        <View style={styles.cityContainer}>
          <Text style={styles.city}>Fortaleza</Text>
          <Text style={styles.counter}>{fortaleza}</Text>
          <Button title="Votar" onPress={voteFortaleza} />
        </View>
        <View style={styles.cityContainer}>
          <Text style={styles.city}>Juazeiro</Text>
          <Text style={styles.counter}>{juazeiro}</Text>
          <Button title="Votar" onPress={voteJuazeiro} />
        </View>
      </View>
      <View style={styles.winnerContainer}>
        <Button title="Finalizar" onPress={finish} />
        {winner !== "" && (
          <View style={styles.winner}>
            <Text style={styles.winnerName}>O vencedor é: {winner}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

export default Vote;
