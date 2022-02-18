var userList=[
    {
        userName:"haider",
        password:"123",
    },
];
var a =true;
while(a){
    var input=prompt('SignIn / Login/ Quit');
    if(input==="signin"){
        userName=prompt("Enter UserName");
        password=prompt("enter Password");
        userList.push({username:userName , passowrd:password});
        console.log(`UserName :${userName} -- Password: ${password}`);
    }
    
    else if (input==='login'){
        let userNameLogin=prompt("Enter UserName");
        let passwordLogin=prompt("Enter Password");
        //userList.indexOf({username:userNameLogin});
        for(let i=0;i<userList.length;i++){
            if(userList[i].userName===userNameLogin && userList[i].password ===passwordLogin){
            // console.log("welcome");
            
            }
            else{console.log("invalid Email or Password");}
        } 
    }
    else if (input==='quit')
    {
        a=false;
    }
    // var input=prompt('SignIn / Login/ Quit');

}
console.log("quit application");
