[< Back](/README.md)

# Docker

Run MongoDB on Docker
```bash
docker run --name mongodb -d -p 27017:27017 mongo
```

Go to Container
```bash
docker exec -it <CONTAINER_NAME> bash
# Mongo
mongosh
```

