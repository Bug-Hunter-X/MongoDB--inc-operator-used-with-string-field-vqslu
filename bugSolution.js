```javascript
// Correct usage of $inc operator with a numeric field
db.collection.updateOne({"_id": 1}, {"$inc": {"numericValue": 1}});

//Alternative for string concatenation
db.collection.updateOne({"_id": 1}, {"$set": {"stringValue": stringValue + "1"}});
```