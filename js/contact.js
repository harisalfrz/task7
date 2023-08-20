function submitData(){
    let name= document.getElementById("input-name").value;
    let email= document.getElementById("input-email").value;
    let phone= document.getElementById("input-phone").value;
    let subject= document.getElementById("input-subject").value;
    let message= document.getElementById("input-message").value;
    
    if (name == ""){
        return alert("nama harus disini!");
    } else if (email== ""){
        return alert("email harus disini!");
    } else if (phone== ""){
        return alert("phone harus disini!");
    } else if (subject== ""){
        return alert("subject harus disini!");
    } else if (message== ""){
        return alert("message harus disini!");
    }

    let emailReceiver= "harisalfariz23@gmail.com";

    let a= document.createElement("a");
    a.href= 
    `mailto:${emailReceiver}
    ?subject=${subject}
    &body= Hello, my name ${name}, ${message}. Contact me at ${phone}`;

    a.click();

    let data= {name, email, phone, subject, message};
    console.log(data);
}