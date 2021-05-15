var currentDay = $("#currentDay");
var container = $(".container");
currentDay.text(moment().format("MMMM Do YYYY"));

var currentHour = moment().hour();

var hourArray=["8AM","9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var militaryHourArray=[8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

for (let i = 0; i < militaryHourArray.length; i++) {
    
  var time = ""
    if(currentHour === militaryHourArray[i]){
        time = "present";
    }

    if(currentHour > militaryHourArray[i]){
        time = "past";
    }

    if(currentHour < militaryHourArray[i]){
        time = "future";
    };


    container.append(`
    <div class="time block row">
        <div class="col-sm-1 hour">
         ${hourArray[i]}
        </div>
        <div class="col-sm-10">

          <textarea name="" id="textarea" class="tasks form-control w-100 ${time}"></textarea>

        </div>
        <div class="col-sm-1">
          <button class="saveBtn"><span class="oi oi-lock-locked mr-2"></span></button>
        </div>
      </div>
    `);
}

var renderTasks = function(){
  var tasks = localStorage.getItem('tasks');
  //document.querySelectorAll("tasks").textContent = tasks;
  //document.getElementsByClassName("tasks").innerHTML = tasks;
}
renderTasks();

//var taskValue = document.querySelectorAll("tasks").value;
var taskValue = document.getElementsByClassName("${time}").value;
var saveButton = document.getElementsByClassName("saveBtn");  
for (let i=0; i<saveButton.length; i++){
  saveButton[i].addEventListener('click', function(event){
    event.preventDefault();
    console.log("test")

    localStorage.setItem("${time}", JSON.stringify(taskValue));
    //localStorage.setItem("tasks", JSON.stringify(taskValue));
    
})};
