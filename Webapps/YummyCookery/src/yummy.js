"use strict";

var recipes = [];

class Recipe{
    constructor(name, howto, ingredients){
        this.name = name;
        this.howto = howto;
        this.ingredients = ingredients;
    }
}

let handlerGUI = {
    setVisibleSection: function(param){
        if(param === "list"){
            document.getElementById("sectionList").style.display = "block";
            document.getElementById("sectionNew").style.display = "none";
            document.getElementById("sectionDelete").style.display = "none";
            
            this.setBackToBeEmpty("sectionList");

            for(let recipeKey in recipes){
                createGUI.listCreateSingleArticle(recipes[recipeKey].name, recipes[recipeKey].howto, recipes[recipeKey].ingredients);
            }

        }else if(param === "new"){
            document.getElementById("sectionList").style.display = "none";
            document.getElementById("sectionNew").style.display = "block";
            document.getElementById("sectionDelete").style.display = "none";
        }else{
            document.getElementById("sectionList").style.display = "none";
            document.getElementById("sectionNew").style.display = "none";
            document.getElementById("sectionDelete").style.display = "block";
        }
    },
    setBackToBeEmpty: function(elementToBeSetBack){
        document.getElementById(elementToBeSetBack).innerHTML = "";
    }
}

let createGUI = {
    listCreateSingleArticle: function(name, howto, ingredients){
        let listSingleArticle = document.createElement("article");
        listSingleArticle.classList.add();

        let listSingleArticleName = document.createElement("input");
        listSingleArticleName.type = "text";
        //listSingleArticleName.isContentEditable = "false";
        listSingleArticleName.value = name;

        let listSingleArticleHowto = document.createElement("textarea");
        listSingleArticleHowto.value = howto;

        let listSingleArticleIngredients = document.createElement("input");
        listSingleArticleIngredients.value = ingredients;

        listSingleArticle.appendChild(listSingleArticleName);
        listSingleArticle.appendChild(listSingleArticleHowto);
        listSingleArticle.appendChild(listSingleArticleIngredients);

        document.getElementById("sectionList").appendChild(listSingleArticle);
    },
    setBackToBeEmpty: function(elementToBeSetBack){
        document.getElementById(elementToBeSetBack).innerHTML = "";
    }
}


//create testdata
function testData(){
    let test1 = new Recipe("testname1", "howto1", "ingredients1");
    let test2 = new Recipe("testname2", "howto2", "ingredients2");
    let test3 = new Recipe("testname3", "howto3", "ingredients3");
    let test4 = new Recipe("testname4", "howto4", "ingredients4"); 
    recipes.push(test1);
    recipes.push(test2);
    recipes.push(test3);
    recipes.push(test4);
}

testData();