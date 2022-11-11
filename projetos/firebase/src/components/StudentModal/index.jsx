import React, { useEffect } from "react";
import { Modal, Text, Pressable, View } from "react-native";

import { styles } from "./styles";

export default function StudentModal({
  modalVisible,
  setModalVisible,
  student,
  id,
}) {
  function closeModal() {
    setModalVisible(!modalVisible);
  }

  useEffect(() => {
    console.log(id);
    console.log(student);
  }, []);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Detalhes do Estudante</Text>
            <View style={styles.details}>
              <Text>Nome: Marcelo Santana</Text>
              <Text>Curso: Sistemas de Informação</Text>
              <Text>IRA: 9.5</Text>
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
