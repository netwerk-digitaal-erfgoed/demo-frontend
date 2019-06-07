Front end application for NDE's demo environment
==============================

## Development

### Create .env file

    vi .env

Paste the contents underneath:

    NODE_ENV=development

### Build and start without Traefik

    docker-compose -f docker-compose.common.yml -f docker-compose.dev.yml build --no-cache
    docker-compose -f docker-compose.common.yml -f docker-compose.dev.yml up
    http://localhost:5501/

### Or build and start with Traefik

    docker-compose -f docker-compose.common.yml -f docker-compose.dev-traefik.yml build --no-cache
    docker-compose -f docker-compose.common.yml -f docker-compose.dev-traefik.yml up
    http://nde-demo.localhost/

### Logon to container

    docker-compose -f docker-compose.common.yml run --rm --no-deps --entrypoint /bin/bash server

### Or logon to running container

    docker exec -it -u root demo-frontend_server_1 /bin/bash

### Coding conventions
https://hapijs.com/styleguide
