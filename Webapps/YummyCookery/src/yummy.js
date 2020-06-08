handlerGUI = {
    setVisibleSection: function(param){
        if(param === "list"){
            document.getElementById("sectionList").style.display = "block";
            document.getElementById("sectionNew").style.display = "none";
            document.getElementById("sectionDelete").style.display = "none";
        }else if(param === "new"){
            document.getElementById("sectionList").style.display = "none";
            document.getElementById("sectionNew").style.display = "block";
            document.getElementById("sectionDelete").style.display = "none";
        }else{
            document.getElementById("sectionList").style.display = "none";
            document.getElementById("sectionNew").style.display = "none";
            document.getElementById("sectionDelete").style.display = "block";
        }
    }
}


//database methods
//read json database and convert to objects