SRC="NativeBase"
BRANCH="v3-pre-beta"
if [ ! -d "$SRC" ]; then
  # Take action if $DIR exists. #
  git clone https://github.com/GeekyAnts/NativeBase.git
fi
git pull origin "$BRANCH"
cd NativeBase
git checkout "$BRANCH"