import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

export default class TeacherService {
  static list = (firestoreDb, callback) => {
    getDocs(collection(firestoreDb, "teachers"))
      .then((snapshot) => {
        const teachers = [];
        snapshot.forEach((document) => {
          const id = document.id;
          const { name, course, ira } = document.data();
          teachers.push({ id, name, course, ira });
        });
        callback(teachers);
      })
      .catch((error) => console.log(error));
  };

  static create = (firestoreDb, callback, teacher) => {
    addDoc(collection(firestoreDb, "teachers"), teacher)
      .then((docRef) => {
        callback(docRef.id);
      })
      .catch((error) => console.log(error));
  };

  static getData = (firestoreDb, callback, id) => {
    getDoc(doc(firestoreDb, "teachers", id))
      .then((docSnap) => {
        if (docSnap.exists()) {
          callback(docSnap.data());
        }
      })
      .catch((error) => console.log(error));
  };

  static update = (firestoreDb, callback, id, teacher) => {
    updateDoc(doc(firestoreDb, "teachers", id), teacher)
      .then(() => {
        callback();
      })
      .catch((error) => console.log(error));
  };

  static delete = (firestoreDb, callback, id) => {
    deleteDoc(doc(firestoreDb, "teachers", id))
      .then(() => callback(true))
      .catch((error) => console.log(error));
  };
}
