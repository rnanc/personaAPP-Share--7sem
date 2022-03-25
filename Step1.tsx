import { Formik } from 'formik';
import { useContext } from 'react';
import {View , Text, TextInput, Button, Alert, TouchableOpacity, Image} from 'react-native'


import Context from './contextHook';

export default function Step1() {
  // TODO - APPLY CONTEXT
  // const step1 = useContext(Context)
  
  return(
    <View>
      <Text>
        { "Step 1" }
      </Text>
      <Formik
        initialValues={{ name: '', avatar: '' }}
        onSubmit={values => Alert.alert(`nome: ${values.name}\navatar:${values.avatar}`)}
        >
          {(props) => (
            <>
            <TextInput
              placeholder='nome'
              onChangeText={props.handleChange('name')}
            />

            <TouchableOpacity onPress={() => props.values.avatar = 'Naruto1'}>
              <Image
              source={require('./assets/índice.jpg')}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.values.avatar = 'Naruto2'}>
              <Image
              source={require('./assets/índice2.jpg')}
            />
            </TouchableOpacity>
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