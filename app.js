const redis = require("redis")
const client = redis.createClient()

client.connect()


client.on('connect', async () => {
  try {
    console.log('Connected to Redis Server')


    await client.set("username", "mehmetaliakdemir") // SET

    const settedData = await client.get("username") // GET 
    console.log("settedData ---->", settedData)

    const existData = await client.exists("username") // EXIST
    console.log("existData ---->", existData)

    const listener = (message, channel) => console.log(`Message sent by channel ${channel}:  ${message}`) // SUBSCRIBE 
    await client.subscribe('mehmetaliakdemir', listener)

    console.log('Subscribed to channel "mehmetaliakdemir"')

  } catch (error) {
    console.log("error -->", error)
  }
})

client.on('error', (err) => {
  console.log('Redis Client Error -->', err)
})


