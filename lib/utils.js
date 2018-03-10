// exports.lookup = function (obj, field) {
// 	if (!obj) {
// 		return null;
// 	}
// 	var chain = field.split(']').join('').split('[');
// 	for (var i = 0, len = chain.length; i < len; i++) {
// 		var prop = obj[chain[i]];
// 		if (typeof(prop) === 'undefined') {
// 			return null;
// 		}
// 		if (typeof(prop) !== 'object') {
// 			return prop;
// 		}
// 		obj = prop;
// 	}
// 	return null;
// };


exports.parseObjectNotatrion = function(name) {
	var regex = /\w+\[(.+)\]/g;
	var p = regex.exec(name);
	if(!p) {
		return name;
	} else {
		return p[1];
	}
};