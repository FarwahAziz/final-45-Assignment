//Assignment:31
let username:string[]=["admin","daniyal","anas","bilal","umer"];

if(username.length === 0){
    console.log("we need to find some users");
}
else{
    username=[]   
    console.log(`All users have been removed`);

}
//Assignment 32

let currentuser:string[]=["Taha","UmeR","haRis","DaWood","DAniyal"];
let newuser:string[]=["adnan","hadi","UmeR","zayan","DAniyal" ];
newuser.forEach(newusername => {
    let lowercase:string=newusername.toLowerCase();
    if(currentuser.map(C_user=>C_user.toLowerCase()).includes(lowercase)){
        console.log(`This user name  ${newusername} is already existing`)
    }
    else {console.log(`The username ${newusername} is available`)}
});