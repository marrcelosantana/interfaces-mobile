import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./pages/HomePage";
import ListStudents from "./pages/ListStudents";
import ListTeachers from "./pages/ListTeachers";
import RegisterStudents from "./pages/RegisterStudents";
import RegisterTeachers from "./pages/RegisterTeachers";
import StudentDetails from "./pages/StudentDetails";
import UpdateStudents from "./pages/UpdateStudents";
import UpdateTeachers from "./pages/UpdateTeachers";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{ title: "Início 🏠" }}
      />
      <Stack.Screen
        name="RegisterStudents"
        component={RegisterStudents}
        options={{ title: "Cadastrar Estudantes 👨‍🎓" }}
      />

      <Stack.Screen
        name="RegisterTeachers"
        component={RegisterTeachers}
        options={{ title: "Cadastrar Professores 👨‍🏫" }}
      />

      <Stack.Screen
        name="ListStudents"
        component={ListStudents}
        options={{ title: "Estudantes 👨‍🎓" }}
      />

      <Stack.Screen
        name="ListTeachers"
        component={ListTeachers}
        options={{ title: "Professores 👨‍🏫" }}
      />

      <Stack.Screen
        name="UpdateStudents"
        component={UpdateStudents}
        options={{ title: "Atualizar Estudante 👨‍🎓" }}
      />

      <Stack.Screen
        name="UpdateTeachers"
        component={UpdateTeachers}
        options={{ title: "Atualizar Professor 👨‍🏫" }}
      />

      <Stack.Screen
        name="StudentDetails"
        component={StudentDetails}
        options={{ title: "Detalhes 👨‍🎓" }}
      />
    </Stack.Navigator>
  );
}
