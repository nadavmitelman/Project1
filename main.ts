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
            +this.address.streetAddress +" \n" +
            this.address.zipCode
        );
    }
}
function buildUser():user{
    let name:string;
    let id:number;
    let address:location = {streetAddress:'',zipCode:0};
    
    name=prompt("Enter user's name") ||'';
    id=parseInt(prompt("Enter user id")||'');
    address.streetAddress=prompt("Enter user street address")||'';
    address.zipCode = parseInt(prompt("Enter user zip code")||'');
    
    const temp=new user(id,name,address);
    console.log(name + " created");
    return temp;
}


interface location {
    zipCode: number;
    streetAddress: string;
}


const jim= new user(100,"Jim",{zipCode: 33180,streetAddress: "123 test street"});
console.log(jim.toString());

const newUser=buildUser();
console.log(newUser.toString());