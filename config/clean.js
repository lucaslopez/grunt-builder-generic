
module.exports = 
{
	builder__tmp :
	{
		src : ['<%= builder.paths.tmp %>']
	},
	builder__tmp_target :
	{
		src : ['<%= builder.paths.tmp %>/<%= grunt.task.current.args[0] %>']
	},
	builder__dev :
	{
		src : ['<%= builder.paths.dev %>']
	},
	builder__dist :
	{
		src : ['<%= builder.paths.dist %>']
	},
};
