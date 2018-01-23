#!/bin/sh

if git describe --exact-match --tags HEAD
then
    echo "Found tag"
      tag=$(git describe --exact-match --tags HEAD)
    echo "Found tag $tag"
    yarn electron-pack
    ghr -u divanvisagie $tag dist/fretboard*
else
    echo "Tag not found"
fi