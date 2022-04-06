import { Formik } from 'formik';
import {View , Text, TextInput, Button, Alert, TouchableOpacity, Image} from 'react-native'

import IStep from './IStep';

interface Step1 {
  name: string
  avatar: string
}

export default function Step1({ nextStep }: IStep) {
  
  return(
    <View>
      <Text>
        { "Step 1" }
      </Text>
      <Formik
        initialValues={{ name: '', avatar: '' }}
        onSubmit={values => nextStep({name: values.name,
                                      avatar: values.avatar})}
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
              title='Next'
              onPress={props.submitForm}
            />
            </>
          )}
      </Formik>
    </View>
  );
}