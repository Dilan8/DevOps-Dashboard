variable "region" {
  type    = string
}

variable "repository_name" {
  description = "The name of the ECR repository"
  type        = string
}

variable "github_token" {
  description = "GitHub OAuth token with repo access"
  type        = string
  sensitive   = true
}