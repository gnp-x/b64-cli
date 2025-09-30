import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

console.log(`
 ▄██          ▄█▄▀           
  ██        ▄█▀              
  ██▄████▄ ▄█████▄      ▄██  
  ██    ▀████▀  ▀██▄   ████  
  ██     ████     ██ ▄█▀ ██  
  ██▄   ▄████▄   ▄███▀   ██  
  █▀█████▀  █████████████████
                        ██   
                        ██   
  encoder    /     decoder
                        `);
while (true) {
  console.log("1. Encode");
  console.log("2. Decode");
  console.log("3. Exit");
  const choice = await rl.question("Enter your choice: ");
  switch (choice) {
    case "1":
      const encode = await rl.question("Enter string to encode: ");
      const encoded = btoa(encode);
      console.log(`
▄▄▄ . ▐ ▄  ▄▄·       ·▄▄▄▄  ▄▄▄ .·▄▄▄▄  
▀▄.▀·•█▌▐█▐█ ▌▪ ▄█▀▄ ██· ██ ▀▄.▀·██· ██ 
▐▀▀▪▄▐█▐▐▌██ ▄▄▐█▌.▐▌▐█▪ ▐█▌▐▀▀▪▄▐█▪ ▐█▌
▐█▄▄▌██▐█▌▐███▌▐█▌.▐▌██. ██ ▐█▄▄▌██. ██ 
 ▀▀▀ ▀▀ █▪·▀▀▀  ▀█▄▀▪▀▀▀▀▀•  ▀▀▀ ▀▀▀▀▀• 
 
                                                       
${encoded}

        `);
      break;
    case "2":
      const decode = await rl.question("Enter string to decode: ");
      const decoded = atob(decode);
      console.log(`
·▄▄▄▄  ▄▄▄ . ▄▄·       ·▄▄▄▄  ▄▄▄ .·▄▄▄▄  
██· ██ ▀▄.▀·▐█ ▌▪ ▄█▀▄ ██· ██ ▀▄.▀·██· ██ 
▐█▪ ▐█▌▐▀▀▪▄██ ▄▄▐█▌.▐▌▐█▪ ▐█▌▐▀▀▪▄▐█▪ ▐█▌
██. ██ ▐█▄▄▌▐███▌▐█▌.▐▌██. ██ ▐█▄▄▌██. ██ 
▀▀▀▀▀•  ▀▀▀ ·▀▀▀  ▀█▄▀▪▀▀▀▀▀•  ▀▀▀ ▀▀▀▀▀• 
                                                       
                                                       
${decoded}

`);
      break;
    default:
      process.exit(1);
  }
}
