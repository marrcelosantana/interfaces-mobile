import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./pages/HomePage";
import ListStudents from "./pages/ListStudents";
import ListTeachers from "./pages/ListTeachers";
import RegisterStudents from "./pages/RegisterStudents";
import RegisterTeachers from "./pages/RegisterTeachers";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ListStudents"
        component={ListStudents}
        options={{ title: "Students 👨‍🎓" }}
      />
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{ title: "Home Page 🏠" }}
      />
      <Stack.Screen
        name="RegisterStudents"
        component={RegisterStudents}
        options={{ title: "Register Students 👨‍🎓" }}
      />

      <Stack.Screen
        name="RegisterTeachers"
        component={RegisterTeachers}
        options={{ title: "Register Teachers 👨‍🏫" }}
      />

      <Stack.Screen
        name="ListTeachers"
        component={ListTeachers}
        options={{ title: "Teachers 👨‍🏫" }}
      />
    </Stack.Navigator>
  );
}
