import { Formik } from 'formik';
import {View , Text, TextInput, Button, Alert} from 'react-native'
import Checkbox from 'expo-checkbox';

import Context from './contextHook';
import { useState } from 'react';

export default function Step1() {
  // TODO - APPLY CONTEXT
  // const step1 = useContext(Context)
  const [toggleComunicativo, setToggleComunicativo] = useState(false)
  const [toggleCriativo, setToggleCriativo] = useState(false)
  const [toggleLiderança, setToggleLiderança] = useState(false)
  return(
    <View>
      <Text>
        { "Step 4" }
      </Text>
      <Formik
        initialValues={{ habilidade: [] as string[] }}
        onSubmit={values => Alert.alert(`${values.habilidade}`)}
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
    </View>
  );
}