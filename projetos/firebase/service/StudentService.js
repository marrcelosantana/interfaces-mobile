import { collection, getDocs } from "firebase/firestore";

export default class StudentService {
  static getStudents = (firestoreDb, callback) => {
    getDocs(collection(firestoreDb, "students"))
      .then((snapshot) => {
        const students = [];
        snapshot.forEach((document) => {
          const id = document.id;
          const { name, course, ira } = document.data();
          students.push({ id, name, course, ira });
        });
        callback(students);
      })
      .catch((error) => console.log(error));
  };
}
