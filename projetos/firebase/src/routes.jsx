import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./pages/HomePage";
import ListStudents from "./pages/ListStudents";
import ListTeachers from "./pages/ListTeachers";
import RegisterStudents from "./pages/RegisterStudents";
import RegisterTeachers from "./pages/RegisterTeachers";
import StudentDetails from "./pages/StudentDetails";
import TeacherDetails from "./pages/TeacherDetails";
import UpdateStudents from "./pages/UpdateStudents";
import UpdateTeachers from "./pages/UpdateTeachers";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{ title: "InΓ­cio π " }}
      />
      <Stack.Screen
        name="RegisterStudents"
        component={RegisterStudents}
        options={{ title: "Cadastrar Estudantes π¨βπ" }}
      />

      <Stack.Screen
        name="RegisterTeachers"
        component={RegisterTeachers}
        options={{ title: "Cadastrar Professores π¨βπ«" }}
      />

      <Stack.Screen
        name="ListStudents"
        component={ListStudents}
        options={{ title: "Estudantes π¨βπ" }}
      />

      <Stack.Screen
        name="ListTeachers"
        component={ListTeachers}
        options={{ title: "Professores π¨βπ«" }}
      />

      <Stack.Screen
        name="UpdateStudents"
        component={UpdateStudents}
        options={{ title: "Atualizar Estudante π¨βπ" }}
      />

      <Stack.Screen
        name="UpdateTeachers"
        component={UpdateTeachers}
        options={{ title: "Atualizar Professor π¨βπ«" }}
      />

      <Stack.Screen
        name="StudentDetails"
        component={StudentDetails}
        options={{ title: "Detalhes π¨βπ" }}
      />

      <Stack.Screen
        name="TeacherDetails"
        component={TeacherDetails}
        options={{ title: "Detalhes π¨βπ«" }}
      />
    </Stack.Navigator>
  );
}
