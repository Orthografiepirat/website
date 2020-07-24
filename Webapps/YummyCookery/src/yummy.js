"use strict";

var recipes = [];
var recipeMap = new Map();
var unitTypes = new Set();

class Recipe{
    constructor(name, howto, ingredients){
        this.customId = name;
        this.name = name;
        this.howto = howto;
        this.ingredients = ingredients;
    }
}

//Einzelne Zutat, am besten auch in einer Übersicht bearbeitbar sein genauso wie unit
class Ingredient{
    constructor(){
        this.name = name;
        this.unit = unit;
        this.qty = qty;
    }
}

let handlerGUI = {
    setVisibleSection: function(param){
        if(param === "list"){
            document.getElementById("sectionList").style.display = "block";
            document.getElementById("sectionNew").style.display = "none";
            document.getElementById("sectionDisplaySingle").style.display = "none";
            
            this.setBackToBeEmpty("sectionList");

            for(let recipeKey in recipes){
                createGUI.readRecipesGUI(recipes[recipeKey].name, recipes[recipeKey].howto, recipes[recipeKey].ingredients);
            }

            for(let [key, value] of recipeMap){
                createGUI.readRecipesGUI(value.name, value.howto, value.ingredients);
            }

        }else if(param === "new"){
            document.getElementById("sectionList").style.display = "none";
            document.getElementById("sectionNew").style.display = "block";
            document.getElementById("sectionDisplaySingle").style.display = "none";

            this.setBackToBeEmpty("sectionNew");

            createGUI.createRecipeGUI();

        }else{
            document.getElementById("sectionList").style.display = "none";
            document.getElementById("sectionNew").style.display = "none";
            document.getElementById("sectionDisplaySingle").style.display = "block";

            createGUI.readSingleRecipeGUI();
        }
    },
    setBackToBeEmpty: function(elementToBeSetBack){
        document.getElementById(elementToBeSetBack).innerHTML = "";
    }
}

let createGUI = {
    //cRud - section List elements
    readRecipesGUI: function(name, howto, ingredients){
        let listSingleArticle = document.createElement("article");
        listSingleArticle.classList.add();

        let listSingleArticleName = document.createElement("input");
        listSingleArticleName.type = "text";
        //listSingleArticleName.isContentEditable = "false";
        listSingleArticleName.value = name;

        let listSingleArticleHowto = document.createElement("textarea");
        listSingleArticleHowto.value = howto;

        let listSingleEntryDivForIngredients = document.createElement("div");
        
        //schleife für alle zutaten des rezepts
        //durchsuche INGREDIENTS von RECIPE one by one
        for(let entry of ingredients){
            console.log(entry);
            let listSingleArticleIngredients = document.createElement("input");
            listSingleArticleIngredients.value = entry;
            //füge einzelne zutaten dem gesamt zutaten div hinzu
            listSingleEntryDivForIngredients.appendChild(listSingleArticleIngredients);
        }

        

        listSingleArticle.appendChild(listSingleArticleName);
        listSingleArticle.appendChild(listSingleArticleHowto);
        listSingleArticle.appendChild(listSingleEntryDivForIngredients);


        document.getElementById("sectionList").appendChild(listSingleArticle);
    },
    //Crud - section New elements
    createRecipeGUI: function(){
        let createSingleArticle = document.createElement("article");

        let createSingleArticleName = document.createElement("input");
        createSingleArticleName.id = "createNewRecipeName";
        
        let createSingleArticlehHowto = document.createElement("input");
        createSingleArticlehHowto.id = "createNewRecipeHowto";

        
        let createsingleArticleIngredients = document.createElement("input");
        createsingleArticleIngredients.id = "createNewRecipeIngredients";


        //Interaction with article
        let btnSave = document.createElement("button");
        btnSave.innerHTML = "Save";
        btnSave.addEventListener("click", createNewRecipe);


        createSingleArticle.appendChild(createSingleArticleName);
        createSingleArticle.appendChild(createSingleArticlehHowto);
        createSingleArticle.appendChild(createsingleArticleIngredients);
        createSingleArticle.appendChild(btnSave);

        document.getElementById("sectionNew").appendChild(createSingleArticle);
    },
    readSingleRecipeGUI: function(){
        let createSingleArticle = document.createElement("article");

        let createSingleArticleName = document.createElement("input");
        createSingleArticleName.id = "displaySingleRecipeName";
        
        let createSingleArticlehHowto = document.createElement("input");
        createSingleArticlehHowto.id = "displaySingleRecipeHowto";

        let createsingleArticleIngredients = document.createElement("input");
        createsingleArticleIngredients.id = "displaySingleRecipeIngredients";


        //Interaction with article um type erweitern?
        let btnDelete = this.createDeleteBtn("displaySingleRecipeName");


        createSingleArticle.appendChild(createSingleArticleName);
        createSingleArticle.appendChild(createSingleArticlehHowto);
        createSingleArticle.appendChild(createsingleArticleIngredients);
        createSingleArticle.appendChild(btnDelete);

        document.getElementById("sectionDisplaySingle").appendChild(createSingleArticle);
    },
    createDeleteBtn: function(getKeyFromThisElement){
        let btnDelete = document.createElement("button");
        btnDelete.innerHTML = "Delete";
        btnDelete.addEventListener("click", function(){
            let name = document.getElementById(getKeyFromThisElement).value; 
            deleteRecipe(name);
        });
        return btnDelete;
    }
    
}

//erstelle neues rezept und packe in liste/array
function createNewRecipe(){
    let name = document.getElementById("createNewRecipeName").value;
    let howto = document.getElementById("createNewRecipeHowto").value;
    let ingredients = document.getElementById("createNewRecipeIngredients").value;
    let newRecipe = new Recipe(name, howto, ingredients);
    recipes.push(newRecipe);
    recipeMap.set(newRecipe.customId, newRecipe);
}

//löscht rezept aus liste/array
function deleteRecipe(index){
    let deleteRecipe = recipeMap.delete(index);
    console.log(deleteRecipe);
    //let deletedOnes = recipes.splice(index, 1);
    //for (let deletedRecipe in deletedOnes){
    //    console.log("Gelöscht: " + deletedRecipe.name);
    //}
}

//create testdata
function testData(){
    let test1 = new Recipe("testname1", "howto1", ["ingredient1", "ingredient2in1"]);
    let test2 = new Recipe("testname2", "howto2", ["ingredients2"]);
    let test3 = new Recipe("testname3", "howto3", ["ingredients3"]);
    let test4 = new Recipe("testname4", "howto4", ["ingredients4"]); 
    recipes.push(test1);
    recipes.push(test2);
    recipes.push(test3);
    recipes.push(test4);
    recipeMap.set(test1.customId, test1);
    recipeMap.set(test2.customId, test2);
    recipeMap.set(test3.customId, test3);
    recipeMap.set(test4.customId, test4);
}

testData();