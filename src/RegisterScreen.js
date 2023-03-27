import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

const RegistrationSchema = Yup.object().shape({
  mobileNumber: Yup.string().required('Mobile number is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  name: Yup.string().required('Name is required'),
});

const RegisterScreen = ({ navigation }) => {
  console.log(navigation)
  const handleRegistration = values => {
    // Your registration logic here
    navigation.navigate("LoginScreen")
  };

  return (
    <ImageBackground source={require('../assets/Fronalpstock_big.jpg')} style={{height: '100%'}}>
      <Text style={{textAlign: 'center', fontSize: 30, paddingBottom: 40, fontWeight: 'bold', paddingTop: 20, color: '#FFFFFF'}}>Sign Up</Text>
      <Formik
        initialValues={{
          mobileNumber: '',
          password: '',
          email: '',
          name: '',
        }}
        validationSchema={RegistrationSchema}
        onSubmit={handleRegistration}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          < >
          <Text style={styles.textHeaing}>Name:</Text>
            <TextInput
              style={styles.mobileTextInput}
              value={values.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
            />
             {touched.name && errors.name && (
              <Text style={{color: 'red', paddingLeft: 14}}>{errors.name}</Text>
            )}
            <Text style={styles.textHeaing}>Mobile Number:</Text>
            <TextInput
              style={styles.mobileTextInput}
              value={values.mobileNumber}
              onChangeText={handleChange('mobileNumber')}
              onBlur={handleBlur('mobileNumber')}
              keyboardType="phone-pad"
            />
            {touched.mobileNumber && errors.mobileNumber && (
              <Text style={{color: 'red',  paddingLeft: 14}}>{errors.mobileNumber}</Text>
            )}
            <Text style={styles.textHeaing}>Password:</Text>
            <TextInput
              style={styles.mobileTextInput}
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              secureTextEntry={true}
            />
            {touched.password && errors.password && (
              <Text style={{color: 'red',  paddingLeft: 14}}>{errors.password}</Text>
            )}
            <Text style={styles.textHeaing}>Email:</Text>
            <TextInput
              style={styles.mobileTextInput}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              keyboardType="email-address"
            />
            {touched.email && errors.email && (
              <Text style={{color: 'red',  paddingLeft: 14}}>{errors.email}</Text>
            )}
           
           
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={{textAlign: 'center', color: '#FFFFFF', fontSize: 14}}>
                Register
              </Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  textHeaing: {
    paddingTop: 10,
    paddingHorizontal: 10,
    color: '#FFFFFF'
  },
  mobileTextInput: {
    width: '95%',
    borderWidth: 0.5,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignSelf: 'center',
    color: '#FFFFFF',
    borderColor: '#FFFFFF'
  },
  button: {
    width: '95%',
    paddingVertical: 10,
    marginTop: 20,
    backgroundColor: 'green',
    borderRadius: 5,
    alignSelf: 'center'
  },
});

export default RegisterScreen;

