import { View } from "react-native";
import Header from "../../components/Header";
import { Vote } from "../../components/Vote";

import { styles } from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Vote />
      </View>
    </View>
  );
}
