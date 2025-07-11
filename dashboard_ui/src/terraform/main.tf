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