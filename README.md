# FoodSnaps

TLDR: Using computer vision and machine learning, FoodSnaps identifies the foods in front of you and provides you with accurate nutrition facts and easy to make healthy recipes.

<h2>Background</h2>

This project was made during HackWestern 2022 to help people identify the foods in front of them and make healthier food choices. Using your phones camera, FoodSnaps is able to find exactly what you are eating or what you plan to make food with. We then calculate the nutrition facts to inform the consumer of the nutritional value of the foods they are eating. With this information, we can then provide the user with easy to make healthy recipes that include the ingredients they have in front of them. Another feature that FoodSnaps includes is that if the food is not directly with you, we can still help you find delicious and healthy recipes based on the users input.

<p align="center">
  <img src = "nutrient-ai-identifier/assets/images/foodsnaps_logo.png" width="35%" height ="10%">
</p>


<h2>How It Works</h2>

Using Adhawk MindLinks to track eye position of user when on the website to create a heat map of what they are looking at. This data can be analyzed later to determine what users are focusing on, allowing developers to make improvements based on it. 

Using LogMeal's API we can use artificial intelligence to recognize types of food and the ingredients that are in them. From these images, LogMeal is able to find recipes that fit your items and can provide healthy options based on your ingredients. The app also includes a built in chatbot that scans various websites and finds the best match to provide a healthy recipe based on the user's search criteria.

<h2>System Requirements</h2>

To recreate this project you will need the following hardware:
- A Windows, Mac or Linux computer
- A mobile device with Expo Go installed to run your project on


To recreate this project you will need the following software:
- React Native
- Expo
- LogMeal API

<img src="https://api.logmeal.es/assets/logo_complete_v2.png" title="LogMeal" width="75%"/>

<h2>Steps to Replicate</h2>

1. Clone the repository
	```sh git clone git@github.com:shaansuthar/FoodSnaps.git```
2. NPM install
3. Obtain LogMeal API key `
4. Run NPX expo start
	```sh npx expo start```
5. Download the Expo Go app on your mobile device
6. Scan QR code 
7. Enjoy healthy food




<h2>Next Steps</h2>

There are many things that we can do to improve on this project for the future, including:
- Properly import and access the API
- Identify larger varieties of food items
- Create more functionality within the app
- Remove bugs in the code
- Implement a chatbot that has NLP capabilities using Cohere's native environment


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

