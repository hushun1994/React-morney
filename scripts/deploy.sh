#!/usr/bin/env bash

npm run build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add origin git@github.com:hushun1994/morney-website.git &&
git push -u origin master -f
cd -