import { delimeterMsg, logF, logToHTML } from "./utils";

function theLayeredFileSystem() {
  logToHTML('' +
    'Docker images can consist of several layers. For example, the ubuntu layer, and then a database layer ect..' +
    'Every layer has a unique id and can be reused between different images. The layers are Read-Only (R/O). ' +
    'This is called the Layered File System. Docker containers that are created from images have their own container layer,' +
    'which is R/W and can be used for writing files, for example writing new data to the database. ' +
    'In order to write something to the container layer, we will use Volumes. '
  );
}

function containersAndVolumes() {
  logToHTML('' +
    'Volume is a special type of directory in a container that is mapped to a host filesystem. Volume can be shared and reused' +
    'among containers. Updating the image or deleting a container won\'t affect the data volume. ' +
    'Docker gives the default location for each volume. It can be viewed using the "docker inspect mycontainer" command. ' +
    'It can also be overiden by using the -v host_dir:container_dir, e.g. "docker run -p 8080:3000 -v $(pwd):var/www node"' +
    'When removing a container, you can also remove its volume by typing "docker rm -v <container_id>". ' +
    'The cool thing about volumes is that we can link our source code to container and run it there, even without the required env.' +
    'For example, we can go to the source code folder and run the command "docker run -p 8080:3000 -v $(pwd):var/www -w "/var/www" node npm start".' +
    'Additional example for cmd: "docker run -it -p 80:3000 -v %cd%:/var/www -w /var/www node sh".' +
    'This will link the current directory to the container, set it as current directory (using the -w option) and run the "npm start" command.' +
    'And we don\'t have the nodejs to be installed our our machine! Think about some complex installations, like APS.NET or JAVA...' +
    'One more use case is to develop locally and to test the STAGING/PRODUCTION environments on docker containers.' +
    ''
  );
}

export default function hookingSourceCodeIntoContainer() {
  delimeterMsg('HOOKING SOURCE CODE INTO A CONTAINER');
  logF(theLayeredFileSystem);
  logF(containersAndVolumes);
}