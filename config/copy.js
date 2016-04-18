module.exports = 
{
	builder__dev:
	{
		files:
		[
			{
				cwd : '<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>',
				src : ['**'],
				dest : '<%= builder.paths.dev %>',
				expand : true
			}
		]
	},
	builder__dist:
	{
		files:
		[
			{
				cwd : '<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>',
				src : ['**'],
				dest : '<%= builder.paths.dist %>',
				expand : true
			}
		]
	}
};