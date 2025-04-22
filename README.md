# **Cat Tracker Pixel**

Um aplicativo mobile em **estilo pixel art retrô**, criado com **React Native + Expo**, que permite aos usuários reportarem gatos perdidos ou encontrados em um mapa colaborativo.

Desenvolvido como parte de um projeto com foco em **questões sociais e adoção consciente**, o app destaca inclusive os gatos que normalmente enfrentam mais dificuldades para adoção.

---

## 🌟 Funcionalidades

- Mapa com localização 
- Registro de gatos com foto + observação  
- Pins permanentes com detalhes ao clicar  
- Tutorial fixo na tela inicial  
- Telas 100% estilizadas em **pixel art 8-bit**  
- Componentes reutilizáveis estilizados (`PixelButton`, `CustomHeader`, `CustomTabBar`)  
- Tela de recursos com links externos  

---

## 🚀 Tecnologias usadas

- React Native + Expo  
- TypeScript  
- React Navigation  
- `react-native-maps`  
- `expo-image-picker`  
- `react-native-safe-area-context`  

---

## 🔌 Backend Simulado

Utilizamos o [JSON Server](https://github.com/typicode/json-server) como **banco de dados fake** para simular uma API REST.  
Os dados ficam armazenados em um arquivo local `db.json`.

### 🔁 Endpoints disponíveis

| Método     | Rota         | Descrição                          |
|------------|--------------|------------------------------------|
| GET        | `/cats`      | Lista todos os gatos reportados    |
| POST       | `/cats`      | Adiciona um novo gato ao sistema   |
| GET        | `/cats/:id`  | (Opcional) Detalhes de um gato     |
| PUT/DELETE | `/cats/:id`  | (Opcional) Atualiza ou remove gato |

---

### 🧪 Exemplo de dado no `db.json`

```json
{
  "cats": [
    {
      "id": 1,
      "imageUri": "https://link-da-imagem",
      "observation": "Gato preto perto da padaria",
      "latitude": -23.55,
      "longitude": -46.63
    }
  ]
}
```

---

## 📊 Estrutura de Telas

- `HomeScreen` → tutorial 
- `MapScreen` → mapa com pins, modo de registro  
- `ResourcesScreen` → botões com links para sites externos  
- `AboutUsScreen` → dados dos devs 

---

## 🏠 Como rodar localmente

```bash
# Clonar o repositório
git clone https://github.com/seu-user/cat-tracker-pixel.git
cd cat-tracker-pixel

# Instalar as dependências
npm install

# Rodar via Expo
npx expo start
```

### (Opcional) Rodar o JSON Server

```bash
npx json-server --watch db.json --port 3001
```

---

### ⚠️ Importante — rodando no celular

Para testar o app em um **dispositivo físico**, você deve **substituir `localhost` pelo IP local da sua máquina** no arquivo `src/services/api.ts`.

```ts
// src/services/api.ts
const api = axios.create({
  baseURL: 'http://192.168.0.101:3001' // ← substitua pelo IP da sua máquina
});
```

Você pode encontrar seu IP local usando:

```bash
# No Windows
ipconfig

# No Mac/Linux
ifconfig
```

> Certifique-se de que **seu celular e o computador estejam na mesma rede Wi-Fi**.


---

## 🤝 Desenvolvedores

- **Nicolas Martins** - RM553478  
- **Luana Sousa Matos** - RM552621  

---

## 🧃 Licença

Este projeto é open-source. Sinta-se livre para forkar e contribuir ✨

---

> _sorriso ronaldo_

