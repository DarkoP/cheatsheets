# MongoDB

## Shell commands
```bash
show dbs
```

```bash
use <db>
```

```bash
show collections
```

## Basic Shell JavaScript Operations
```bash
db.auth()  
# If running in secure mode, authenticate the user.
```


```bash
db.collection.find()
# Find all documents in the collection and returns a cursor.
```

```bash
db.collection.insertOne()
# Insert a new document into the collection.
```

```bash
db.collection.insertMany()
# Insert multiple new documents into the collection.
```

```bash
db.collection.updateOne()
# Update a single existing document in the collection.
```

```bash
db.collection.updateMany()
# Update multiple existing documents in the collection.
```

```bash
db.collection.deleteOne()
# Delete a single document from the collection.
```

```bash
db.collection.deleteMany()
# Delete documents from the collection.
```

```bash
db.collection.drop()
# Drops or removes completely the collection.
```

```bash
db.collection.createIndex()
# Create a new index on the collection if the index does not exist; otherwise, the operation has no effect.
```

```bash
db.getSiblingDB()
```
