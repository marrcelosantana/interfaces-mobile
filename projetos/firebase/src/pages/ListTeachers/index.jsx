import { useEffect, useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-web";
import { Ionicons } from "@expo/vector-icons";
import TeacherService from "../../service/TeacherService";
import TeacherCard from "../../components/TeacherCard";
import { db } from "../../config/firebase";

import { styles } from "./styles";

export default function ListTeachers({ navigation }) {
  const [teachers, setTeachers] = useState([]);

  function initTeachers() {
    TeacherService.list(db, (teachers) => {
      setTeachers(teachers);
    });
  }

  useEffect(() => {
    initTeachers();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.content}>
        <FlatList
          data={teachers}
          renderItem={({ item }) => (
            <TeacherCard
              name={item.name}
              id={item.id}
              initTeachers={initTeachers}
              navigation={navigation}
            />
          )}
          keyExtractor={(item) => item.id}
        />
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("RegisterTeachers", {
                initTeachers: initTeachers,
              });
            }}
          >
            <Text style={styles.buttonText}>CADASTRAR</Text>
            <Ionicons
              name="md-person-add-sharp"
              size={18}
              color="white"
              style={{ marginLeft: 5 }}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}
