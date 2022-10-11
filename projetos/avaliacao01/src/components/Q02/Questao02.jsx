import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

export default function Questao02() {
  const [firstNumber, setFirstNumber] = useState(null);
  const [lastNumber, setLastNumber] = useState(null);
  const [result, setResult] = useState(null);

  function add() {
    setResult(Number(firstNumber) + Number(lastNumber));
    setFirstNumber(null);
    setLastNumber(null);
  }

  function subtract() {
    setResult(Number(firstNumber) - Number(lastNumber));
    setFirstNumber(null);
    setLastNumber(null);
  }

  function multiply() {
    setResult(Number(firstNumber) * Number(lastNumber));
    setFirstNumber(null);
    setLastNumber(null);
  }

  function divide() {
    setResult(Number(firstNumber) / Number(lastNumber));
    setFirstNumber(null);
    setLastNumber(null);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Questão 02 - Calculadora</Text>
      <View style={styles.inputs}>
        <TextInput
          placeholder="Digite o primeiro número..."
          style={styles.input}
          onChangeText={(firstNumber) => setFirstNumber(firstNumber)}
          value={firstNumber}
        />
        <TextInput
          placeholder="Digite o segundo número..."
          style={styles.input}
          onChangeText={(lastNumber) => setLastNumber(lastNumber)}
          value={lastNumber}
        />
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={add}
          disabled={firstNumber === null || lastNumber === null}
        >
          <Text>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={subtract}
          disabled={firstNumber === null || lastNumber === null}
        >
          <Text>-</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={multiply}
          disabled={firstNumber === null || lastNumber === null}
        >
          <Text>*</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={divide}
          disabled={firstNumber === null || lastNumber === null}
        >
          <Text>/</Text>
        </TouchableOpacity>
      </View>

      {result !== null && (
        <Text style={styles.result}>O resultado é: {result}!!</Text>
      )}
    </View>
  );
}
