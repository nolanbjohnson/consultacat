App.Consult = DS.Model.extend({
	title: DS.attr('string'),
});

App.Consult.FIXTURES = [
	{
		id: 1,
		title: 'Hungry? Have a cat snack.',
	},
	{
		id: 2,
		title: 'Tired? Take a cat nap.',
	},
	{
		id: 3,
		title: 'Dirty? Give a cat bath.',
	}
];