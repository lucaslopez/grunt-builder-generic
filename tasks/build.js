var fs = require('fs');
var path = require('path');

module.exports = function (grunt)
{
	grunt.registerTask('build', 'Build the application component for the specified mode', function (mode, target, setup)
	{
		var options = grunt.config('builder');
		
		if (mode === undefined)	mode = "dist";
		if (target === undefined) target = options.defaultTarget;
		if (target === undefined || target == null)
		{
			grunt.fail.warn("Build target not defined");
			return;
		}
		
		grunt.event.on('prebuild_finished', function(buildName)
		{
			if (buildName == target)
			{
				grunt.task.run('mount:' + mode + ':' + target);
				grunt.task.run('clean:builder__tmp');
				grunt.event.removeAllListeners('prebuild_finished');
				grunt.task.run("output:builder__h1:" + "Finished building " + buildName + "!");
			}
		});
		
		grunt.task.run("output:builder__h1:" + "Building target '" + target + "' in mode '" + mode);
		grunt.task.run('clean:builder__tmp');
		grunt.task.run('prebuild:' + mode + ':' + target + ':' + setup);
	});
};
