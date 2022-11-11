import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

export default class StudentService {
  static list = (firestoreDb, callback) => {
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

  static create = (firestoreDb, callback, student) => {
    addDoc(collection(firestoreDb, "students"), student)
      .then((docRef) => {
        callback(docRef.id);
      })
      .catch((error) => console.log(error));
  };

  static getData = (firestoreDb, callback, id) => {
    getDoc(doc(firestoreDb, "students", id))
      .then((docSnap) => {
        if (docSnap.exists()) {
          callback(docSnap.data());
        }
      })
      .catch((error) => console.log(error));
  };

  static update = (firestoreDb, callback, id, student) => {
    updateDoc(doc(firestoreDb, "students", id), student)
      .then(() => {
        callback();
      })
      .catch((error) => console.log(error));
  };

  static delete = (firestoreDb, callback, id) => {
    deleteDoc(doc(firestoreDb, "students", id))
      .then(() => callback(true))
      .catch((error) => console.log(error));
  };
}
