


const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}



export async function authenticate(email,password){
    const credentials = await fetch("http://localhost:3000/users");
    const credArr = await credentials.json();
    const tok=generateString(10)
    const requestOptions={
        method: 'PUT',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify( { email: "amodh.mandloi@quovantis.com",password: "am1dh" })
    }
    
    let userObj={"email":email,"tok":tok}
    
    let logger=false;
   
    credArr.map(async (item,index) => {
        if (item.email === email && item.password === password) {
            localStorage.setItem("user",JSON.stringify(userObj))
            logger=true
        }
      });

    

    
  
}