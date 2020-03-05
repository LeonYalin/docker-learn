import { delimeterMsg, logF, logToHTML } from "./utils";

function usingDockerfile() {
  logToHTML('' +
    'Docker images can consist of several layers. For example, the ubuntu layer, and then a database layer ect..' +
    'Every layer has a unique id and can be reused between different images. The layers are Read-Only (R/O). ' +
    'This is called the Layered File System. Docker containers that are created from images have their own container layer,' +
    'which is R/W and can be used for writing files, for example writing new data to the database. ' +
    'The Docker key commands are: "from" - the basic image we start with <image_name>, maintainer - <name>, copy - <from_dir> <to_dir>, "env" - environment variables, ' +
    '"workdir" - <workdir_name>, run - which command we want to run against a source code, "expose" - which post we expose, "entrypoint" - run arguments. ' +
    `Example of the dockerfile:
      FROM node:latest
      LABEL author="Leon Yalin"

      ENV NODE_ENV=production
      ENV PORT=3000
      ARG workdir=/var/www

      COPY . \${workdir}
      WORKDIR \${workdir}

      RUN npm install
      EXPOSE $PORT
      ENTRYPOINT ["npm", "start"]` +
    'We can use the official Docker Misrosoft VSCode extension to work with docker images, containers & dockerfiles.'
  );
}

function buildingAndPublishingImages() {
  logToHTML('' +
    'After we have a Dockerfile, we can use it to build an image from it. We can build the image using the command: ' +
    '"docker build" -f <dockerfile_path> -t <tag_name> <ctx_dir>, e.g. "docker build -t leonyyalin/node . "' +
    'After we\'ve built our image, we can run it, e.g. using "docker run -d  -p 8080:3000 leonyalin/node". The -d stands for ' +
    '"detached mode" and it is used to free the terminal from container output, and be able to use terminal as usual. ' +
    'We can have multi-stages dockerfiles that build multiple containers. This is useful for building one image from another. ' +
    'To push the image we created to the docker hub, we just type "docker push leonyyalin/node"'
  );
}

export default function buildingCustomImagesWithDockerfile() {
  delimeterMsg('BUILDING CUSTOM IMAGES WITH A DOCKERFILE');
  logF(usingDockerfile);
  logF(buildingAndPublishingImages);
}