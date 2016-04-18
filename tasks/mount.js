var fs = require('fs');
var path = require('path');

module.exports = function (grunt)
{
	grunt.registerTask('mount', 'Mount the build in the specified directory', function (mode, target)
	{
		grunt.task.run("output:h3:Mounting '" + target + "' in '" + mode + "'");
		// Clean the dev/dist directory
		grunt.task.run('clean:builder__' + mode);
		// Mount the resulting build into the dev/dist/test folder
		grunt.task.run('copy:builder__' + mode + ':' + target);
	});
}