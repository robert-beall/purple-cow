# Project Purple Cow
## Running from the command line
To start the application on *localhost:3000*, run the following command:
> npm start
## Docker
To build and run the image, run the following command:
> docker-compose up -d --build purple-cow

To stop the image:
> docker-compose stop purple-cow

To start the image after stopping:
> docker-compose start purple-cow
## Configuring
### Port
To set the port that the application will run on, update the PORT environment variable in the .env file.

*Note: This will set the port for the docker container as well. There is no need to update the docker-compose.yml or Dockerfile.*
### Counter API Endpoint
The counter API endpoint can be configured by updating the REACT_APP_COUNTER_ENDPOINT environment variable in the .env file.
### Counter Key
The counter key parameter can be configured by updating the REACT_APP_COUNTER_KEY environment variable in the .env file. 
