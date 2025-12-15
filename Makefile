.PHONY: install dev build deploy clean

install:
	npm install

dev:
	npm start

build:
	npm run build
	cp -r ./build/* ./docs/

deploy: build
	git add docs/
	git commit -m "Deploy latest build"

clean:
	rm -rf build node_modules
