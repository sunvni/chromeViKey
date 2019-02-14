window.addEventListener("load", function () {
    console.log("hacked")        
    
})

document.addEventListener("keydown", function(e) {
    var item = e.target;
    if (item instanceof HTMLInputElement) {
        var current_key = String.fromCharCode(e.keyCode)
        var char = getUnicode(item.dataset.currentKey, current_key);
        if (char != undefined) {
            var old = item.value;
            var new_str = old.slice(0, old.length - 1)
            new_str += char;
            item.value = new_str;
            current_key = char;
            e.preventDefault();
        }
        console.log(item.dataset.currentKey, current_key);
        item.dataset.currentKey = current_key;
    }
})

function isInput()

function getUnicode(current, newkey) {
    var data = {
        "ee": "ê",
        "oo": "ô",
        "aa": "â",
        "dd": "đ",
        "aw": "ă",
        "as": "á",
        "af": "à",
        "aj": "ạ",
        "ax": "ã",
        "es": "é",
        "ef": "è",
        "ej": "ẹ",
        "ex": "ẽ",
        "ow": "ơ",
        "os": "ó",
        "of": "ò",
        "oj": "ọ",
        "ox": "õ",
        "is": "í",
        "if": "ì",
        "ij": "ị",
        "ix": "ĩ",
        "uw": "ư",
        "us": "ú",
        "uf": "ù",
        "uj": "ụ",
        "ux": "ũ",
        "ưs": "ứ",
        "ưf": "ừ",
        "ưj": "ự",
        "ưx": "ữ",
        "ês": "ế",
        "êf": "ề",
        "êj": "ệ",
        "êx": "ễ",
        "âw": "ă",
        "âs": "ấ",
        "âf": "ầ",
        "âj": "ậ",
        "âx": "ẫ"
    }
    var key = (current + newkey).toLowerCase()
    if (key in data) {
        return data[key];
    }
}