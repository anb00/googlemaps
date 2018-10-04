function printJS() {
    nwJSON(function(Main) {
        var html = "";
        var dd = "dropd";
        for (var i = 0; i < main.results.length; i++) {
            main.results[i].id;
 
            html += ("<table border=1 double id=table><tr><td>");
            html += ("the Neptune name is...:</td></tr><td>");
            html += ("<strong>" + main.results[i].name + "</strong>");
            html += ("</td></tr><td>");
 
           
            html += ("<img src=" + main.results[i].icon + ">");
            html += ("</td></tr><tr><td>");
            for (var j = 0; j <main.results[i].types.length; j++) {
               
                html += ("<br>");
                    html += ("<div>");
                 html += ("<p>");
 
                   html += (main.results[i].types[j]);
                    html += ("</p>");
                     html += ("</div>");
                         html += ("</div>");
           
            }
            html += ("</td></tr></table >");
            html += ("<hr>");
            main.results[i].innerHTML = html;
           
            document.getElementById('results').innerHTML = html;
           
 
 
 
 
        }
 
    });
}