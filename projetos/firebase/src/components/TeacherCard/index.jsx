import { Pressable, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import TeacherService from "../../service/TeacherService";

import { styles } from "./styles";
import { db } from "../../config/firebase";

export default function TeacherCard({ navigation, name, id, initTeachers }) {
  function deleteTeacher() {
    TeacherService.delete(db, () => {}, id);
    initTeachers();
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
            navigation.navigate("UpdateTeachers", {
              id: id,
              initTeachers: initTeachers,
            });
          }}
        >
          <FontAwesome5 name="user-edit" size={20} color="black" />
        </Pressable>
        <Pressable onPress={deleteTeacher}>
          <MaterialIcons name="delete" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
}
