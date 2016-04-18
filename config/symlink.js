module.exports = 
{
	builder__dev:
	{
		files :
		[
			{
				expand : true,
				overwrite : false,
				cwd : '<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>',
				src : ['*'],
				dest : '<%= builder.paths.dev %>/'
			}
		]
	}
}