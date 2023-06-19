const redis = require("redis")
const publisher = redis.createClient()

publisher.connect()

publisher.on('connect', async () => {
  console.log("publisher active")
  await publisher.publish('mehmetaliakdemir', 'Hello World!') // PUBLISH
})

publisher.on("error", error => {
  console.error(error)
})

