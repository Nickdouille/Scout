
$('form').on('submit', function() {
	return false;
});


var $result = $('#result');


var keys = {
	8: 'backspace',
	46: 'delete',
	37: 'left',
	38: 'up',
	39: 'right',
	40: 'down',
	9:  'tab',
	13: 'enter',
	32: 'space',
	27: 'escape'
};

$(':text').on('click', function(e) {
	console.log('input clicked');
});

$(':text').on('focus', function(e) {
	console.log('input focused');
});

$(':text').on('keydown', function(e) {
	//console.log('input', e.which);
	var key = e.which;
	if (e.which in keys) {
		key = keys[e.which];
	}
	$result.append('<div>' + key + '</div>');
});
