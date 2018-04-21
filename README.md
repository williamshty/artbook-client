# Web App for IS4302 Artbook

### Development Stack
><b style="color:#1BBC9B;background">Vue.js</b> as application framework
><b style="color:#674172;">Bootstrap</b> as styling library
><b style="color:#19B5FE;">Element UI</b> as components library
><b style="color:#DB0A5B;">Sass</b> for customized styling, you can find the scss files in `src/assets/sass`


### Build Setup

``` bash
# install dependencies
npm install

# compile sass code to css code
npm run compile:sass

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```

### To switch from connecting to virtual machine and connecting to local machine
#### find the constants file the stores paths
the file can be find in `src/const.js` 

#### Follow the instructions given in the comment to comment and  uncomment correct lines of code
``` javascript
// path to be used to connect middleware running on virtual machine
export const VM_PATH = "http://172.25.96.201:3000/" 
// path to be used to connect middleware running on local machine
export const LOCAL_PATH = "http://localhost:3000/"
// export const baseUrl = VM_PATH
// uncomment the line above and comment the line below to use middleware running on virtual machine
export const baseUrl = LOCAL_PATH
```
