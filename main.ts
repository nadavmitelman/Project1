const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question: string): Promise<string> {
  return new Promise(resolve => rl.question(question, resolve));
}

class user {
    id: number;
    name: string;
    address: location;

    constructor(id:number, name:string, address:location){
        this.id=id;
        this.name=name;
        this.address=address;
    }
    toString(): string{
        return ("User name is: " + this.name +"\nUser id is: " 
            +this.id +"\nUser address is: " 
            +this.address.streetAddress +", " +
            this.address.zipCode
        );
    }
}

interface location {
    zipCode: number;
    streetAddress: string;
}

class file {
    fileName: string;
    accessibleTo: permission;

    constructor(fileName:string, accessibleTo:permission){
        this.fileName=fileName.toLowerCase();
        this.accessibleTo=accessibleTo;
            
    }
    
    toString():string{
        let temp:string = '';
        this.accessibleTo.priv ? temp="requires" : temp="does not require";
        return(this.fileName+" has an access level of "+this.accessibleTo.level+
        ", belongs to "+this.accessibleTo.department+", and  "+ temp +" privileged access");

    }

}
interface permission {
    level: number;
    department: string;
    priv: boolean;
}

async function buildFile(): Promise<file> {
  let req: permission = { level: 0, department: '', priv: false };
  const name = await ask("Enter file's name: ");
  req.level = parseInt(await ask("Enter minimum required access level: "));
  req.department = await ask("What department is this file from? ");
  req.priv = (await ask("Does this file require privileged access? (y/n): ")) == 'y';
  const temp = new file(name, req);
  console.log(name + " created");
  return temp;
}

async function buildUser(): Promise<user> {
    let address: location = {streetAddress:'', zipCode:0};

    const name = await ask("Enter user's name: ");
    const id = parseInt(await ask("Enter user id: "));
    address.streetAddress = await ask("Enter user street address: ");
    address.zipCode = parseInt(await ask("Enter user zip code: "));

    const temp = new user(id, name, address);
    console.log(name + " created");
    return temp;
}


async function main() {
    
}

main();