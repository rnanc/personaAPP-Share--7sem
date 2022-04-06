import { Formik } from 'formik';
import {View , Text, TextInput, Button, Alert} from 'react-native'

import IStep from './IStep';

export default function Step2({ nextStep }: IStep) {
  
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
        onSubmit={values => {nextStep({email: values.email,
                                       escolaridade: values.escolaridade,
                                       idade: values.idade,
                                       sexo: values.sexo,
                                       telefone: values.telefone})}}
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
              title='Next'
              onPress={props.submitForm}
            />
            </>
          )}
      </Formik>
    </View>
  );
}