import { Pressable, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import StudentService from "../../service/StudentService";
import { db } from "../../config/firebase";

import { styles } from "./styles";

export default function StudentCard({ navigation, name, id, initStudents }) {
  function deleteStudent() {
    StudentService.delete(db, () => {}, id);
    initStudents();
  }

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Ionicons name="person-circle-outline" size={24} color="black" />
        <Text style={styles.info}>{name}</Text>
      </View>
      <View style={styles.actions}>
        <Pressable
          style={styles.editBtn}
          onPress={() => {
            navigation.navigate("UpdateStudents", { id: id });
          }}
        >
          <FontAwesome5 name="user-edit" size={20} color="black" />
        </Pressable>
        <Pressable onPress={deleteStudent}>
          <MaterialIcons name="delete" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
}
