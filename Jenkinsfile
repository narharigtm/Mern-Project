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
        always {
            // Clean up Docker containers
            sh 'sudo docker-compose down'
        }
        success {
            // Post-build actions to execute on success
            slackSend channel: '#jenkins-testing',
                      color: 'good',
                      message: "ci-pipeline-sucess-of project"
        }
        failure {
            // Post-build actions to execute on failure
            slackSend channel: '#jenkins-testing',
                      color: 'danger',
                      message: "ci-pipeline-failed-of project""
        }
    }
}
