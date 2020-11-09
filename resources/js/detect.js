
//HTML shit
var remaining = document.querySelector("#ghosts");
var attrs     = document.querySelector('#attrs');
var names     = Object.keys($ghosts);

// Check if the match attrs are in the given list of active attrs
var matchAttribute = function(active, match) {
    for (var i = 0; i < match.length; i++) {
        if (active.indexOf(match[i]) == -1) {
            return false    
        }
    }
    return true;
}

// Get attribute list
var attrList = [];
for(var i = 0; i < names.length; i++) {
    var attrMini = $ghosts[names[i]];
    for(var j = 0; j < attrMini.length; j++) {
        var attrName = attrMini[j];
        if (attrList.indexOf(attrName) == -1) {
            attrList.push(attrName);
        }
    }
}

// Create checkboxes
for(var i = 0; i < attrList.length; i++) {
    var el = document.createElement('input');
    var label = document.createElement('label');
    var attrbox = document.createElement('div');

    label.innerHTML = attrList[i];
    el.type = "checkbox";
    el.name = "attrs[]";
    el.value = attrList[i];

    attrbox.appendChild(el);
    attrbox.appendChild(label);
    attrs.appendChild(attrbox);
}

// On update for checkboxes
var refresh  = function() {
    var active = document.querySelectorAll('[name="attrs[]"]:checked');
    var activeAttrs = [];
    for (var i = 0; i < active.length; i++) {
        activeAttrs.push(active[i].value);
    }

    while(remaining.lastChild) {
        remaining.removeChild(remaining.lastChild);
    }

    for(var j = 0; j < names.length; j++) {
        if (matchAttribute(activeAttrs, $ghosts[names[j]])) {
            var name = names[j];
            var row = document.createElement('tr');
            var nameTd = document.createElement('td');
            nameTd.innerHTML = name;

            // Add Name block
            row.appendChild(nameTd);

            // Add attribute blocks
            for (var k = 0; k < attrList.length; k++) {
                var attrTd = document.createElement('td');
                if ($ghosts[names[j]].indexOf(attrList[k]) != -1) {
                    attrTd.innerHTML = attrList[k];
                }
                row.appendChild(attrTd);
            }
            remaining.appendChild(row);
        }
    }
}

attrs.addEventListener('click', refresh);
refresh();

