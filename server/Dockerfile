
#
#
# Docker-izing Express App
#
#


#
# Basics of docker
#

# Docker is a platform that allows us to create, deploy and run applications in containers
# Simply put, instead of running whole Virutal Machines, we can run just the application with all its dependencies in a container

# Image - a snapshot
# Container - a running instance

# So we firstly either choose an existing image or create our own
# Then we can run the image - thus creating our container


#
# What is dockerfile?
#

# Simply put, it defines the how to set the image for the container
# Basically meaning which base image/s to use, what to copy, what commands to run etc
# Basically defining the build and start process of the container


#
# Base Image (BUILD TIME)
#

# The first thing to define when defining Dockerfile is base image
# Essentially, it just means taking some pre-existing image - like with node, and using at as base for our image
# In our case, we will use `node:18-alpine`
# Which is a pre-built image with node 18 and alpine linux
FROM node:18-alpine


#
# Working Directory (BUILD TIME)
#

# Next step is defining the current directory
# Similarly to just chaning with `cd`, it defines the current directory IN THE CONTAINER
# In our case, we will set it to `/app` (mostly used)
WORKDIR /app


#
# Copying of Dependencies Definitions (BUILD TIME)
#

# As we now have the base image and the directory set, next we copy the files from our local machine to the container
# We use `COPY` command for that, and we specify the source and destination
COPY package.json ./
COPY package-lock.json ./

# Now, we will not copy all of the files, because of CACHING
# Because docker builds image in layers
# So we might prefer to firstly copy the package files, install and then copy the other project files


#
# Dependencies Installation (BUILD TIME)
#

# Now as we have copied the package files, we can install the dependencies
# We use `RUN` command for that, which runs the command in the container
# Importantly the `RUN` command runs commands during the build process of the image
RUN npm install


#
# Project Files Copying (BUILD TIME)
#

# And now we can copy the project files
COPY index.js ./index.js
COPY src ./src


#
# Network Port (METADATA)
#

# For documenting the port, we use `EXPOSE`
# Importantly, this does basically nothing, it just documents the port that the container will use
EXPOSE 666


#
# Finally, launching the app (RUN TIME)
#

# So as we have define the image essentially, lastly, we specify what to run when the container starts
# This usually means starting the app\
# With command `CMD` - in our case, we will run `npm run start`
CMD ["npm", "run", "start"]
# As we can notice, `CMD` uses array - for each part of the command
