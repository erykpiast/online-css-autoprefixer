function read(key) {
    var value = localStorage.getItem(key);

    if(value === null || value === undefined) {
        value = '';
    } else {
        try {
            value = JSON.parse(value);
        } catch(err) {
            value = '';
        }
    }

    return value;
}

function save(key, value) {
    if(value === null || value === undefined) {
        value = '';
    } else {
        try {
            value = JSON.stringify(value);
        } catch(err) {
            value = '';
        }
    }

    localStorage.setItem(key, value);

    return true;
}

export default {
    read: read,
    save: save
};