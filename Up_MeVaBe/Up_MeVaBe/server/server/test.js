//Encryption 
var _3DES = require('nodejs3des')
var str = _3DES.encrypt("admin", "Mặc định") //PjBSczoWdA4=
console.log(str)

var des = _3DES.decrypt("admin", str); //SMS
console.log(des)