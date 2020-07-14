"use strict"

let recipes = [];
testData();

let handlerGUI = {
    setVisibleSection: function(param){
        if(param === "list"){
            document.getElementById("sectionList").style.display = "block";
            for(let i = 0; i <= recipes.length; i++){
                listCreateSingleArticle(recipes[i].name, recipes[i].description, recipes[i].howto);
            }
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

class Recipe{
    constructor(name, description, howto){
        this.name = name;
        this.description = description;
        this.howto = howto;
    }
}

//create html
function listCreateSingleArticle(name, description, howto){
    let listSingleArticle = document.createElement("article");
    listSingleArticle.classList.add();

    let listSingleArticleName = document.createElement("input");
    listSingleArticleName.type = "text";
    listSingleArticleName.isContentEditable = "false";
    listSingleArticleName.value = toString(name);

    let listSingleArticleDescription = document.createElement("textarea");
    listSingleArticleDescription.isContentEditable = "false";
    listSingleArticleDescription.value = toString(description);

    let listSingleArticleHowto = document.createElement("textarea");
    listSingleArticleHowto.isContentEditable = "false";
    listSingleArticleHowto.value = toString(howto);

    listSingleArticle.appendChild(listSingleArticleName);
    listSingleArticle.appendChild(listSingleArticleDescription);
    listSingleArticle.appendChild(listSingleArticleHowto);

    document.getElementById("sectionList").appendChild(listSingleArticle);
}
/*
let createGUI = {
    listCreateSingleArticle: function(name, description, howto){
        let listSingleArticle = document.createElement("article");
        listSingleArticle.classList.add();

        let listSingleArticleName = document.createElement("input");
        listSingleArticleName.type = "text";
        listSingleArticleName.isContentEditable = "false";
        listSingleArticleName.value = toString(name);

        let listSingleArticleDescription = document.createElement("textarea");
        listSingleArticleDescription.isContentEditable = "false";
        listSingleArticleDescription.value = toString(description);

        let listSingleArticleHowto = document.createElement("textarea");
        listSingleArticleHowto.isContentEditable = "false";
        listSingleArticleHowto.value = toString(howto);

        listSingleArticle.appendChild(listSingleArticleName);
        listSingleArticle.appendChild(listSingleArticleDescription);
        listSingleArticle.appendChild(listSingleArticleHowto);

        document.getElementById("sectionList").appendChild(listSingleArticle);
    }
}*/


//create testdata
function testData(){
    let test1 = new Recipe("testname1", "description1", "howto1");
    let test2 = new Recipe("testname2", "description2", "howto2");
    let test3 = new Recipe("testname3", "description3", "howto3");
    let test4 = new Recipe("testname4", "description4", "howto4"); 
    recipes.push(test1);
    recipes.push(test2);
    recipes.push(test3);
    recipes.push(test4);
}