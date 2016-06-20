// 모듈을 추출합니다.
var crypto = require('crypto');

// 해시를 생성합니다.
var shasum = crypto.createHash('sha512');
shasum.update('1234');
var output = shasum.digest('hex');

// 출력합니다.
console.log('hello:', output);
