echo "pulling from origin master..."

git checkout master

git pull origin master

echo "initiating build..."

npm run build

echo "restarting server..."

pm2 restart joke-me