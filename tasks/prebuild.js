var fs = require('fs');
var path = require('path');

module.exports = function (grunt)
{
	grunt.registerTask('prebuild', 'Build the application component for the specified mode in the tmp directory', function (mode, target, setup)
	{
		//var options = this.options();
		var options = grunt.config('builder');
		
		if (mode === undefined)	mode = "dist";
		if (target === undefined) target = options.defaultTarget;
		if (target === undefined || target == null)
		{
			grunt.fail.warn("Build target not defined");
			return;
		}
		
		//console.log(options);

		var targetDir = path.join(process.cwd(), options.paths.source, target);
		if (grunt.file.isDir(targetDir))
		{
			var buildfile = path.join(targetDir, 'buildfile.json');
			if (grunt.file.isFile(buildfile))
			{
				var targetConfig = grunt.file.readJSON(buildfile);
				if (targetConfig)
				{
					if (targetConfig.type)
					{
						var builderName = 'build-' + targetConfig.type;
						if (grunt.task.exists(builderName))
						{
							/*
							grunt.event.on('prebuild_finished', function(buildName)
							{
								if (buildName == target)
									grunt.task.run("output:builder__h2:" + "Finished prebuilding '" + target); // + "' in mode '" + mode + "' with " + builderName);
							});
							*/
							// Run the corresponding builder
							//grunt.task.run("output:builder__h2:" + "Prebuilding target '" + target + "' in mode '" + mode + "' with " + builderName);
							grunt.task.run(builderName + ':' + mode + ':' + target);
						}
						else
						{
							grunt.fail.warn("No builder defined as '" + targetConfig.type + "'");
						}
					}
					else
					{
						grunt.fail.warn("No type is defined in target '" + target + "'");
					}
				}
			}
			else
			{
				grunt.fail.warn("Target '" + target + "' has no buildfile.js");
			}
		}
		else
		{
			grunt.fail.warn("Could not find target '" + target + "' in directory " + targetDir);
		}
		
	});
};
