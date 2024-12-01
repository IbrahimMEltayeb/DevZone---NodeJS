const users = [{
    "id" : 1,
    "name" : "Omar",
    "specializn" :"CS"
},
{
    "id" : 2,
    "name" : "Ali",
    "specializn" :"HR"
},
{
    "id" : 3,
    "name" : "Mai",
    "specializn" :"PR"
}
];

const tasks = [{
    "userId" : 1,
    "tasks" : {t1 : "Pray", t2 :"Coding", t3 :"Watch UCL Match"}
},
{
    "userId" : 2,
    "tasks" : {t1 : "Review Payroll", t2 : "send Emails", t3 :"Watch UCL Match", t4 :"Play"}
},
{
    "userId" : 3,
    "tasks" : {t1 : "Give a talk", t2 : "Meet client"}
}
];

  function fetchUserData(userId) {
    return new Promise((resolve, reject)=>{
        console.log(`Fetching data for user ${userId}...`);
        setTimeout(() => {
          const user = users[userId - 1];
          if (user) resolve(user);
          else reject('User not found');
        },2000);
    })
  }
  function fetchUserTasks(userId) {
    return new Promise((resolve, reject)=>{
        console.log(`Fetching tasks for user ${userId}...`);
        setTimeout(() => {
            if (users[userId-1]){
                const Tasks = tasks.filter(t => t.userId === userId)
                const userTasks = Tasks[0].tasks
                if (userTasks) resolve(userTasks);
            }
            else reject('User tasks not found');
        },2500);
    })
  }
  
  console.log('Start Fetching data');
  // Recieve user's ID
  let userID = 2

  fetchUserData(userID).then(user => {
      console.log(`User's Name: ${JSON.stringify(user.name)} & specialization : ${JSON.stringify(user.specializn)}`);
    }).catch(err => {
        console.log(`ERROR: ${err}`);
    });

  fetchUserTasks(userID).then(userTasks => {
    console.log("User's tasks : ", userTasks);
    }).catch(err => {
        console.log(`ERROR: ${err}`);
    });