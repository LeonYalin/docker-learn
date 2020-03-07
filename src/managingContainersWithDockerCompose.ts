import { delimeterMsg, logF, logToHTML } from "./utils";

function usingDockerCompose() {
  logToHTML('' +
    // 'Docker containers can be likned to each other using two methods: legacy linking and container networks. First method is more ' +
    // 'simple but is depricated and will be removed soon. In this method we link containers by name. When we start a container we give it a name. ' +
    // 'e.g. "docker run -d --name my-mongodb mongo". Then, we\'ll run the next container and link it to first using the name we created earlier. ' +
    // 'e.g. "docker run -d -p 80:3000 --link my-mongodb:mongodb node". In the --link command the first argument is a name and second is an alias. ' +
    // 'This alias can be used later inside the container as a host name to connect to the first container, e.g. in mongodb "host" configuration. ' +
    // 'In order to test it, we will run the node container with mongo container linked, then enter the node container and try to run mongo commands. ' +
    // `
    //   docker run -d --name mongodb mongo
    //   docker run -d --name nodejs --link mongodb:mongodb leonyalin/node
    // ` +
    // 'To check if it is worked we can enter the container and ping the linked address, or view the hosts file, like this:' +
    // `
    //   docker exec -it 1e sh
    //   cat /etc/hosts
    //   ping mongodb
    // ` +
    // 'One more way to run command in the running container is "docker exec <container_id> [commands]", e.g. docker exec 1e node server.js'
    ''
  );
}

// function usingContainerNetworks() {
//   logToHTML('' +
//     'Linking containers is good in development, but bad in production when you have dosens og containers that need to talk to each other. ' +
//     'Docker solves this problem by using container networks, so called "bridge networks". We can can create a container network ' +
//     'and then run containers inside that network. All containers inside te network will be able to talk to each other. ' +
//     'First, we create a network using the command "docker network create --driver bridge <network_name>". We can wiew it using "docker network ls"' +
//     'Then, we run containers and provide an additional --net=<network_name> to connect to the network. ' +
//     'To check which containers run inside the network, we can type "docker network inspect <network_name>' +
//     ''
//   );
// }

export default function managingContainersWithDockerCompose() {
  delimeterMsg('MANAGING CONTAINER WITH DOCKER COMPOSE');
  logF(usingDockerCompose);
  // logF(usingContainerNetworks);
}