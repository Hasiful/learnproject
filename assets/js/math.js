function test(n){
    function a(){
        return n % 3 == 0
    }

    function b(){
        return n % 5 == 0
    }

    if(a() && b()){
        console.log(true)
    }
    else{
        console.log(false)
    }
}
test(20)