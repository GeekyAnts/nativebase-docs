SRC="NativeBase"
BRANCH="fix/v3-typings"
if [ ! -d "$SRC" ]; then
  # Take action if $DIR exists. #
  git clone https://github.com/GeekyAnts/NativeBase.git
fi
cd NativeBase
git checkout "$BRANCH"