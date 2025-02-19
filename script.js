function convertFromDecimal(value) {
    if (value === "") return;
    document.getElementById("biner").value = parseInt(value, 10).toString(2);
    document.getElementById("oktal").value = parseInt(value, 10).toString(8);
}

function convertFromBinary(value) {
    if (value === "" || !/^[01]+$/.test(value)) return;
    let decimal = parseInt(value, 2);
    document.getElementById("desimal").value = decimal;
    document.getElementById("oktal").value = decimal.toString(8);
}