#!/bin/bash

pyjsbuild $@
sudo rm -rf ../stack/apache2/htdocs/output
sudo cp -rf output ../stack/apache2/htdocs/
