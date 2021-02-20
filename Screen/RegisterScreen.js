//Import React and Hook we needed
import React, { useState } from 'react';

//Import all required component
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Loader from './Components/loader';

const RegisterScreen = props => {
  let [userFirstName, setUserFirstName] = useState('');
  let [userLastName, setUserLastName] = useState('');
  let [userEmail, setUserEmail] = useState('');
  let [userMobileNumber, setUserMobileNumber] = useState('');
  let [userState, setUserState] = useState('');
  let [userCity, setUserCity] = useState('');
  let [userPassword, setUserPassword] = useState('');
  let [userConfirmPassword, setUserConfirmPassword] = useState('');
  let [loading, setLoading] = useState(false);
  let [errortext, setErrortext] = useState('');
  let [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);

  const handleSubmitButton = () => {
    setErrortext('');
    if (!userFirstName) {
      alert('Please fill First Name');
      return;
    }
    if (!userLastName) {
      alert('Please fill Last Name');
      return;
    }
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userMobileNumber) {
      alert('Please fill Mobile Number');
      return;
    }
    if (!userState) {
      alert('Please fill State');
      return;
    }
    if (!userCity) {
      alert('Please fill City');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    if (!userConfirmPassword) {
      alert('Please fill Password');
      return;
    }
    //Show Loader
    setLoading(true);
    var dataToSend = {
      user_firstname: userFirstName,
      user_lastname: userLastName,
      user_email: userEmail,
      user_mobilenumber: userMobileNumber,
      user_state: userState,
      user_city: userCity,
      user_password: userPassword,
      user_confirmpassword: userConfirmPassword,
    };
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    if (userPassword == userConfirmPassword) {
      setIsRegistraionSuccess(true);
      console.log('Registration Successful. Please Login to proceed');
    } else {
      setErrortext('Registration Unsuccessful');
    }
  };
  if (isRegistraionSuccess) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#307ecc',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../Image/success.png')}
          style={{ height: 150, resizeMode: 'contain', alignSelf: 'center' }}
        />
        <Text style={styles.successTextStyle}>Registration Successful.</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#307ecc' }}>
      <Loader loading={loading} />
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../Image/inceptive.png')}
            style={{
              width: '50%',
              height: 100,
              resizeMode: 'contain',
              margin: 30,
              marginBottom:5,
            }}
          />
            <Text
                style={styles.logoTextStyle}>
                Demo App
              </Text>
        </View>
        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserFirstName => setUserFirstName(UserFirstName)}
              underlineColorAndroid="#FFFFFF"
              placeholder="Enter First Name"
              placeholderTextColor="#F6F6F7"
              autoCapitalize="sentences"
              returnKeyType="next"
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserLastName => setUserLastName(UserLastName)}
              underlineColorAndroid="#FFFFFF"
              placeholder="Enter Last Name"
              placeholderTextColor="#F6F6F7"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                this._emailinput && this._emailinput.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserEmail => setUserEmail(UserEmail)}
              underlineColorAndroid="#F6F6F7"
              placeholder="Enter Email"
              placeholderTextColor="#F6F6F7"
              keyboardType="email-address"
              returnKeyType="next"
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserMobileNumber => setUserMobileNumber(UserMobileNumber)}
              underlineColorAndroid="#F6F6F7"
              placeholder="Enter Mobile Number"
              placeholderTextColor="#F6F6F7"
              keyboardType="numeric"
              returnKeyType="next"
              onSubmitEditing={() => this._stateinput && this._stateinput.focus()}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserState => setUserState(UserState)}
              underlineColorAndroid="#FFFFFF"
              placeholder="Select State"
              placeholderTextColor="#F6F6F7"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                this._cityinput && this._cityinput.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserCity => setUserCity(UserCity)}
              underlineColorAndroid="#FFFFFF"
              placeholder="Select City"
              placeholderTextColor="#F6F6F7"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                this._ageinput && this._ageinput.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserPassword => setUserPassword(UserPassword)}
                underlineColorAndroid="#FFFFFF"
                placeholder="Enter Password" 
                placeholderTextColor="#F6F6F7"
                keyboardType="default"
                onSubmitEditing={() =>
                  this._confirmpasswordinput && this._confirmpasswordinput.focus()
                }
                blurOnSubmit={false}
                secureTextEntry={true}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserConfirmPassword => setUserConfirmPassword(UserConfirmPassword)}
                underlineColorAndroid="#FFFFFF"
                placeholder="Confirm Password" 
                placeholderTextColor="#F6F6F7"
                keyboardType="default"
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
              />
            </View>
          {errortext != '' ? (
            <Text style={styles.errorTextStyle}> {errortext} </Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitButton}>
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'white',
  },
  logoTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});
