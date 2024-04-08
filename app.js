const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  
  const itemNumber = movieLists[i].querySelectorAll("img").length;
 let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth/270);
    clickCounter++;
    if(itemNumber - (4 + clickCounter) + (4-ratio) >= 0){
      movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value
      - 300}px)`;
    }else{
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
    
  });

  console.log(movieLists[i].querySelectorAll("img").length);
});




const database = {
  "Dune 2": "Dune2",
  "Avatar 2": "Avatar2",
  "Represalii": "Represalii",
  "Top Gun 2": "TopGun2",
  "Venom": "Venom",
  "The Flash": "TheFlash",
  "Napoleon": "Napoleon",
  "Wonka": "Wonka",
  "Barbie": "Barbie",
  "Poor Things": "Poor Things",
  "Parasite": "Parasite",
  "Champions": "Champions",
  "Puppy Love": "Puppy love",
  "Strays": "Strays",
  "Casa Gucci": "Casa Gucci",
  "Love Again": "Love Again",
  "Let Love Grow": "Let Love Grow",
  "Robots": "Robots",
  "Maybe I Do": "Maybe i Do",
  "Sweet On You": "Sweet On You",
  "Brooklyn": "Brooklyn",
  "After": "After",
  "Katak": "Katak",
  "Migration": "Migration",
  "Wish": "Wish",
  "Mummies": "Mummies",
  "Minions 2": "Minions2",
  "Lightyear": "Lightyear",
  "Space Jam": "Space Jam",
  "The Fall Guy": "The Fall Guy",
  "Furiosa": "Furiosa",
  "Deadpool 3": "Deadpool 3",
  "Alien": "Alien",
  "Beetlejuice 2": "Beetlejuice2",
  "Joker 2": "Joker2",
  "Gladiator 2": "Gladiator 2",

  
}

const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        icon.onclick = ()=>{
            webLink = `https://www.google.com/search?q=${userData}`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        webLink = `${database[selectData]}.html`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}


const section = document.querySelector("section"),
        overlay = document.querySelector(".overlay"),
        showBtn = document.querySelector(".btn2"),
        closeBtn = document.querySelector(".close-btn");

       showBtn.addEventListener("click", () => section.classList.add("active"));

       overlay.addEventListener("click", () =>
        section.classList.remove("active")
      );

      closeBtn.addEventListener("click", () =>
        section.classList.remove("active")
      );

      