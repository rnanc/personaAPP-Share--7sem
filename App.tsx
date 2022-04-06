import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import { useState } from 'react';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import { Form } from 'formik';

const labels = ["Identificação","Dados Pessoais","Posicionamento","Habilidade"];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#0000ff',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#0000ff',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#0000ff',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#0000ff',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#0000ff',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#0000ff'
}

const FORMS = [
  {component: Step1},
  {component: Step2},
  {component: Step3},
  {component: Step4},
]

export interface States {
  name: string
  avatar: string
  idade: string
  sexo: string
  escolaridade: string
  telefone: string
  email: string
  setor: string
  titulo: string
  habilidades: string[]
}

export default function App() {
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [states, setStates] = useState({} as States)

  function StepForm(){
    const Form = FORMS[currentStep].component
  
    return (
      <>
        <Form nextStep={nextStep} info={info}/>
      </>
    )
  }

  const nextStep = (newStates: States) => {
    setStates({...states, ...newStates})
    if(currentStep < FORMS.length)setCurrentStep(currentStep+1);
  }

  const info = (): States => {
    return states
  }

  return (
    <View style={styles.container}>
      <Text>Meu fantastico gerador de personas!</Text>
      <StatusBar style="auto" />

      <StepIndicator 
        labels={labels}
        currentPosition={currentStep}
        customStyles={customStyles}
        stepCount={4}
      />

      <StepForm />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
});
