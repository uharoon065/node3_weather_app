const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
}

const greet = (name="user",age)=> {
    console.log("hello " + name);
}
greet('usman')
greet()
greet('')
// setting a default parameter for destructring objects
const  myFun = ({label="your book",price=0 , stock=0} = {})=> {
    console.log(price ,stock,label);
}
// myFun(product)
myFun()