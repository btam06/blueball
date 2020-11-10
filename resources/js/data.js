var data = {};

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

data.update = null;

data.active = function (itemAttributes) {
	// Get options
	for(const attribute of data.attributes) {
		const option = document.querySelector('[name="attributes[' + attribute + ']"]:checked');
		if (option === null) {
			return true;
		}

		if (option.value == 'yes') {
			// Option checked but Item does not have attribute
			if (itemAttributes.indexOf(attribute) == -1) {
				return false;
			}
		}

		if (option.value == 'no') {
			// Option not checked and Item does have attribute
			if (itemAttributes.indexOf(attribute) > -1) {
				return false;
			}
		}
	}
		
	return true;
};