import { delimeterMsg, logF, logToHTML } from "./utils";

function usingDockerMashine() {
  logToHTML('' +
    'Docker mashine is a tool that can be used to manage docker virtual mashines. Basic commands are: ' +
    '"docker-mashine ls", "docker-mashine start <mashine-name>", "docker-mashine stop <mashine-name>", ' +
    '"docker-mashine env <mashine-name>" and "docker-mashine ip <mashine-name>". ' +
    'In order to use it, first open the "Docker quickstart window" terminal to launch the docker mashine. ' +
    'This will bootstrap and start the Virtual box mashine with the default docker mashine.'
  );
}

function usingDockerClient() {
  logToHTML('' +
    'Docker client is a tool that can be used to manage docker containers. Basic commands are: ' +
    '"docker pull <image-name>", "docker run <image-name>", "docker images", "docker ps. "' +
    'For example, if we want to test docker using the tiny "hello-world image, we do the following: ' +
    '"docker pull hello-world" will download the image, "docker images" will show our image in list, ' +
    '"docker run hello-world" will run the container, "docker ps" will show the running container, "docker ps -a" will show all containers. ' +
    'docker rm <container_id> will remove the container. The id can be viewed using "docker ps" command. Use only the first 3-4 chars of the id. ' +
    'docker rmi <image_id> will remove the image. Image id can be viewed using "docker images" command (same 3-4 chars trick will work).\n' +
    'To run docker with port mapping, use the "-p" flag, e.g. "docker run -p 80:80 kitematic/hello-world-nginx". '
  );
}

export default function usingDockerTools() {
  delimeterMsg('USING DOCKER TOOLS');
  logF(usingDockerMashine);
  logF(usingDockerClient);
}