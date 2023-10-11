class Stack{
    size;
    top;
    a = [];

    isEmpty(){
        return (this.top < 0 )
    }
    constructor(n){
        this.top = -1;
        this.size = n;
        this.a = new Array(this.size)

    }
    push(x){
        if(this.top >= this.size){
            console.log("stack overflow<br>");
            return false;
        }
        else
        {
            this.a[++this.top] = x;
            return true;
        }
    }

    pop()
    {
        if(this.top < 0 ){
            console.log("stack underflow<br>")
            return 0;
        }
        else{
            let x = this.a[this.top--];
            return x
        }
    }
}
 function reverse(str){
    let n = str.length;
    let obj = new Stack(n);
    let i;
    for(i=0;i<n;i++)
    obj.push(str[i]);
for(i = 0; i<n; i++){
    let ch = obj.pop();
    str[i] = ch;

}
 }
 let s = "My name is Himanshu shakya".split("");

 reverse(s);
 console.log("Reversed string is " + s.join(""))