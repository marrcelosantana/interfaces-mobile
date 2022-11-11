import { useEffect, useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-web";
import StudentCard from "../../components/StudentCard";
import StudentService from "../../service/StudentService";
import { Ionicons } from "@expo/vector-icons";
import { db } from "../../config/firebase";

import { styles } from "./styles";
import StudentModal from "../../components/StudentModal";

export default function ListStudents({ navigation }) {
  const [students, setStudents] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function initStudents() {
    StudentService.list(db, (students) => {
      setStudents(students);
    });
  }

  useEffect(() => {
    initStudents();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.content}>
        <FlatList
          data={students}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <StudentCard
                name={item.name}
                id={item.id}
                initStudents={initStudents}
                navigation={navigation}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("RegisterStudents", {
                initStudents: initStudents,
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
        <StudentModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </SafeAreaView>
    </View>
  );
}
