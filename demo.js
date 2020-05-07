function a(...args){
    console.log(...args)
}

a({a:1, b:2})
a([1,2,3])
a(()=>{})