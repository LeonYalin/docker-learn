import { delimeterMsg, logF, log, logToHTML } from "./utils";

function installingDocker() {
  logToHTML('' +
    'In order to install Docker, you need to install Docker Toolbox for Windows 7/8, or Docker CE for Windows 10 / MAC.' +
    'In my Thinkpad laptop I needed to enable the Virtualization from BIOS: Security tab -> Inter Virtualization.' +
    'In the past, there was a Kitematic GUI tool bundled with Docer, now it is depricated and replaced by dashboard.');
}

export default function installations() {
  delimeterMsg('INSTALLATIONS');
  logF(installingDocker);
}