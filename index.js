let arr=[]
let sum=0;
// console.log('asdasdasdasd');
var userList=[
    {
        userName:"haider",
        password:"123",
    },
];
var products=[];
var a =true;
var flag=false;
while(a){
    var input=prompt('SignIn / Login/ Quit');
    
    if (input==="signin")
    {
        userName=prompt("Enter UserName");
        password=prompt("enter Password");
        userList.push({userName:userName , password:password});
        console.log(`UserName :${userName} -- Password: ${password}`);
    }
    else if (input==='login'){ 
        let userNameLogin=prompt("Enter UserName");
        let passwordLogin=prompt("Enter Password");
        z=true;

        for( element of userList)
        {
            if( element.userName===userNameLogin && element.password===passwordLogin)
            {
                flag=true;
                console.log(`welcome ${element.userName}`);
                while(z)
                {
                console.log(`Press 1 to sell product`);
                console.log(`Press 2 to buy products`);
                console.log(`Press 5 to see Inventory`);
                let option=parseInt(prompt(" What u want to do 1/2/5 "));
                if(option==1)
                {
                    let name=prompt(`Enter Product Name`);
                    let id=parseInt(prompt(`Enter Product ID`));
                    let cost=parseInt(prompt(`Enter Cost of product`));
                    let discount=parseInt(prompt('Discount on the product ( in %)'));
                    let quantity=parseInt(prompt(`How much  ${name} you want to add`));
                    products.push({pName:name, pId:id, pCost:cost ,pQuantity:quantity, pDiscount:discount});
                    console.log(`${products.pName} item added in the list`);
                }
                if(option==5)
                {
                    for(let product of products)
                    {
                    console.log(`ID:${product.pId} NAME:${product.pName} Price:${product.pCost} and  Quantity :${product.pQuantity} Discount:${product.pDiscount} `);
                    }
                }
                if(option==2)
                {
                    console.log(`---LIST---`)
                    for(let product of products)
                    {
                        console.log(`ID:${product.pId} NAME:${product.pName} Price:${product.pCost} and  Quantity :${product.pQuantity} Discount:${product.pDiscount} `);
                    }
                    let itemToBuy=parseInt(prompt(`Enter the ID of product you want to buy`));
                    for(z of products)
                    {
                        if (z.pId===itemToBuy)
                        {
                            if(z.pQuantity>0)
                            {
                                buyQuantity=parseInt(prompt(`how much you need `));
                                z.pQuantity = z.pQuantity-buyQuantity;
                                arr.push({Name:z.pName, Qty:buyQuantity , cost:sum});
                                console.log(`---------------------your cart-------------`);
                                let dCost=z.pCost*z.pDiscount/100;
                                sum =sum + (dCost * buyQuantity);
                                console.log(arr);
                                console.log(`Name:${z.pName} Qty:${buyQuantity}Total :Rs ${sum}`);
                                console.log(`thanks for buying `);
                                
                                
                            }else
                            {
                                console.log(`Out of stock`);
                            }
                        }
                     
                    }
                
                    if (z.pId!=itemToBuy){
                        console.log(`sorry these is no such product in the store`);
                    }
                    }
                    let m=prompt("logout ?");
                    if (m==='yes'){
                        z=false; 
                    }
                }
            }
        }
        if (flag==false)
        {
            console.log("invalid Username/ PAssword");
        }
    }
    else if (input==='quit')
    {
        a=false;
    }
}
console.log("quit application");
