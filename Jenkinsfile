pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                checkout scmGit(branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/narharigtm/Mern-Project.git']])
            }
        }
        stage('build & run'){
            steps{
                sh 'docker-compose up -d --build'
                sh 'docker ps'
            }
        }
    }
    post {
        success {
            echo 'Pipeline succeeded!'
           
        }
        failure {
            echo 'Pipeline failed!'
            sh 'docker-compose down'
        }
    }
}
