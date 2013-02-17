#!/bin/bash

S3_CFG="$HOME/.s3cfg-sinkkala"
S3_DEST=s3://v2.sinkkala.fi
s3cmd -c $S3_CFG sync --delete-removed --recursive --acl-public public/* $S3_DEST

# put .s3cfg-sinkkala: acl_public = True
#s3cmd setacl --acl-public --recursive $S3_DEST

