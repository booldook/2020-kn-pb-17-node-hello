var url = "https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?lat=37.497986&lng=127.027533&m=1000";

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if(this.readyState == 4 && this.status == 200) {
		const res = JSON.parse(this.responseText);
		let html = '', remain_txt = '';
		for(var v of res.stores) {
			// html += '<tr>';
			// html += '<td>' + v.code + '</td>';
			// html += '<td>' + v.name + '</td>';
			// html += '<td>' + v.addr + '</td>';
			// html += '<td>' + v.remain_stat + '</td>';
			// html += '</tr>';
			if(v.remain_stat == "empty" || v.remain_stat == "break") remain_txt = '없음';
			else if(v.remain_stat == "few") remain_txt = '소량';
			else if(v.remain_stat == "some") remain_txt = '적당';
			else if(v.remain_stat == "plenty") remain_txt = '충분';
			html += `
				<tr>
					<td>${v.code}</td>
					<td>${v.name}</td>
					<td class="text-left">${v.addr}</td>
					<td>${remain_txt}</td>
				</tr>
			`;
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