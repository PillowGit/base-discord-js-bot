#!/usr/bin/env bash

if [[ $# > 1 ]]; then
    echo "Run with one or 0 arguments"
    exit 1
fi
if [[ $# == 1 ]]; then
    arg=$1
else 
    echo "Enter a number for one of the following run options: "
    echo ""
    echo "1. Run the bot code"
    echo "2. Deploy commands to test guilds"
    echo "3. Deploy commands globally"
    echo ""
    read arg
fi
clear
if [[ $arg == "1" ]]; then
    node index.js
elif [[ $arg == "2" ]]; then
    node test-deploy.js
elif [[ $arg == "3" ]]; then
    node global-deploy.js
else
    echo "Invalid argument"
    exit 1
fi