import {useState} from "react"
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [expediente, setExpediente] = useState("")
  const [password, setPassword] = useState("")

  const users = [
    {
      name: "Samuel",
      password: "12345678"
    },
    {
      name: "Ruth",
      password: "12345678"
    },
    {
      name: "Lud",
      password: "12345678"
    },
  ]

  const handleSubmit = () =>{
    if(password.length < 8){
      alert("La contraseña debe tener minimo 8 caracteres")

    } else{
      let userAuthenticated = false;

      for (let user of users) {
        if (user.name === expediente && user.password === password) {
          userAuthenticated = true;
          break;
        }
      }

      if (userAuthenticated) {
        alert("Usuario autenticado");
      } else {
        alert("Usuario o contraseña incorrectos");
      }
      
    }
  }

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          maxLength={6}
          keybordType="numeric"
          onChangeText={expediente => setExpediente(expediente)}
          value={expediente}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input} 
          maxLength={16}
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
          value={password}
        />
      </View>
      <View style={styles.signIn}>
        <Button
          style={styles.signInText}
          title={"Sign In"}
          onPress={() => handleSubmit()}
        />
      </View>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer:{
    flex: 1,
    borderRadius: 5,
    backgroundColor: "#111827",
    padding: 6,
    color: "#f3f4f6",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 15
  }, 
  inputGroup: {
    marginTop: 2,
    fontSize: 6,
    lineHeight: 1
  },
  input:{
    width: 240,
    height: 65,
    marginVertical: 10,
    borderRadius: 5, 
    borderWidth: 2,
    borderStyle: "solid",
    backgroundColor: "#111827",
    paddingVertical: 3,
    paddingHorizontal: 4,
    color: "#f3f4f6"
  }, 
  signIn:{
    width: 240,
    marginTop: 10,
    backgroundColor: "#a78bfa",
    padding: 3,
    textAlign: "center",
    color: "#111827",
    borderRadius: 5,
    fontWeight: "600"
  },
  signInText:{
    color:"black"
  },
  label: {
    color: "#f3f4f6"
  }

});
