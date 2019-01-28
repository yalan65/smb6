window.onload =function() {
          var table = document.getElementById("tablep");
    if (table != null) {
        for (var i = 0; i < table.rows.length; i++) {
            for (var j = 0; j < table.rows[i].cells.length; j++)
            table.rows[i].onclick = function () {
               // tableText(this);
                 window.location.href = "map.html";
            };
        }
    }

    function tableText(tableCell) {
        alert(tableCell.innerHTML);
    }
}
