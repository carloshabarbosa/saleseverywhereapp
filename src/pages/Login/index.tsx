import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Button, TextInput} from '@react-native-material/core';
import {useNavigation} from '@react-navigation/native';
import * as yup from 'yup';
import {Formik} from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login: React.FC = (): React.ReactElement => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    image: {
      marginBottom: 20,
    },
    top: {
      flex: 2,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    center: {
      flex: 3,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottom: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10,
    },
    form: {
      flexDirection: 'row',
      width: '100%',
    },
    input: {
      width: '90%',
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 20,
      backgroundColor: 'white',
      borderRadius: 50,
    },
    button: {
      color: '#1DDE7D',
    },
    textError: {
      fontSize: 10,
      color: 'red',
    },
  });

  const navigation = useNavigation();
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Digite um e-mail válido')
      .required('E-mail é obrigatório'),
    senha: yup.string().required('Senha é obrigatório'),
  });

  const login = (values: any) => {
    //valida email e senha
    console.log(values.toString);
    AsyncStorage.setItem('jwtToken', 'teste').then(result => {
      console.log(result);
      navigation.navigate('App', {screen: 'Home'});
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.image}>
          <Image source={require('../../assets/images/logo.png')} />
        </View>
      </View>

      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{email: '', senha: ''}}
        onSubmit={login}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <View style={styles.center}>
              <View style={styles.form}>
                <TextInput
                  style={styles.input}
                  color="#1A73E9"
                  placeholder="E-mail"
                  variant="standard"
                  autoComplete="email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
              </View>
              <Text style={styles.textError}>{errors.email}</Text>
              <View style={styles.form}>
                <TextInput
                  style={styles.input}
                  color="#1A73E9"
                  placeholder="Senha"
                  variant="standard"
                  onChangeText={handleChange('senha')}
                  onBlur={handleBlur('senha')}
                  value={values.senha}
                  secureTextEntry
                />
              </View>
              {errors.senha && (
                <Text style={styles.textError}>{errors.senha}</Text>
              )}
            </View>
            <View style={styles.bottom}>
              <Button
                title="ENTRAR"
                style={styles.bottom}
                color="#1DDE7D"
                onPress={handleSubmit}
                disabled={!isValid}
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default Login;
