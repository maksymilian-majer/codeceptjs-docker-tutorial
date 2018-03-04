[![Build Status](https://semaphoreci.com/api/v1/maksymilian-majer/codeceptjs-docker-tutorial/branches/master/shields_badge.svg)](https://semaphoreci.com/maksymilian-majer/codeceptjs-docker-tutorial)

# Project Description

This is a demonstration project to accompany the tutorial on how to use CodeceptJS with Chrome running with Selenium using Docker Compose.
This example project uses an empty Wordpress site as the test subject.

# Quick Start Guide

## Prerequisites

### Dependencies:

#### Node & NPM

Install Node & NPM min. version v8.9, but recommended node v9.
Recommend installing node using nvm, because we're using .nvmrc to specify the node version.

#### Docker Compose

Install Docker Compose by following the instructions:
https://docs.docker.com/compose/install/

### Initialize the environment and fill database

1. Run
```
docker-compose up -d
```

WARNING: Step 2 needs to only be ran on first project setup or anytime you deleted docker volumes and want to create a new, clean DB.

2. Run the following command (will load the DB dump in the container:

```bash
docker-compose exec db /bin/bash -c "mysql -uroot -psomepsw wordpress < /code/backup.sql"
```

This will populate the DB with some default wordpress date and user with the following credentials:

username: `admin`
password: `secureP@ssw0rd1`

3. If you want to dump your wordpress DB you can run:

```bash
docker-compose exec db /bin/bash -c "mysqldump -uroot -psomepsw wordpress --result-file=/code/backup.sql"
```

### Edit hosts file to enable testing outside of docker:

Append `wptests` mapping in hosts file:

```
sudo echo '127.0.0.1 wptests' | sudo tee -a /etc/hosts
```

For windows or other environments, you can use any other editor to append this line to your hosts file:
```
127.0.0.1 wptests
```

Test it in the browser by going to:

http://wptests/

### Install node dependencies

Run:

```
npm i
```

## Running

## Spin up docker-compose environment

Run:

```
docker-compose up -d
```

### Option 1 running using local environment:

This way of running the tests is good when developing them. However at the end you should always check if they also pass in the Docker Compose environment.

Only for the first time:

```
npm run selenium:install
```

Start selenium:

```
npm run selenium:start
```

Open a new terminal tab and run:

```
npm run test:selenium-standalone
```

### Option 2 running using docker

Run the following command

```
npm test
```

### Option 3 running local test – only current feature

Change in package.json script `test:current` to grep the name of your feature.
Then run:

```
npm run test:current
```

### Debug tests (only possible using local configuration):

Run:

```
npm run test:debug
```

Then attach to node debug process on port 51413.

## Additional info

### Helpful commands

Attaching to log of web container:

```
docker-compose logs -t -f wordpress
```

### Running other codeceptjs commands:

I did not want codeceptjs as global dependency, so I installed it as local and added an NPM script to be able to run codeceptjs commands.

Here is a shortcut to running the command:

```
npm run cjs [command_name]
```

Examples:

```
npm run cjs # lists all command options
npm run cjs shell # starts interactive shell
npm run cjs generate:test signup # generates new test named signup
npm run cjs gt signup # generates new test named signup (shortcut)
npm run cjs list # lists all available test actions
```

### Useful resources

* https://docs.docker.com/compose/wordpress/
* https://docs.docker.com/samples/library/wordpress/
* https://gist.github.com/spalladino/6d981f7b33f6e0afe6bb
* https://joshmobley.net/writing/2017/04/09/easy-wordpress-migration-with-docker.html