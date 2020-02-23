import { delimeterMsg, logF, logToHTML } from "./utils";

function usingDockerMashine() {
  logToHTML('' +
    'Docker mashine is a tool that can be used to manage docker virtual mashines. Basic commands are: ' +
    '"docker-mashine ls", "docker-mashine start <mashine-name>", "docker-mashine stop <mashine-name>", ' +
    '"docker-mashine env <mashine-name>" and "docker-mashine ip <mashine-name>".' +
    'To use is, first open the "Docker quickstart window" terminal to launch the docker mashine.' +
    'This will bootstrap and start the Virtual box mashine with the default docker mashine.'
  );
}

export default function usingDockerTools() {
  delimeterMsg('USING DOCKER TOOLS');
  logF(usingDockerMashine);
}