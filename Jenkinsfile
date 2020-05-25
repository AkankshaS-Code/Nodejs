
  //Jenkins file only to tutorial example
pipeline {
  agent any
    
  tools {nodejs "NodeJS-Build"}
    
  stages {
        
    stage('Cloning Git') {
      steps {
        git 'https://github.com/AkankshaS-Code/Nodejs'
      }
    }
        
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
     
    stage('Test') {
      steps {
         sh 'npm test'
      }
    }      
  }
