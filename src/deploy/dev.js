import moment from 'moment';
import { execSync } from 'child_process';

const dateTime = moment().format("MM/DD/YYYY HH:mm:ss");

try {
  execSync(
    `cd ../form-topsolid-deploy && git checkout desarrollo &&  cp -r ../form-topSolid/dist/. ./ && git add . && git commit -m "Send to master at ${dateTime}" && git push origin desarrollo --force`,
    { stdio: [0, 1, 2] }
  );
  console.log("Envio Correcto");
} catch (err) {
  console.log("Error. Nada que hacer");
}
