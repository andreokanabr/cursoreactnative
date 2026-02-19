import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import { db } from './firebaseConnection';
import {
  doc,
  getDoc,
  onSnapshot,
  setDoc,
  collection,
  addDoc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { UsersList } from './users';

export function FormUsers() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cargo, setCargo] = useState('');

  const [users, setUsers] = useState('');

  const [showForm, setShowForm] = useState(true);
  const [isEditing, setIsEditing] = useState('');

  useEffect(() => {
    async function getDados() {
      // const docref = doc(db, 'users', '1');
      // getDoc(docref)
      //   .then(snapshot => {
      //     setNome(snapshot.data()?.nome);
      //   })
      //   .catch(err => {
      //     console.log('error: ');
      //     console.log(err);
      //   });
      //SEPARA O CODIGO
      // onSnapshot(doc(db, 'users', '1'), doc => {
      //   setNome(doc.data()?.nome);
      // });
      const usersRef = collection(db, 'users');

      // getDocs(usersRef)
      //   .then(snapshot => {
      //     let lista = [];

      //     snapshot.forEach(doc => {
      //       lista.push({
      //         id: doc.id,
      //         nome: doc.data().nome,
      //         idade: doc.data().idade,
      //         cargo: doc.data().cargo,
      //       });
      //     });
      //     setUsers(lista);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });

      onSnapshot(usersRef, snapshot => {
        let lista = [];

        snapshot.forEach(doc => {
          lista.push({
            id: doc.id,
            nome: doc.data().nome,
            idade: doc.data().idade,
            cargo: doc.data().cargo,
          });
        });
        setUsers(lista);
      });
    }
    getDados();
  }, []);

  async function handleRegister() {
    // await setDoc(doc(db, 'users', '4'), {
    //   nome: 'Lex Luthor',
    //   idade: '52',
    //   cargo: 'Empresario',
    // })
    //   .then(() => {
    //     console.log('Cadastrado com sucesso!!');
    //   })
    //   .catch(erro => {
    //     console.log(erro);
    //   });
    //ADDOC
    // await addDoc(collection(db, 'users'), {
    //   nome: 'Tony Stark',
    //   idade: '56',
    //   cargo: 'Playboy',
    // });
    await addDoc(collection(db, 'users'), {
      nome: nome,
      idade: idade,
      cargo: cargo,
    })
      .then(() => {
        console.log('Cadastrado com sucesso!!!');
        setNome('');
        setIdade('');
        setCargo('');
      })
      .catch(err => {
        console.log(err);
      });
  }

  function handleTogle() {
    setShowForm(!showForm);
  }

  function editUser(data) {
    setNome(data.nome);
    setIdade(data.idade);
    setCargo(data.cargo);
    setIsEditing(data.id);
  }

  async function handleEditUser() {
    const docRef = doc(db, 'users', isEditing);

    await updateDoc(docRef, {
      nome: nome,
      idade: idade,
      cargo: cargo,
    });
    setNome('');
    setIdade('');
    setCargo('');
    setIsEditing('');
  }

  return (
    <View style={est.container}>
      <StatusBar hidden={true} />
      {showForm && (
        <View>
          {/* <Text style={{ color: '#000', fontSize: 16, marginBottom: 4 }}> */}
          <Text style={est.label}>Nome:</Text>
          <TextInput
            style={est.input}
            placeholder="Digite seu nome..."
            value={nome}
            onChangeText={text => setNome(text)}
          />

          <Text style={est.label}>Idade:</Text>
          <TextInput
            style={est.input}
            placeholder="Digite seu idade..."
            value={idade}
            onChangeText={text => setIdade(text)}
          />

          <Text style={est.label}>Cargo:</Text>
          <TextInput
            style={est.input}
            placeholder="Digite seu cargo..."
            value={cargo}
            onChangeText={text => setCargo(text)}
          />
          {isEditing !== '' ? (
            <TouchableOpacity style={est.button} onPress={handleEditUser}>
              <Text style={est.buttonText}>Editar Usuário</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={est.button} onPress={handleRegister}>
              <Text style={est.buttonText}>Adicionar</Text>
            </TouchableOpacity>
          )}
        </View>
      )}

      <TouchableOpacity style={{ marginTop: 8 }} onPress={handleTogle}>
        <Text style={{ textAlign: 'center' }}>
          {showForm ? 'Esconder Formulário' : 'Mostrar Formulário'}
        </Text>
      </TouchableOpacity>

      <Text style={{ marginTop: 14, marginLeft: 8, color: '#000' }}>
        Usuários
      </Text>

      <FlatList
        style={est.list}
        data={users}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <UsersList data={item} handleEdit={item => editUser(item)} />
        )}
      />
    </View>
  );
}

const est = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: '#000',
    marginLeft: 8,
    marginRight: 8,
  },
  buttonText: {
    padding: 8,
    color: '#FFF',
    textAlign: 'center',
  },
  label: {
    color: '#000',
    fontSize: 18,
    marginBottom: 4,
    marginLeft: 8,
  },
  input: {
    borderWidth: 1,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  list: {
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
  },
  buttonLogout: {
    backgroundColor: 'red',
    alignSelf: 'flex-start',
    margin: 14,
    padding: 8,
    borderRadius: 4,
  },
});
