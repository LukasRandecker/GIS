window.onload = function(){
var box=0; 
linebreak(box); //code must executed after 4 inputs in shop, row is full after 4
buildStoreBox("Chipotle-Chilipulver","Mexico", "3,00", 3.5, 30, 0,box ); 
buildStoreBox("Muskatnuss","Mexico", "3,00", 5, 30, 1,box);
buildStoreBox("Kreuzkümmel","Mexico", "3,00", 5, 30, 1,box );
buildStoreBox("Kreuzkümmel","Mexico", "3,00", 3.5, 30, 1,box );
box++; //increment to add new row of items 
linebreak(box); 
buildStoreBox("Kreuzkümmel","Mexico", "3,00", 3.5, 30, 1,box );
buildStoreBox("Kreuzkümmel","Mexico", "3,00", 3.5, 30, 1,box );
}

//code must executed after 4 inputs in shop, row is full after 4
function linebreak(box){
    var mainContainer=document.getElementById("shop"); //connect to the shop 
    var newContent=document.createElement("div"); //create a div what is gona be used for a new row of spices 
    newContent.id="shop_container"+box; 
    newContent.className="shop_cont";
    mainContainer.appendChild(newContent); //add new row 
}

function drawName(name){
    if(name.length<=12)
        return name+"<br><br>"; 
    else 
        return name; 
}

//designe changes according to availability 
function available_check(available){
    if(available==1)
        return "<div><span class='availability' style='color: green'>Lieferbar</span></div> <div><button id='in_shop_button_g' class='in_shop_button'>"; 
    else
         return "<div><span class='availability' style='color: red'>nicht Lieferbar</span></div> <div><button class='in_shop_button' id='in_shop_button_r'>"; 
}

//draw stars according to rating
function addStars(rating){
    let string=""; 
    if((rating%1)==0){
        for(let i=0; i<rating; i++)
            string=string+"<img src='img/star.png' alt='voller Stern'>"; 
    }
    else{
        for(let i=0; i<(Math.floor(rating / 1)); i++) //Math.floor generated with AI (Chat GPT)
            string=string+"<img src='img/star.png' alt='voller Stern'>"; 
        string=string+"<img src='img/half_star.png' alt='halb voller Stern'>"
    }
    return "<div class='shop_productinfo_stars'>"+string+"</div>"; 
}

//write innnerHTML code to add new box/card of a spice
function buildStoreBox(name, origin, price, rating, num_ratings, available, box){
    var mainContainer=document.getElementById("shop_container"+box); 
    var newContent=document.createElement("div"); 
    newContent.className="shop_box"; 
    newContent.innerHTML= `<div class="shop_porductpicture"><img src="img/Produktfotos/`+name+`.png" alt="Produktfoto: Dill"></div>
    <div class="shop_productinfo">
        <div class="shop_productinfo_header">
            <div class="shop_productinfo_origin" > 
            <h3> `+drawName(name)+`</h3>
                <p>`+origin+`</p>
            </div>
            <div class="shop_productinfo_evaluation" > 
                `+addStars(rating)+`
                <div><p>aus `+num_ratings+` Bewertungen</p></div> 
            </div>
        </div>
        <div class="shop_productinfo_footer">   
            <div class="shop_productinfo_price">
                <h1>`+price+`€</h1>
                <span class="shop_productinfo_price_100">pro 100g</span>
            </div>
            <div>
                `+available_check(available)+`
                        <div class="innertext_button">hinzufügen</div> 
                        <div><img class="shoppingcart" src="img/shopping-cart-svgrepo-com.svg" alt="Warenkorb"></div>
                    </button>
                </div>
                
            </div>
        </div>    
    </div>`; 
  

    mainContainer.appendChild(newContent); 
}; 

