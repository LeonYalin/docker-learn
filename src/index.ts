import installations from "./installations";
import usingDockerTools from "./usingDockerTools";
import hookingSourceCodeIntoContainer from "./hookingSourceCodeIntoContainer";
import communicatingBetweenDockerContainers from "./communicatingBetweenDockerContainers";

(function main() {
  installations();
  usingDockerTools();
  hookingSourceCodeIntoContainer();
  communicatingBetweenDockerContainers();
}());