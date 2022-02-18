var userList=[
    {
        userName:"haider",
        password:"123",
    },
];
var input=prompt('SignIn / Login');
var a =true;
while(a){
    var input=prompt('SignIn / Login/ Quit');
    debugger

    if(input==="signin"){
        debugger
        userName=prompt("Enter UserName");
        password=prompt("enter Password");
        userList.push({username:userName , passowrd:password});
    }
    
    else if (input==='login'){
        let userNameLogin=prompt("Enter UserName");
        let passwordLogin=prompt("Enter Password");
        //userList.indexOf({username:userNameLogin});
        for(let i=0;i<userList.length;i++){
            if(userList[i].userName===userNameLogin && userList[i].password ===passwordLogin){
            console.log("welcome");
            }
        } 
    }
    else if (input==='quit')
    {
        a=false;
    }
    // var input=prompt('SignIn / Login/ Quit');

}
console.log("quit application");