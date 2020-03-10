import { delimeterMsg, logF, logToHTML } from "./utils";

function usingKubernetes() {
  logToHTML('' +
    'Kubernetes is a tool designed for big production applications. It has multiple abilities that we cannot have with docker compose, like: ' +
    'Automatic configurable container management, failure handing and self-heal containers, clusters, scaling and load balancing, updating on the fly & more...' +
    'In order to install Kubernetes on the local machine, we have 2 options: "Minikube" or "Docker desktop - enable in settings". ' +
    'In Kubernetes, a cluster consists of one "master" and multiple "nodes". Every node can have multiple "pods". A pod can contain multiple containers. ' +
    'In addition, there are "services" that manage pods, for example with load balancing, updating, replacing containers or switching ip addresses. ' +
    'The consumer just have the ip address of a service, and it will point to the different pods and containers inside them. ' +
    ''
  );
}

function convertingFromDockerComposeToKubernetes() {
  logToHTML('' +
    'In order to work with Kubernetes, we have to provide it a config. This config can be given using 2 ways: "Compose on Kubernetes" or "Kompose". ' +
    'Compose on Kubernetes is build into Docker. It is called "stack" and Docker swarm is a tool that manages stacks. We can deploy a stack using ' +
    'command "docker stack deploy --orchestrator=kubernetes -c docker-compose.yml <stack_name>" ' +
    'If we are using kompose, we can run the "kompose convert" command. It will create editable .yaml files for each section in our docker-compose file. ' +
    'Key Kubernetes commands are : "kubectl version", "kubectl get [deployments|services|pods]", "kubectl run <my_chosen_name> --image <image_name>", ' +
    '"kubectl apply -f [file_name|folder_name]" to apply changes to running pod, "kubectl port-forward <pod_name>" <port:port> to map ports in localhost. ' +
    'Example flow:' +
    `
      kubectl run mynode --image=leonyalin/node
      kubectl get (deployments | pods) - will show our container
      -- To view it locally, need to map port 300 to 80, so we do: --
      kubectl port-forward <pod_id> 80:3000
      kubectl delete deployment mynode
    ` +
    ''
  );
}

export default function movingToKubernetes() {
  delimeterMsg('MOVING TO KUBERNETES');
  logF(usingKubernetes);
  logF(convertingFromDockerComposeToKubernetes);
}