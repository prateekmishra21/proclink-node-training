const logout = () => {
  localStorage.clear();
  window.location.href = "index.html";
};

const printAllTasks = (tasks) => {
  var finalHtml = "";
  tasks.map((task, index) => {
    var taskId = task._id;
    taskId = taskId.toString();
    finalHtml += `<tr>
                    <td>${index + 1}</td>
                    <td onclick='updateTaskStatus("${taskId}", ${
      task.isCompleted
    })' style = 'text-decoration: ${
      task.isCompleted ? "line-through" : "none"
    }; cursor:pointer;' >${task.task}</td>
                    <td>
                    <i style = "cursor:pointer; margin-right:10px; color:red" class="fa-solid fa-trash" 
                    onclick='deleteTask("${taskId}")' ></i
                    ><i class="fa-regular fa-pen-to-square"></i>
                    </td>
                </tr>`;
  });

  document.getElementById("todo_id").innerHTML = finalHtml;
};

const getAllTasks = async () => {
  var userData = localStorage.getItem("userData");
  userData = JSON.parse(userData);
  var url = `http://localhost:4000/api/tasks?userId=${userData._id}`;
  var response = await fetch(url);
  response = await response.json();
  printAllTasks(response.data);
};

const isAuthenticated = async () => {
  var token = localStorage.getItem("token");
  var url = `http://localhost:4000/api/is-auth?token=${token}`;
  if (token) {
    var response = await fetch(url);
    response = await response.json();
    if (response.status === false) {
      window.location.href = "index.html";
    } else {
      var userData = localStorage.getItem("userData");
      userData = JSON.parse(userData);
      document.getElementById("user_id").innerText = "Hi !" + userData.name;
      getAllTasks();
    }
  } else {
    window.location.href = "index.html";
  }
};

isAuthenticated();

const addNewTask = async () => {
  var element = document.getElementById("todo_input_id");
  var userData = localStorage.getItem("userData");
  userData = JSON.parse(userData);
  var obj = {
    userId: userData._id,
    task: element.value,
  };

  element.value = "";

  var url = `http://localhost:4000/api/tasks`;
  var response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  response = await response.json();
  getAllTasks();
};

const deleteTask = async (taskId) => {
  var url = `http://localhost:4000/api/tasks?_id=${taskId}`;
  var response = await fetch(url, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  getAllTasks();
};

const updateTaskStatus = async (taskId, currentStatus) => {
  console.log(taskId, currentStatus);
  var obj = { isCompleted: true };
  if (currentStatus === true) {
    obj.isCompleted = false;
  }

  var url = `http://localhost:4000/api/tasks?_id=${taskId}`;
  var response = await fetch(url, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  getAllTasks();
};
