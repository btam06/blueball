let data = {};

// Get item list
data.items = {
	spirit: ['radio', 'prints', 'book'],
	wraith: ['prints', 'cold', 'radio'],
	phantom: ['emf5', 'balls', 'cold'],
	poltergeist: ['radio', 'prints', 'balls'],
	banshee: ['emf5', 'prints', 'cold'],
	jinn: ['radio', 'balls', 'emf5'],
	mare: ['radio', 'balls', 'cold'],
	revenant: ['emf5', 'prints', 'book'],
	shade: ['emf5', 'balls', 'book'],
	demon: ['radio', 'book', 'cold'],
	yurei: ['balls', 'book', 'cold'],
	oni: ['emf5', 'radio', 'book']
};

// Get attribute list
data.attributes = [];
for(const name in data.items) {
	const itemList = data.items[name];
    for(const attribute of itemList) {
        if (data.attributes.indexOf(attribute) == -1) {
            data.attributes.push(attribute);
        }
    }
}


