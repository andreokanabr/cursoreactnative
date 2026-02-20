import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { FormUsers } from './src/FormUsers';
import { auth } from './src/firebaseConnection';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authUser, setAuthUser] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => {
      if (user) {
        setAuthUser({
          email: user.email,
          uid: user.uid,
        });
        setLoading(false);
        return;
      }
      setAuthUser(null);
      setLoading(false);
    });
  }, []);

  async function handleCreateUser() {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user);
  }

  function handleLogin() {
    signInWithEmailAndPassword(auth, email, password)
      .then(user => {
        console.log(user);
        setAuthUser({
          email: user.user.email,
          uid: user.user.uid,
        });
      })
      .catch(err => {
        if (err.code === 'auth/missing-password') {
          console.log('Senha é obrigatoria');
          return;
        }
        console.log('ALGO DEU ERRADO: ', err.code);
      });
  }

  async function handleLogout() {
    await signOut(auth);

    setAuthUser(null);
  }

  if (authUser) {
    return (
      <View style={est.container}>
        <FormUsers />
      </View>
    );
  }

  return (
    <View style={est.container}>
      <StatusBar hidden={true} />
      {loading && (
        <Text
          style={{
            fontSize: 20,
            marginLeft: 8,
            color: '#000',
            marginBottom: 8,
          }}
        >
          Carregando informações...
        </Text>
      )}
      <Text style={{ marginLeft: 8, fontSize: 18, color: '#000' }}>Email:</Text>
      <TextInput
        style={est.input}
        placeholder="Digite seu email..."
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Text style={{ marginLeft: 8, fontSize: 18, color: '#000' }}>Senha:</Text>
      <TextInput
        style={est.input}
        placeholder="Digite sua senha..."
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={[est.button, { marginBottom: 8 }]}
        onPress={handleLogin}
      >
        <Text style={est.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[est.button, { marginBottom: 8 }]}
        onPress={handleCreateUser}
      >
        <Text style={est.buttonText}>Criar Conta</Text>
      </TouchableOpacity>

      {authUser && (
        <TouchableOpacity
          style={[est.button, { backgroundColor: 'red' }]}
          onPress={handleLogout}
        >
          <Text style={est.buttonText}>Sair da conta</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const est = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  input: {
    marginLeft: 8,
    marginRight: 8,
    borderWidth: 1,
    marginBottom: 14,
  },
  button: {
    backgroundColor: '#000',
    marginLeft: 8,
    marginRight: 8,
    padding: 8,
  },
  buttonText: {
    padding: 8,
    color: '#FFF',
    textAlign: 'center',
  },
});
