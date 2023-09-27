
function getMessage(){
    let age = prompt("Enter your age: ")
    
    if(age <= 16){
        console.log("Stay home, study, and get your drivers license")
    }else if(age == 17){
        console.log("I dont know what to say because the assignment doesnt clarify this age")
    }else if(age < 21){
        console.log("Have some fun, but not TOO much fun. You're still a young adult")
    }else{
        console.log("Have fun. But be responsible. You are in control of your life")
    }
}

getMessage()
