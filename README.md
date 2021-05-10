# Trivia-Galore-Public

*Note:* This repository includes the entire project, including project and library files. In the angularclient directory an auto-generated readme.md is present 
detailing further instructions on how to use angular.

The frontend is included in the angularclient folder and the backend in the demo folder. 
Both are pre-compiled, but the source is also present.

In order to run the backend, run the executable .jar file in the /demo/target folder called `backend.jar`.
The backend runs on port 8092 by default so please ensure this is free.
To build the backend, run the Maven command `mvn clean install` from the terminal in the /demo directory.

In order to run the frontend, mount the contents of the /angularclient/dist folder on a local webserver, such as an Apache webserver. Make sure 
the webserver is set to port 4200, as the backend is specifically configured to accept connections from localhost:4200.
To build the frontend, run the `ng build` command from the /angularclient directory, and to run it in development mode run the `ng serve --open` command from the same
directory.

Note that the previously loaded questions persist in the backend until it is closed, but are not saved beyond that. There is no persistent database. The question IDs in the 
frontend thus show how many questions you've answered before. 
