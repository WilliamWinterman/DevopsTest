pipeline {
  agent any

  stages {  
    stage("Build and Deploy") {    
      steps {
      echo 'Building & deploying the application'
      sh 'rm /CounterService/*' //Deletes all files in the CounterService folder.
      sh 'cp WebService.js /CounterService' // Copies the Web Service to the CounterService folder
      }      
    }
  }
}
