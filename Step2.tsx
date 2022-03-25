import { Formik } from 'formik';
import { useContext } from 'react';
import {View , Text, TextInput, Button, Alert} from 'react-native'


import Context from './contextHook';

export default function Step1() {
  // TODO - APPLY CONTEXT
  // const step1 = useContext(Context)
  
  return(
    <View>
      <Text>
        { "Step 2" }
      </Text>
      <Formik
        initialValues={{idade: '',
                        sexo: '',
                        escolaridade: '',
                        telefone: '',
                        email: '' }}
        onSubmit={values => Alert.alert(`idade: ${values.idade}\nsexo: ${values.sexo}\nescolaridade: ${values.escolaridade}\ntelefone: ${values.telefone}\nemail: ${values.email}`)}
        >
          {(props) => (
            <>
            <TextInput
              placeholder='idade'
              onChangeText={props.handleChange('idade')}
            />
            <TextInput
              placeholder='sexo'
              onChangeText={props.handleChange('sexo')}
            />
            <TextInput
              placeholder='escolaridade'
              onChangeText={props.handleChange('escolaridade')}
            />
            <TextInput
              placeholder='telefone'
              onChangeText={props.handleChange('telefone')}
            />
            <TextInput
              placeholder='email'
              onChangeText={props.handleChange('email')}
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