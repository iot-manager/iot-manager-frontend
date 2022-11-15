#!/bin/bash

PWD=`pwd`

docker run -itd --name iot-manager-frontend  \
  -p 8005:8005 --restart=always \
  -v ${PWD}:/data/src \
    node:14

