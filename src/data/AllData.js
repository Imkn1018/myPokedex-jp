// import gen1 from './gen1-jp.json';
// import gen2 from './gen2-jp.json';
// import gen3 from './gen3-jp.json';
// import gen4 from './gen4-jp.json';
// import gen5 from './gen5-jp.json';
// import gen6 from './gen6-jp.json';
// import gen7 from './gen7-jp.json';
// import gen8 from './gen8-jp.json';

const fs = require('fs');
// 読み込みもnodejsに任せればいいんでね？
// やり方がわからない？　read
// const gen9 = [
//   ...gen1,
//   ...gen2,
//   ...gen3,
//   ...gen4,
//   ...gen5,
//   ...gen6,
//   ...gen7,
//   ...gen8,
// ];

const readFile = (path) => {
  fs.readFile(path, 'utf8', function (err, data) {
    //エラーの場合はエラーを投げてくれる
    if (err) {
      throw err;
    }
    //ここに処理
    console.log(data);
  });
};

//使用例
readFile('gen1-jp.json');

// const createFile = (pathName, source) => {
//   const toJSON = JSON.stringify(source);
//   fs.writeFile(pathName, toJSON, (err) => {
//     if (!err) {
//       console.log('JSONファイルを生成しました');
//     }
//   });
// };

// createFile('newObj.json', gen9);
// console.log(gen9);
