var userList=[
    {
        userName:"haider",
        password:"123",
    },
];
var a =true;
var flag=false;
while(a){
    var input=prompt('SignIn / Login/ Quit');
    
    if(input==="signin"){
        userName=prompt("Enter UserName");
        password=prompt("enter Password");
        userList.push({userName:userName , password:password});
        console.log(`UserName :${userName} -- Password: ${password}`);
        }
    else if (input==='login'){
        let userNameLogin=prompt("Enter UserName");
        let passwordLogin=prompt("Enter Password");
        for( element of userList){
            if( element.userName===userNameLogin && element.password===passwordLogin){
            flag=true;
            console.log(`welcome ${element.userName}`);
            let option=prompt(" What u want to do 1/2/3 ");
            console.log(`Press 1 to add product`);
            console.log(`Press 2 to add product`);
            console.log(`Press 3 to add product`);
            if(option==1){}
            if(option==2){}
            if(option==3){}
            }
        }
        if (flag==false){
            console.log("invalid Username/ PAssword");
        }
    }
    else if (input==='quit')
    {
        a=false;
    }
}
console.log("quit application");
