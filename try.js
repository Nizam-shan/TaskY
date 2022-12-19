const taskContainer = document.querySelector(".task__container");
const Delete = document.getElementById("Delete");

const globalStore=[];
const generateNewCard =(taskData) =>`
  <div class="col-sm-12 col-md-6 col-lg-4 " id="${taskData.id}">
    <div class="card">
      <div class="card-header d-flex justify-content-end gap-2">
        <button type="button" class="btn btn-outline-success" ><i class="fa-solid fa-pencil"></i></button>
        <button type="button" class="btn btn-outline-secondary" id="Delete" onclick="myfunction()"><i class="fa-solid fa-trash-can"></i></button>
      </div>
      <div class="card-body">
        <img src=${taskData.imageUrl} class="card-img-top" alt="...">
        <h5 class="card-title fw-bold text-primary mt-3 ">${taskData.taskTitle}</h5>
        <p class="card-text">${taskData.taskDescription}.</p>
        <a href="#" class="btn btn-primary">${taskData.taskType}</a>
      </div>
    </div>
  </div>
`;

function myfunction(){
  localStorage.removeItem("tasky");
 // updateLocalStorage();
  
}
// function myfunction  ()  {
//   const element = document.querySelectorAll(".card")
//   element.removeItem("tasky");
// };
const loadInitialCardData = () => {
  //loacal storage assign
  const getCardData = localStorage.getItem("tasky");
  // to format
  const {cards} = JSON.parse(getCardData);
  //loop
  cards.map((cardObject) =>{
    taskContainer.insertAdjacentHTML("beforeend",generateNewCard(cardObject));
    //update
    globalStore.push(cardObject);
  }
)

};

const saveChanges = () =>{
  const taskData = {
    id : `${Date.now()}`,
    imageUrl : document.getElementById("imageurl").value,
    taskTitle : document.getElementById("tasktitle").value,
    taskType : document.getElementById("tasktype").value,
    taskDescription : document.getElementById("taskdescription").value,
  }
  taskContainer.insertAdjacentHTML("beforeend",generateNewCard(taskData));
  globalStore.push(taskData);
  localStorage.setItem("tasky",JSON.stringify({cards:globalStore}));
};
