vue-cli-plugin-movefiles
==========================

[![npm](https://img.shields.io/npm/dm/vue-cli-plugin-movefiles.svg)]()
[![npm](https://img.shields.io/npm/v/vue-cli-plugin-movefiles.svg)]()

vue-cli3 插件，copy 文件

### Features

* 从源文件夹（source）复制文件至 目的地 (dest)

### Installation

```shell
vue add movefiles
```

### Usages

1、package.json & vue.config.js 分别配置
```json
"scripts": {
  "movefiles": "vue-cli-service movefiles",
},

pluginOptions: {
  movefiles: {
    source: './dist/*',
    dest: './home',
  },
},
```

2、package.json
```json
"scripts": {
  "testmf": "vue-cli-service movefiles --source=./dist/* --dest=./testhome",
  "prodmf": "vue-cli-service movefiles --source=./dist/* --dest=./prodhome",
}
```

3、command line
```shell
npx vue-cli-service movefiles --source='./dist/*' --dest='./home'
```

### Issues

Submit the issues if you find any bug or have any suggestion.

### Contribution

Fork the repository and submit pull requests.

### Release Notes

see CHANGELOG

### LICENSE

[![npm](https://img.shields.io/npm/l/vue-cli-plugin-movefiles.svg)]()

