pipeline {
  agent any

  stages {  
    stage("Deploy") {    
      steps {
      echo 'Deploying the application'
      sh 'sudo cp WebService.js /var/www/CounterService/code' // Copies/overwrites the WebService.js to the CounterService/code folder
      sh 'sudo pm2 delete all || true' // deletes all current running nodejs instances
      sh 'sudo pm2 start -i max /var/www/CounterService/code/WebService.js' // starts WebService.js as a service in cluster mode
      
      }
    }
    
    stage("Build") {    
      steps {
      echo 'Building the application inside a container'
      sh 'sudo docker ps -a | grep counterserviceapp:1.0 | cut -d " " -f1 | xargs docker stop || true' // stops all containers created from counterserviceapp image.
      sh 'sudo docker ps -a | grep counterserviceapp:1.0 | cut -d " " -f1 | xargs docker rm || true'  // removes all containers created from counterserviceapp image.
      sh 'sudo docker run -d -p 81:80 counterserviceapp:1.0' // starts a new container from the counterserviceapp image and maps it to port 81
      }
    }

    stage ("Test") {
      steps {
     echo 'Testing the application'
        sh '''
     #!/bin/bash
     if [ $(curl -w "%{http_code}\n" http://localhost:80/getRequest -o /dev/null -s) = "200" ]; #checking that the status code is 200
     then 
     echo "Application is running"
     else 
     echo "Application is not running"
     fi'''
         
       }      
     }
   }  
 }
