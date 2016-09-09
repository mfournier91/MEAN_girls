#Instructions for installation and use on Mac.

1. First, clone the repo and cd into it.
2. Next you'll need npm and node installed.
To check if you already have node and npm installed, type ```npm -v``` and ```node -v```
into terminal. Both commands should give you a version number if you have it.
Otherwise you will need to install them. Enter ```brew install node``` into your terminal.
If your terminal says ```brew: command not found```, you will first need to install brew.
You should be able to install brew with this command: ```ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"```.
3. Enter ```npm install``` into terminal. This should give you the required dependencies listed in package.json
4. Enter ```mongod``` into terminal. If you get another command not found, you need to install
mongodb. There's a bunch of commands for this step.
  ```
  brew update
  brew install mongodb
  brew install mongodb --with-openssl
  ```

if that last command gave an error do this instead.
  ```
  brew install -v --fresh mongodb
  ```
5. Create a directory for mongod to write data to.
  ```
  sudo mkdir -p /data/db
  ```
6. Open a new terminal tab and enter ```mongod```. You should not see another terminal prompt. I.e no ```$```. If you get a permissions denied error just do ```sudo mongod``` instead. The terminal should end with ```waiting for connections on port 27017```.
7. Go back to the first terminal tab, you need the other one hanging with mongod running.  Now we need to run our schema and seed data. Enter:
  ```
  node db/schema.js
  node db/seeds.js
  ```
Control-c to close the hanging seed file.
8. Run the app.
  ```
  node index.js
  ```
open localhost:4000 in your browser.
