console.log('asdasdasdasd');
var userList=[
    {
        userName:"haider",
        password:"123",
    },
];
var products=[
    {
        pName:"mmm",
        pId:0,
        pQuantity:5,
    },
]
var a =true;
var flag=false;
while(a){
    var input=prompt('SignIn / Login/ Quit');
    
    if (input==="signin"){
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
                console.log(`Press 1 to add product`);
                console.log(`Press 2 to buy products`);
                console.log(`Press 3 to sell product`);
                console.log(`Press 4 to sell products on discount`);
                console.log(`Press 5 to see Inventory`);
                let option=parseInt(prompt(" What u want to do 1/2/3/5 "));
                if(option==1)
                {
                    // var product=[{pName:"asd",pId:0,pQuantity:5},];
                    //  [
                    //      {pId,pName,pQuantity}
                    //  ];
                    let name=prompt(`Enter Product Name`);
                    let id=parseInt(prompt(`Enter Product ID`));
                    let quantity=parseInt(prompt(`How much  ${name} you want to add`));
                    products.push({pName:name,pId:id,pQuantity:quantity});
                 }
                if(option==5){
                    debugger
                    for(product of products){
                    console.log(` ID:${product.pId} NAME : ${product.pName} and  Quantity :${product.pQuantity} `);
                    }
                }
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
