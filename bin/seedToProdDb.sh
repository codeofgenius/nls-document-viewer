#! /bin/bash

BASE_DIR="nls-document"
DOCUMENT_DIR=$BASE_DIR"/document"

# init
rm -rf $BASE_DIR

# git clone latest
git clone git@github.com:codeofgenius/nls-document.git $BASE_DIR

# seeding to local db
pnpm prisma:prod:db:seed

# clean up
rm -rf $BASE_DIR
