import socket from 'socket.io-client'
import config from 'src/config'

const socketConfig = {
  reconnectionAttempts: 3,
}

function events(io) {
  io.on('connect', () => {
    console.log('Connected to socket server')
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
