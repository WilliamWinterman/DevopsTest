pipeline {
  agent any

  stages {  
    stage("Build and Deploy") {    
      steps {
      echo 'building & deploying the application'
      sh 'sudo rm -r /CounterService/*' //Deletes all files in the CounterService folder.
      sh 'cp WebService.js /CounterService' // Copies the Web Service to the CounterService folder
      }      
    }
  }
}
