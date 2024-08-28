const clientPromise = require('./mongodb');
const { ObjectId } = require('mongodb');

 
async function fetchAllPosts() {
    const client = await clientPromise;
    const db = client.db('yourDatabaseName');  
    const posts = await db.collection('posts').find({}).toArray();
    return posts;
}

 
async function fetchPostByID(id) {
    const client = await clientPromise;
    const db = client.db('yourDatabaseName');  
    const post = await db.collection('posts').findOne({ _id: new ObjectId(id) });
    return post;
}

module.exports = { fetchAllPosts, fetchPostByID };
