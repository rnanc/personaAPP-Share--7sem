import { Formik, setIn } from 'formik';
import {View , Text, TextInput, Button, Alert, Modal, StyleSheet, Pressable} from 'react-native'
import Checkbox from 'expo-checkbox';
import * as Print from 'expo-print'
import * as MediaLibrary from "expo-media-library";
import * as Sharing from 'expo-sharing'
import { useState } from 'react';
import IStep from './IStep';
import { States } from './App';

export default function Step4({ info }: IStep) {
  const [toggleComunicativo, setToggleComunicativo] = useState(false)
  const [toggleCriativo, setToggleCriativo] = useState(false)
  const [toggleLiderança, setToggleLiderança] = useState(false)

  const [modalVisible, setModalVisible] = useState(false)
  const [infoStates, setInfo] = useState({} as States)

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pdf Content</title>
        <style>
            body {
                font-size: 16px;
                color: rgb(255, 196, 0);
            }            h1 {
                text-align: center;
            }
        </style>
    </head>
    <body>
        <h1>nome: ${infoStates.name}</h1>
        <h1>avatar: ${infoStates.avatar}</h1>
        <h1>email: ${infoStates.email}</h1>
        <h1>escolaridade: ${infoStates.escolaridade}</h1>
        <h1>setor: ${infoStates.setor}</h1>
        <h1>sexo: ${infoStates.sexo}</h1>
        <h1>telefone: ${infoStates.telefone}}</h1>
        <h1>titulo: ${infoStates.titulo}</h1>
        <h1>idade: {infoStates.idade}</h1>
        <h1>habilidades: ${infoStates?.habilidades?.toString()}</h1>
    </body>
    </html>
  `;

  const createPDF = async (html: any) => {
    try {
        const { uri } = await Print.printToFileAsync({ html });
        const permission = await MediaLibrary.requestPermissionsAsync();      if (permission.granted) {
          await MediaLibrary.createAssetAsync(uri);
        }
    } catch (err) {
        console.error(err);
    }
  };
  const printPDF = async (html: any) => {
    try {
        const { uri } = await Print.printToFileAsync({ html });
        const permission = await MediaLibrary.requestPermissionsAsync();      if (permission.granted) {
          await Sharing.shareAsync(uri);
        }
    } catch (err) {
        console.error(err);
    }
  };

  return(
    <View>
      <Text>
        { "Step 4" }
      </Text>
      <Formik
        initialValues={{ habilidade: [] as string[] }}
        onSubmit={values => {setModalVisible(!modalVisible);
                             setInfo({ habilidades: values.habilidade,...info()});
        }}
        >
          {(props) => (
          <>
            <Text>Comunicativo</Text>
            <Checkbox
              value={toggleComunicativo}
              onValueChange={value =>{ setToggleComunicativo(value);
                                     value ? props.values.habilidade.push('Comunicativo') :
                                      props.values.habilidade = props.values.habilidade.filter(comunicativo => comunicativo != 'Comunicativo')}}
              color={toggleComunicativo ? '#4630EB' : undefined}
            />
            <Text>Criativo</Text>
            <Checkbox
              value={toggleCriativo}
              onValueChange={value =>{ setToggleCriativo(value); value ? props.values.habilidade.push('Criativo') : props.values.habilidade = props.values.habilidade.filter(criativo => criativo != 'Criativo')}}
              color={toggleCriativo ? '#4630EB' : undefined}
            />
            <Text>Liderança </Text>
            <Checkbox
              value={toggleLiderança}
              onValueChange={value =>{ setToggleLiderança(value); value ? props.values.habilidade.push('Liderança') : props.values.habilidade = props.values.habilidade.filter(liderança => liderança != 'Liderança')}}
              color={toggleLiderança ? '#4630EB' : undefined}
            />
            
            <Button
              title='Submit Form'
              onPress={props.submitForm}
            />
            </>
          )}
      </Formik>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>nome: {infoStates.name}</Text>
            <Text style={styles.modalText}>avatar: {infoStates.avatar}</Text>
            <Text style={styles.modalText}>email: {infoStates.email}</Text>
            <Text style={styles.modalText}>escolaridade: {infoStates.escolaridade}</Text>
            <Text style={styles.modalText}>habilidades: {infoStates?.habilidades?.toString()}</Text>
            <Text style={styles.modalText}>idade: {infoStates.idade}</Text>
            <Text style={styles.modalText}>setor: {infoStates.setor}</Text>
            <Text style={styles.modalText}>sexo: {infoStates.sexo}</Text>
            <Text style={styles.modalText}>telefone: {infoStates.telefone}</Text>
            <Text style={styles.modalText}>titulo: {infoStates.titulo}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => createPDF(htmlContent)}
            >
              <Text style={styles.textStyle}>Export PDF</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => printPDF(htmlContent)}
            >
              <Text style={styles.textStyle}>Share PDF</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});