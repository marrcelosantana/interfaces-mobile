import { Pressable, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";

export default function StudentCard({ name }) {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Ionicons name="person-circle-outline" size={24} color="black" />
        <Text style={styles.info}>{name}</Text>
      </View>
      <View style={styles.actions}>
        <Pressable>
          <MaterialIcons name="delete" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
}
