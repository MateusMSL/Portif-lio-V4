
btn_state_about = "desativado";
function ativar_sobremim(){
if(btn_state_about == "desativado"){

    alert("ainda nao funciona");
    document.getElementById("btn_sobremim").style.filter = "invert(1)";
    btn_state_about = "ativado";
    btn_state_projects = "ativado";
    ativar_projetos();
    
} else if (btn_state_about == "ativado"){

    document.getElementById("btn_sobremim").style.filter = "invert(0)";
    btn_state_about = "desativado";
}

}





btn_state_projects = "desativado";
function ativar_projetos(){
if(btn_state_projects == "desativado"){

    document.getElementById("btn_projetos").style.filter = "invert(1)";
    document.getElementById("background_projetos").style.display = "block";
    btn_state_projects = "ativado";
    btn_state_about = "ativado";
    ativar_sobremim();
    window.scrollTo(0, 500);
    
} else if (btn_state_projects == "ativado"){

    
    document.getElementById("btn_projetos").style.filter = "invert(0)";
    document.getElementById("background_projetos").style.display = "none";
    btn_state_projects = "desativado";
    window.scrollTo(0, 1);
}


}

function return_page(){
    
    window.scrollTo(0, 1);

    
}