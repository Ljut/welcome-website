#!/bin/sh

$build_dir = "public/"

rm -r $build_dir

mkdir $build_dir

#rsync -av --exclude='$build_dir*' --exclude='*.sh' . $build_dir
rsync -av --exclude-from='buildignore.txt' . $build_dir