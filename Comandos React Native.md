Comandos React Native

Vamos lá relembrar, para criarmos um novo aplicativo, abrimos o cmd, navegamos pelo cmd até o local que você quer criar esse novo aplicativo e ai rodamos no cmd:

Comando para criar novo projeto:

npx @react-native-community/cli@latest init nomeapp

Após acessar a pasta do seu aplicativo no cmd, para rodar o aplicativo:

npx react-native run-android

\- Se estiver usando um Mac:

npx react-native run-ios

\* Lembre-se sempre, antes de usar o comando para rodar o aplicativo precisa estar com o Emulador aberto e ai sim rodar o comando.

npx create-expo-app@latest primeiroapp

Comando para criar App (expo)

Comando para criar o App:

npx create-expo-app nomeapp -t

Ali no local onde coloquei nomeapp você coloca o nome do app desejado.

E ai na lista de template só selecionar: (SELECIONE a opção Blank)

&nbsp; Default - includes tools recommended for most app developers

> > Blank

​ Blank (TypeScript)

&nbsp; Navigation (TypeScript)

&nbsp; Blank (Bare)​

Após criar seu projeto lembre-se de acessar a pasta do projeto criado pelo cmd e ai para rodar:

> Usando expo mesmo:

npx expo start

https://docs.expo.dev/ e https://reactnative.dev/docs/environment-setup

Opa, vamos lá

- Agora que você já praticou o Flexbox com os alinhamentos, eu deixei separado dois alinhamentos pra vocês testarem.

- Vamos usar na prop justifyContent o space-between ( Fazer com tenha espaço iguais entre eles ):

      <View style={‌{flex: 1, flexDirection: 'row', justifyContent:'space-between'}}>
        <View style={‌{width: 50, height: 50, backgroundColor: 'green'}} />
        <View style={‌{width: 50, height: 50, backgroundColor: 'blue'}} />
        <View style={‌{width: 50, height: 50, backgroundColor: 'red'}} />
      </View>

- Vamos usar agora na prop justifyContent o space-around ( Fazer com tenha espaços iguais entre eles mas tambem ao redor ):

      <View style={‌{flex: 1, flexDirection: 'row',  justifyContent:'space-around'}}>
        <View style={‌{width: 50, height: 50, backgroundColor: 'green'}} />
        <View style={‌{width: 50, height: 50, backgroundColor: 'blue'}} />
        <View style={‌{width: 50, height: 50, backgroundColor: 'red'}} />
      </View>

- Vamos agora usar uma prop nova dentro do alignItems o stretch ( Para essa prop funcionar as views filhas não podem ter largura FIXA ) Vamos lá:

  <View style={‌{flex: 1, flexDirection: 'column', alignItems:'stretch'}}>
  <View style={‌{width: 100, height: 50, backgroundColor: 'green'}} />
  <View style={‌{ height: 50, backgroundColor: 'blue'}} />
  <View style={‌{ height: 50, backgroundColor: 'red'}} />
  </View>

- Agora vamos continuar nossos estudos, aprendendo mais.
