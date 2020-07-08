var url = "https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?lat=37.497986&lng=127.027533&m=1000";

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if(this.readyState == 4 && this.status == 200) {
		const res = JSON.parse(this.responseText);
		let html = '';
		for(var v of res.stores) {
			// html += '<tr>';
			// html += '<td>' + v.code + '</td>';
			// html += '<td>' + v.name + '</td>';
			// html += '<td>' + v.addr + '</td>';
			// html += '<td>' + v.remain_stat + '</td>';
			// html += '</tr>';
			html += `
			<tr>
				<td>${v.code}</td>
				<td>${v.name}</td>
				<td>${v.addr}</td>
				<td>${v.remain_stat}</td>
			</tr>`;
		}
		document.querySelector(".mask-table tbody").innerHTML = html;
	}
}
xhttp.open('GET', url, true);
xhttp.send();

/*********** jQuery Ajax ************/
// $.get()
// $.post()
// $.ajax()
$.get(url, function(res) {
	console.log(res);
});