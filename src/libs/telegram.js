import TelegramBot from 'node-telegram-bot-api'
import db from 'libs/db'

const botToken = db.config.get('botToken').value()

export default new TelegramBot(botToken, { polling: true })
