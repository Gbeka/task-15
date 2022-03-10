

function getJson() {

  fetch("db.json")
    .then(
        (res) => {
            return res.json();
})

    .then(
        (data) => {

 const container=document.createElement("div");
container.className="container";

       data.forEach
      ((post)=> {

const item=document.createElement("div");
item.className="item";
container.appendChild(item);
        
    
     const img=document.createElement("img");
     const src=img.setAttribute("src",post.img);
     img.className="img";
     item.appendChild(img)


    const name=document.createElement("div");
    name.innerHTML=post.title;
    name.className="name";
   


    const price=document.createElement("div");
    price.innerHTML=post.price;
    price.className="price";
   
const priceName=document.createElement("div");
priceName.classList="priceName";
priceName.appendChild(name);
priceName.appendChild(price);
item.appendChild(priceName);

const desc=document.createElement("div");
desc.innerHTML=post.desc;
desc.className="desc";
item.appendChild(desc);





     })



document.querySelector(".box").appendChild(container);

    })





 .catch((error) => {
      console.log(error);
    });
}

getJson();

































//     fetch("db.json")
//     .then(res=>
//         res.json())
//     .then(data=>
//         document.getElementById("item-1").innerHTML=JSON.stringify(data[0].title)
//     .replaceAll('"', ""));

 


//     fetch("db.json")
//     .then(res=>
//         res.json())
//     .then(data =>
//         document.getElementById("item-2").innerHTML=JSON.stringify(data[0].desc).replaceAll('"', ""));
        


// fetch("db.json")
//         .then(res=>
//             res.json())
//         .then(data =>

//             const image=document.createElement("img");

//             image.setAttribute("src",JSON.stringify(data[0].img))

           
            
//             );
        






        


            
     
       
            
            
      