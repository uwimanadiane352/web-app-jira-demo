locals {
  app_code = <<EOT
console.log("Hello, Terraform Web App!");
EOT
}

resource "local_file" "webapp_app" {
  filename = "${path.module}/webapp/src/index.js"
  content  = local.app_code
}

output "webapp_file_path" {
  value       = local_file.webapp_app.filename
  description = "The full path to the web application's index.js file."
}
