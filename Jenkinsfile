pipeline {
  agent any

  stages {  
    stage("Build and Deploy") {    
      steps {
      echo 'Building & deploying the application'
      sh 'cd /' //Enters root Directory
      sh 'sudo rm /CounterService/*' //Deletes all current files in the CounterService folder
      sh 'cp WebService.js /CounterService' // Copies the Web Service to the CounterService folder
      sh 'sudo pm2 delete all' // deletes all current running nodejs instances
      sh 'sudo pm2 start /CounterService/WebService.js' // starts WebService.js as a service
      }      
    }
  }
}
