const configs = require('./configs.json')
const { IncomingWebhook } = require('@slack/client')

const webhook = new IncomingWebhook(configs.slackHook)

const notify = async event => {
  const {
    AlarmName: name,
    AlarmDescription: description,
    NewStateValue: stateValue,
    NewStateReason: stateReason
  } = JSON.parse(event.Records[0].Sns.Message)

  webhook.send({
    channel: '#sentry-alerts',
    attachments: [
      {
        pretext: description,
        title: name,
        color: '#f73d0a',
        footer: 'slack-alerts-via-lambda',
        fields: [
          {
            title: stateValue,
            value: stateReason,
            short: false
          }
        ]
      }
    ]
  })
}

module.exports = notify
