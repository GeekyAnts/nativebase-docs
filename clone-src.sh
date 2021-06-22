SRC="NativeBase"
BRANCH="development"
if [ ! -d "$SRC" ]; then
  # Take action if $DIR exists. #
  git clone https://github.com/GeekyAnts/NativeBase.git
fi
cd NativeBase
git pull origin
git checkout "$BRANCH"
git pull origin "$BRANCH"
yarn