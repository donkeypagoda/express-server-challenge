# Express Lesson Challenge

## Introduction
Your task is to debug this express server. The goal is to expose you to common/possible bugs you may come across when building an express server, as well as give you a chance to dig into a pre-built express server.

## Tasks
**The following commands should return the appropriate response:**
1. command: ```http GET localhost:8000/cities``` response with an array of cities
2. command: ```http GET localhost:8000/cities/0``` response with a single city
3. command: ```http POST localhost:8000/cities name="Portland" state="Oregon"``` responds with a new city with name = Portland and state = Oregon
**BONUS** - command: ```http GET localhost:8000/cities/-1``` response with a 400 Bad Request response

## Starting your server

```
git clone https://github.com/jamiesonbates/express-server-challenge.git
npm install
npm start
```

## Help: reset your cities.json file with this command

```
echo '[{"name":"New York","state":"New York"},{"name":"Seattle","state":"Washington"},{"name":"San Francisco","state":"California"},{"name":"Chicago","state":"Illinois"},{"name":"Tacoma","state":"Washington"},{"name":"Spokane","state":"Washington"}]' > 'cities.json'
```
