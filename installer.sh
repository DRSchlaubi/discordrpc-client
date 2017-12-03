clear
function pause(){
   read -p "$*"
}
echo This is the official installer of Schlaubi\'s Discord RPC Client
echo to use his client you need nodeJS
echo This installer may have some bugs
echo
echo Press \<Enter\> to continue.
echo Hold \<Ctrl\> and press \<C\> to quit.
pause ''
clear
echo \###################################
echo \# Looking \for previous intallation \#
echo \###################################
if [ -d "discordrpc-client" ]; then
  echo The client is already installed press \<Enter\> to reinstall
  pause ''
  rm -rf discordrpc-client
  clear
fi
echo \##########################
echo \# Updating package lists \#
echo \##########################
sudo apt update
echo \###########################
echo \# Installing requirements \#
echo \###########################
sudo apt install -y git npm
echo \###########################
echo \# Downloading client     \#
echo \###########################
git clone https://github.com/DRSchlaubi/discordrpc-client.git
cd discordrpc-client
DIR=`pwd`
echo \#####################################
echo \# Installing nodeJS dependencies    \#
echo \#####################################
npm install

echo Installation has finished
echo now please edit $DIR/config.json
echo And start client using "node app.js"
exit
