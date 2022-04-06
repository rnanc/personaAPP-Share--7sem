import { Formik } from 'formik';
import {Picker} from '@react-native-community/picker';
import {View , Text, TextInput, Button, Alert} from 'react-native'

import IStep from './IStep';

export default function Step3({ nextStep }: IStep) {
  
  return(
    <View>
      <Text>
        { "Step 3" }
      </Text>
      <Formik
        initialValues={{ setor: '', titulo: 'CEO', }}
        onSubmit={values => nextStep({ setor: values.setor,
                                       titulo: values.titulo})}
        >
          {(props) => (
            <>
            <TextInput
              placeholder='Setor'
              onChangeText={props.handleChange('setor')}
            />
            <Picker
              selectedValue={props.values.titulo}
              style={{height: 50, width: 100}}
              onValueChange={(itemValue, itemIndex) =>
                props.values.titulo = String(itemValue)
              }>
              <Picker.Item label="CEO" value="CEO" />
              <Picker.Item label="Escraviário" value="Escraviário" />
            </Picker>
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