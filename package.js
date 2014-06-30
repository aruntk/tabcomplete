/* 
* @Author: tk
* @Date:   2014-06-12 13:51:42
* @Last Modified by:   tk
* @Last Modified time: 2014-06-19 03:29:40
* @Email: aruntknambiar@gmail.com 
*/
Package.describe({
summary: "tabcomplete"
});
Package.on_use(function (api, where) {
	api.use(['jquery'], 'client');
	api.add_files(['lib/tabcomplete.js'], 'client');
});
