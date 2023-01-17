[< Back](/README.md)

# cURL

## GET API call
```bash
curl -v http://localhost:3000/api/getAll
```

```bash
curl -v http://localhost:3000/api/getOne/1000
```

## POST (create a resource)
```bash
curl -X POST -H "Content-Type: application/json" \
    -d '{"name": "MyName", "age": 5}' \
    http://localhost:3000/api/post

# OR

curl -X POST -H "Content-Type: application/json" -d '{"name": "MyName", "age": 5}' http://localhost:3000/api/post
```

## PUT (update or replace the specified resource )
```bash
curl -X PUT -d '{"name": "MyName2", "age": 6}' http://localhost:3000/api/update/1000
```

## DELETE (removes the specified resource)
```bash
curl -X DELETE http://localhost:3000/api/update/1000
```

## Authentication
```bash
curl -X GET -H "Authorization: Bearer {ACCESS_TOKEN}" "http://localhost:3000/api/post"
```