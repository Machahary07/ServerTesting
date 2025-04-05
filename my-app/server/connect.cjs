const {MongoClient} = require('mongodb');
require('dotenv').config({path: "./config.env"});

async function main() {
    const Db = process.env.ATLAS_URI
    const client = new MongoClient(Db)
    
    try {
        await client.connect()
        const collections = await client.db("TodoApp").collections()
        collections.forEach((collection) => {
            console.log(collection.s.namespace.collection)
            }
        )   
    } catch (error) {
        console.log("Error: ", error.message)
    } finally {
        await client.close()
    }
}

main()

//terminal: node connect.js