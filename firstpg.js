
function next_btn(){

    user_name = document.getElementById("name_inp").value;

    if(user_name == ""){
        document.getElementById("next_pg").style.display = "none";
    }
    else{
        document.getElementById("next_pg").style.display = "inline-block";
    }

}




function next_pg(){

    localStorage.setItem("User_Name", user_name);
    window.location = "mainpg.html";

}
