/*exchange*/
/*var have = parseFloat(document.getElementById("have").value);*/
function exchange()
{
	var y = document.getElementById("want").value;
	var amount = parseFloat(document.getElementById("amount").value);
	var kurs_dol = 3.5;
	var kurs_euro = 4;
	var kurs_franka = 5;

	if (y == "dolar")
	{
		money = amount/kurs_dol
		document.getElementById("result").innerHTML = money + ' ' + y + 's';
	}
	
	else if (y == "euro")
	{
		money = amount/kurs_euro
		document.getElementById("result").innerHTML = money + ' ' + y + 's';
	}
	
	else if (y == "frank")
	{
		money = amount/kurs_franka
		document.getElementById("result").innerHTML = money + ' ' + y + 's';
	}
	else
	{
		document.getElementById("result").innerHTML = "Enter proper currency!"
	}
}



