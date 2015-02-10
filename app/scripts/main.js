console.log('The Iron Yard Rocks');

var data = {
  book: 'Moby Dick',
  author: 'Herman Melville'
};

// Grab the template
var source = $('#book').html();

// Compile the Template (creates the function)
var template = Handlebars.compile(templates);

// Send that data in
$('.book').html(template(data));

var data = {
  books : [
    { book: 'Moby Dick', author: 'Herman Melville' },
    { book: 'Great Expectations', author: 'Charles Dickens'},
    { book: 'Where the Red Fern Grows', author: 'Wilson Rawls'}
  ]
};

var source = $('#books').html();
var template = Handlebars.templates['books'];
$('.books').html(template(data));