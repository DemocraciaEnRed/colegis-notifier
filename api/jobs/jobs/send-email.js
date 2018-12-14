const mailer = require('../../../services/nodemailer')

module.exports = (agenda) => {
  agenda.define('send-email', async (job, done) => {
    const {
      to,
      subject,
      template
    } = job.attrs.data

    const {
      NODEMAILER_HOST,
      NODEMAILER_USER,
      NODEMAILER_PASS,
      ORGANIZATION_NAME,
      ORGANIZATION_EMAIL } = process.env

    const config = {
      host: NODEMAILER_HOST,
      auth: {
        user: NODEMAILER_USER,
        pass: NODEMAILER_PASS
      }
    }

    const emailOptions = {
      from: `"${ORGANIZATION_NAME}" <${ORGANIZATION_EMAIL}>`, // sender address
      to, // list of receivers
      subject, // Subject line
      html: template // html body
    }

    mailer.sendEmail(config, emailOptions, done)
  })
}
