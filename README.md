# weatherapp
Weather Application Using Tailwindcss

Steps to run the application:
1. Clone the git repository
2. In the .env file enter your API Key from website https://openweathermap.org/ 
3. run "npm install" to load dependencies
4. run "npm start" to start application and view application running at port 3000.
5. Dockerfile can be found at dockerhub trbaks/weatherapp
6. Pass PORT & API_KEY as environment variables while running docker eg: (docker run -d --name weather-app --env PORT=3070 --env API_KEY=098aYOUR-API-KEY2657e  -p 3070:3070 trbaks/weatherapp)
