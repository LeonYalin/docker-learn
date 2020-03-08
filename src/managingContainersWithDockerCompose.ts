import { delimeterMsg, logF, logToHTML } from "./utils";

function usingDockerCompose() {
  logToHTML('' +
    'Docker compose is provides a way to centralize the management and lifecycle of multiple containers (also called services). ' +
    'Using docker-compose.yml we can build services, start up and tear down them. The key commands of docker  compose are: ' +
    '"docker-compose build <optional_service_name>" - build (all or a single service if specified) services using the docker-compose.yml file, ' +
    '"docker-compose up" - start containers from the images. e.g. "docker-compose up --no-deps node" - rebuild and restart only the node service ' +
    '"docker-compose down" - stop and remove all services. One more useful thing is "docker-compose down --rmi all --volumes" - remove all containers, images and volumes ' +
    'Example of the docker-compose.yml file: ' +
    `
    version: "2.1"

    services:

      node:
        build:
          context: .
          dockerfile: Dockerfile
        environment:
          NODE_ENV: production
        ports:
          - 80:3000
        networks:
          - my_network

      mongodb:
        image: mongo
        networks:
          - my_network

    networks:
      my_network:
        driver: bridge

    ` +
    'Then, we build and run it: "docker-compose build" -> "docker-compose up -d". We can check it is running using "docker-compose ps"' +
    'In addition, we can view the all containers logs using "docker-compose logs". If we want to kill everything we run "docker-compose down". ' +
    ''
  );
}

export default function managingContainersWithDockerCompose() {
  delimeterMsg('MANAGING CONTAINER WITH DOCKER COMPOSE');
  logF(usingDockerCompose);
}