handlerGUI = {
    setListVisible : function() {
        document.getElementById("sectionList").style.display = "initial";
        document.getElementById("sectionNew").style.display = "none";
        document.getElementById("sectionDelete").style.display = "none";
    },
    setDeleteVisible : function() {
        document.getElementById("sectionList").style.display = "none";
        document.getElementById("sectionNew").style.display = "nooe";
        document.getElementById("sectionDelete").style.display = "initial";
    },
    setNewVisible : function() {
        document.getElementById("sectionList").style.display = "none";
        document.getElementById("sectionNew").style.display = "initial";
        document.getElementById("sectionDelete").style.display = "none";
    }
}

// toggle visible section of main navigation
function toggleVisibleMainSection() {

}