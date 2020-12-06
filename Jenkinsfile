pipeline {
  agent any

  stages {  
    stage("Build and Deploy") {    
      steps {
      echo 'Building & deploying the application'
      sh 'sudo rm /var/www/CounterService/code/WebService.js' //Deletes current webservice file in the CounterService folder
      sh 'sudo cp WebService.js /var/www/CounterService/code' // Copies the Web Service to the CounterService/code folder
      sh 'sudo pm2 delete all' // deletes all current running nodejs instances
      sh 'sudo pm2 start /var/www/CounterService/code/WebService.js' // starts WebService.js as a service
      }      
    }
  }
}
