#!/bin/sh
cd `dirname $0`

echo "###############################"
echo "   auroraOS-web  Installer     "
echo "   Copyright (C) nikachu2012   "
echo "###############################"
echo ""

a=`pwd`

echo -n "This software will be installed in the $a [Y/n]: "
read ANS

case $ANS in
  "" | [Yy]* )
    # yes
    echo ""
    ;;
  * )
    # no
    exit
    ;;
esac

