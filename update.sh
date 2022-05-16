if [ ! -d ./www ]; then
    mkdir www/
    mkdir www/build/
    mkdir www/public/
fi

if [ ! -d ./old_build ]; then
    mkdir old_build/
    mkdir old_build/build/
    mkdir old_build/public/
fi

rm -rf old_build/build
rm -rf old_build/public

cp -rip www/build old_build/build
cp -rip www/public old_build/public
cp -rf www/.env.p* old_build/.env.p*

rm -rf www/build
rm -rf www/public

cp -rip build/ www/build/
cp -rip public/ www/public/
cp -rf .env.p* www/.env.p*
