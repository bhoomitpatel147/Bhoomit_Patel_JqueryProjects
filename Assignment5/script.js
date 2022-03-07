/*
    Assignment 05
*/

$(document).ready(function () {
    // your code here

    class ContentItem{
        uniqueId;
        name;
        description;
        category;

        constructor(uniqueId, name, description, category){
            this.uniqueId = uniqueId;
            this.name = name;
            this.description = description;
            this.category = category;
        }

        updateContentItem(uniqueId, name, description, category){
            if(this.uniqueId == uniqueId && name && description && category){
                this.uniqueId = uniqueId;
                this.name = name;
                this.description = description;
                this.category = category;
            }

        }

       

        

        toString(){
            return $('#content-item-list').append(`<div class="content-item-wrapper">
            <div id="content-item-${this.uniqueId}">
            <h4 class="name">${this.name}</h4>
            <p class="description">${this.description}</p>
            <div class="category">${this.category}</div>
            </div>
            </div>`);
            // return "ugdjsfkjs";
        }
    }
    
    let content = [
        {
            "uniqueId": 0,
            "name": "Bhoomit Patel",
            "description": "This the data of hackers and their details with the category.",
            "category": "White Hat Hacker"
        },
        {
            "uniqueId": 1,
            "name": "Kevin Mitnick",
            "description": "This the data of hackers and their details with the category.",
            "category": "Black Hat Hacker"
        },
        {
            "uniqueId": 2,
            "name": "Jonathan James",
            "description": "This the data of hackers and their details with the category.",
            "category": "Gray Hat Hacker"
        },
        {
            "uniqueId": 3,
            "name": "Martin",
            "description": "This the data of hackers and their details with the category.",
            "category": "White Hat Hacker"
        },
        {
            "uniqueId": 4,
            "name": "James Macinon",
            "description": "This the data of hackers and their details with the category.",
            "category": "Black Hat Hacker"
        }
    ];

    // let temp1 = new ContentItem();
    
    $.each(content, function(key, val){

        $('#content-item-list').append(`<div class="content-item-wrapper">
        <div id="content-item-${this.uniqueId}">
        <h4 class="name">${this.name}</h4>
        <p class="description">${this.description}</p>
        <div class="category">${this.category}</div>
        </div>
        </div>`);
    });

    $('h2').empty().text("Hacker Details");
    
    $('.content-item-wrapper').css({"border-style":"double","width":"420px","padding":"10px 10px","margin":"10px 0px"});


    // let x = temp1.toString;
    // let temp = new ContentItem("0","Bhoomit","Patel","Kiritbhai");
    // $.each(content, function(key, val){

    //     let temp = new ContentItem(val.uniqueId, val.name, val.description, val.category);
    //     let tempString = `${temp}`;
       
    // });

  
    // $('#content-item-list').append(x);
    // temp;
    // console.log(temp.toString);
    // let tempString = `${temp}`;
    // console.log(tempString);
});


