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
    const jim = new user(100, "Jim", {zipCode: 33180, streetAddress: "123 test street"});
    console.log(jim.toString());

    const newUser = await buildUser();
    console.log(newUser.toString());

    rl.close();
}

main();