//this is the container consider as row 
const taskContainer = document.querySelector(".taskContainer");
// obtain values form the user
let globalStorage=[];
const generateNewCard =(taskData)=>`        
<div class="col-md-6 col-lg-4 mt-2" >
<div class="card ">
<div class="card-header d-flex justify-content-end">
<button type="button" class="btn btn-success" mx-2  ><i class="fa-solid fa-pencil"></i></button>
<button type="button" class="btn btn-danger" id=${taskData.id} onclick="deleteCard.apply(this, arguments)"><i class="fa-solid fa-trash" id=${taskData.id} onclick="deleteCard.apply(this, arguments)" ></i></button>
</div>
<img src=${taskData.imageUrl} class="card-img-top" alt="logo">
<div class="card-body">
<h5 class="card-title">${taskData.taskTitle}</h5>
<p class="card-text">${taskData.taskDescription}</p>
<button type="button" class="btn btn-warning mx-2 float-end d-flex justify-content-spacebetween">${taskData.taskType}</button>
</div>
<div class="card-footer  ">
<button type="button" class="btn btn-primary mx-2 float-end">OPENTASK</button>
</div>
</div>
</div> 
</div>
`
const loadInitialCardData =()=>{
  // store the card data inside the cardDetails 
   getCardData= localStorage.getItem("Tasky");
    const {cards}= JSON.parse(getCardData); 
    cards.map((cardObject) => {
      taskContainer.insertAdjacentHTML("beforeend", generateNewCard(cardObject));
      globalStorage.push(cardObject);
    })   
};
const saveChanges = () => {
  const taskData = {
    id:`${Date.now()}`,
    imageUrl: document.getElementById("imgurl").value,
    taskTitle: document.getElementById("tasktitle").value,
    taskType: document.getElementById("tasktype").value,
    taskDescription: document.getElementById("description").value,
  };
  console.log(taskData);
  // after getting the data inset the html code inside the card!!
 

  taskContainer.insertAdjacentHTML("beforeend", generateNewCard(taskData));
    globalStorage.push(taskData);
  localStorage.setItem("Tasky",JSON.stringify({cards:globalStorage}));
// alert("your card created successfully!!,welcome to seenisparrow tasky❤️💡");
};
const deleteCard=(event)=>{
  event = window.event;
  const targetId = event.target.id;
  const tagName = event.target.tagName;

  globalStorage = globalStorage.filter((cardObject) => cardObject.id !==targetId);

  localStorage.setItem("Tasky", JSON.stringify({cards:globalStorage}));

  if (tagName === "BUTTON"){
    return taskContainer.removeChild(event.target.parentNode.parentNode.parentNode);
  }
  else{
    return taskContainer.removeChild(event.target.parentNode.parentNode.parentNode.parentNode);
  }

};





 