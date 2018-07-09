install : ;@echo "installing packages..."; \
          npm install $



start :  ;@echo "babel run..."; \
         npm run babel-node -- src/bin/brain-games.js 


publish : ;@echo "publish..."; \
          npm publish 