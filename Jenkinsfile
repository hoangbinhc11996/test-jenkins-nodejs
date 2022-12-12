pipeline{
    agent any
    stages{
        stage("Clone"){
            steps{
                git "https://github.com/hoangbinhc11996/test-jenkins-nodejs.git"
            }
            post{
                always{
                    echo "========always========"
                }
                success{
                    echo "========cloning successfully========"
                }
                failure{
                    echo "========cloning failed========"
                }
            }
        }
    }
    post{
        always{
            echo "========always========"
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}