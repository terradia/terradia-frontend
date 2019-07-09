# terradia-frontend

How to use the dockerfile:

You have to get a docker hub account, its free !

    sudo docker login

**First download it**

    sudo docker run -it -d flopic/terradia-frontend 

**Then run it**

     sudo docker run -d -p 3003:3000 flopic/terradia-frontend:latest

**Run it in web browser**

    localhost:3003


Source for the dockerfile: https://medium.com/@khwsc1/a-simple-react-next-js-app-development-on-docker-6f0bd3f78c2c
