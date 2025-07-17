module "vpc" {
  source = "./modules/vpc"
  region = var.region
}

module "ecr" {
  source          = "./modules/ecr"
  repository_name = var.repository_name
}

terraform {
  backend "s3" {
    bucket         = "terraform-state-bucket-sre-dashboard"
    key            = "env/dev/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-locks"      
    encrypt        = true
  }
}

module "codepipeline" {
  source         = "./modules/codepipeline"
  project_name   = "react-app"
  aws_region     = "us-east-1"
  github_owner   = "Dilan8"
  github_repo    = "DevOps-Dashboard"
  github_branch  = "WHR_01_UI_In"
  github_token   = var.github_token
  ecr_repository = var.repository_name
  dockerhub_username = var.dockerhub_username
  dockerhub_password = var.dockerhub_password
}