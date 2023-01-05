# FoodSnaps

FoodSnaps is a mobile application made during Hack Western 2022. The inspiration for this app came from a common problem many people face when it comes to meal planning and ingredient management - not knowing what to cook when you have limited ingredients available. Our goal was to make it easier for users to find recipes by lowering the friction of obtaining them. To achieve this, we implemented two input methods for finding recipes - using the camera to snap a picture of an ingredient and interacting with an AI chatbot to describe textually what you want to eat.

### Note : Navigate to nutrient-ai-identifier folder for react native app

## ⚙️ Features
- Select an image from camera roll
- Chat with an AI Chatbot

## 📸 Screenshots
|||
|:----------------------------------------:|:-----------------------------------------:|
| ![Imgur](https://imgur.com/Kgd1DBM.png) | ![Imgur](https://imgur.com/95td8tg.png) |
| ![Imgur](https://imgur.com/du7IDCp.png) | ![Imgur](https://imgur.com/AHex9ZG.png) |
| ![Imgur](https://imgur.com/STIA6aN.png) | ![Imgur](https://imgur.com/YQ94coz.png) |
| ![Imgur](https://imgur.com/ob8dMg4.png) | ![]()

## Built With 🛠
- [Expo](https://expo.dev/) - Expo is an open-source platform for making universal native apps with JavaScript and React
- [React](https://reactjs.org/) - React is a JavaScript library for building user interfaces
- [NodeJS](https://nodejs.org/en/) - Node.js is an open-source, cross-platform, back-end JavaScript runtime environment
- [Spoonacular](https://spoonacular.com/food-api) - Spoonacular is a food and recipe API
- [OpenAI](https://openai.com/api/) - OpenAI's GPT-3 API performs a variety of tasks related to natural language
- [Next.js](https://nextjs.org) - Next.js is an open-source web development framework created by Vercel enabling React-based web applications

## Prerequisties
- [NodeJS](https://nodejs.org/en/) version 14+
- [OpenAI API Key](https://openai.com/api/)
- [Spoonacular API Key](https://spoonacular.com/food-api/console#Dashboard)
- [ngrok](https://ngrok.com/)

## Getting started
- Clone the repo

```sh
git clone git@github.com:richardl2003/FoodSnaps.git
cd AI-NUTRITION-IDENTIFICATION
```

- Create environment variables for API keys

- Open two terminal shells

```sh 
cd nutrient-ai-identifier

# Followed by
npx start expo
```

```sh
cd chatbot-backend

# Followed by
npm run dev
```

Note: to get the chatbot-backend to work, I used ngrok to prevent `Network Request Failed` error, follow this [tutorial](https://www.youtube.com/watch?v=OgUPClyIu-s)

<h2>Tools We Used</h2>

![Ant-Design](https://img.shields.io/badge/-AntDesign-%230170FE?style=for-the-badge&logo=ant-design&logoColor=white)
![Canva](https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white)
![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Stack Overflow](https://img.shields.io/badge/-Stackoverflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)



Created by: [Shaan Suthar](https://www.linkedin.com/in/shaan-suthar/), [Richard Li](https://www.linkedin.com/in/richardli2003/), [Fraser MacFarlane](https://www.linkedin.com/in/fraser-macfarlane/), and [Matthew Mark](https://www.linkedin.com/in/matthew-mark-/)

