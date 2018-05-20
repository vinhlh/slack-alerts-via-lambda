run:
	DEV=true node functions/sentry/run.js

run-lambda:
	cat functions/sentry/event.json | apex invoke sentry

deploy:
	apex deploy

apply:
	apex infra apply --var-file=live.tfvars
