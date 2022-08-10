
# Project Purple Cow
Project Purple Cow is a simple web application that tracks a counter and allows users to update the counter with a single button press. The Purple Cow application is a simple react app that can be run from the command line. In addition, the application ships with a Dockerfile. Instructions for running both are included below.

## Running from the command line
To start the application on *localhost:3000*, run the following command in the terminal from the root directory of the application:
> npm start
## Docker
To build and run using Docker, run the following command in the terminal from the root directory of the application:
> docker-compose up -d --build purple-cow

To stop the container:
> docker-compose stop purple-cow

To start the container again:
> docker-compose start purple-cow
## Configuring
The application port, as well as the counter api endpoint and key can be configured in the .env file.
### Port
To set the port that the application will run on, update the PORT environment variable in the .env file.

*Note: This will set the port for the docker container as well. There is no need to update the docker-compose.yml or Dockerfile.*
### Counter API Endpoint
The counter API endpoint can be configured by updating the REACT_APP_COUNTER_ENDPOINT environment variable in the .env file.
### Counter Key
The counter key parameter can be configured by updating the REACT_APP_COUNTER_KEY environment variable in the .env file.
## Future Updates and Changes
- Add automated tests for all components.
- Add users and organizations/groups to the system and track individual user clicks and interactions.
- Add capability to track multiple counter api keys at once, potentially on a per-user or per-organization basis.
- Add more user interactivity. The counter api provides the ability to add new keys and namespaces as well as custom increments, decrements, and sets for counters. These could all translate to new user interactions on the site.
- Add personalization options for users and organizations such as editable blurbs and summaries on profile pages as well as preset color and style themes users and organizations could choose.
## Assumptions

Because the application relies on the counter api, new functionality involving counts is limited by the api capabilities. This leads to a few potential issues with adding the above listed changes:

- There are no private counters, meaning that anyone with a specific namespace/key can update counter values. This might confuse users and lead to organizational issues if counter values are particularly important.
- If we add a database to track information regarding users and organizations, we are now forced to fetch counter data from an api call when it may be simpler to store it on our end.
- If counter api was ever to go down, a new service would have to be selected or built to replace it in the application.
- We are limited to incrementing counters by integers. If we were to start tracking floating point values, we would have to find a different service. 
