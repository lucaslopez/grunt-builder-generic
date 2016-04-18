module.exports =
{
	builder__h1 :
	{
		before :
		{
			mode : 'log',
			func : 'writeln',
			before : '',
			text : '************************************************************************************\n',
			after : '************************************************************************************',
			color : 'magenta',
			styles: ['bold'],
			extras: []
		},
		content :
		{
			mode : 'log',
			func : 'writeln',
			before : '>> ',
			after : ' <<',
			color: 'white',
			styles: ['bold']
		},
		after :
		{
			mode : 'log',
			func : 'writeln',
			before : '',
			text : '************************************************************************************\n',
			after : '************************************************************************************',
			color : 'magenta',
			styles: ['bold'],
			extras: []
		}
	},
	builder__h2 :
	{
		before :
		{
			mode : 'log',
			func : 'writeln',
			before : '',
			text : '************************************************************************************\n',
			after : '************************************************************************************',
			color : 'cyan',
		},
		content :
		{
			mode : 'log',
			func : 'writeln',
			color : 'white',
			bold : false,
			before : '>> ',
			after : ' <<'
		},
		after :
		{
			mode : 'log',
			func : 'writeln',
			before : '',
			text : '************************************************************************************\n',
			after : '************************************************************************************',
			color : 'cyan',
		}
	},
	builder__h3 :
	{
		before :
		{
			mode : 'log',
			func : 'writeln',
			text : '************************************************************************************',
			color : 'green'
		},
		content :
		{
			mode : 'log',
			func : 'writeln',
			color : 'white',
			before : '>> ',
			after : ' <<'
		},
		after :
		{
			mode : 'log',
			func : 'writeln',
			text : '************************************************************************************',
			color : 'green'
		}
	},
	builder__h4 :
	{
		before :
		{
			mode : 'verbose',
			func : 'writeln',
			color : 'yellow',
			text : '************************************************************************************'
		},
		content :
		{
			mode : 'verbose',
			func : 'writeln',
			color : 'white',
			before : '>> ',
			after : ' <<'
		},
		after :
		{
			mode : 'verbose',
			func : 'writeln',
			color : 'yellow',
			text : '************************************************************************************',
		}
	}
};
