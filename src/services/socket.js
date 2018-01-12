import socket from 'socket.io-client'
import config from 'src/config'

const socketConfig = {
  reconnectionAttempts: 3,
}

function events(io) {
  io.on('connect', () => {
    console.log('Connected to socket server')
  })
  io.on('NEW_CURRENCY_VALUES', (values) => {
    console.log('NEW VALUES', values)
  })
  io.on('REMOVED_CURRENCY_IDS', (ids) => {
    console.log('OUTDATED IDS (should be removed from store)', ids)
  })
}

let handler

function disconnect() {
  if (handler) {
    handler.disconnect()
    handler = undefined
  }
}

function connect() {
  disconnect()
  handler = socket(config.API_URL, socketConfig)
  events(handler)
  return handler
}

function getHandler() {
  return handler
}

export default {
  connect,
  disconnect,
  getHandler,
}
