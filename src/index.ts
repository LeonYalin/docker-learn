import installations from "./installations";
import usingDockerTools from "./usingDockerTools";
import hookingSourceCodeIntoContainer from "./hookingSourceCodeIntoContainer";
import communicatingBetweenDockerContainers from "./communicatingBetweenDockerContainers";
import managingContainersWithDockerCompose from "./managingContainersWithDockerCompose";

(function main() {
  installations();
  usingDockerTools();
  hookingSourceCodeIntoContainer();
  communicatingBetweenDockerContainers();
  managingContainersWithDockerCompose();
}());