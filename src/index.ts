import installations from "./installations";
import usingDockerTools from "./usingDockerTools";
import hookingSourceCodeIntoContainer from "./hookingSourceCodeIntoContainer";
import communicatingBetweenDockerContainers from "./communicatingBetweenDockerContainers";
import managingContainersWithDockerCompose from "./managingContainersWithDockerCompose";
import movingToKubernetes from "./movingToKubernetes";

(function main() {
  installations();
  usingDockerTools();
  hookingSourceCodeIntoContainer();
  communicatingBetweenDockerContainers();
  managingContainersWithDockerCompose();
  movingToKubernetes();
}());