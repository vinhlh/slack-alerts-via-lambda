provider "aws" {}

variable "sns_topic" {
  type = "string"
}

variable "apex_function_sentry" {
  type = "string"
}

data "aws_sns_topic" "healthcheck" {
  name = "${var.sns_topic}"
}

resource "aws_sns_topic_subscription" "lambda" {
  topic_arn = "${data.aws_sns_topic.healthcheck.arn}"
  protocol  = "lambda"
  endpoint  = "${var.apex_function_sentry}"
}
