/**
 * Created by shell on 16/12/1.
 */
/**
 * Created by shell on 16/11/18.
 */
function showDiv() {
	var oDiv = document.getElementsByTagName('div')[0];
	if(oDiv.style.display == 'none') oDiv.style.display = 'block';

}

function getValue(btn) {
	Row = btn.parentNode.parentNode;
	var con = Row.getElementsByClassName("con");
	for(i = 0; i < con.length; i++) {
		aInput[i].value = con[i].innerHTML;
	}
}

function jugeNull() {
	for(i = 0; i < aInput.length; i++) {
		var input_value = aInput[i].value;

		if(input_value != '') {
			return false;
		}
	}
	return true;
}

function saveData(element) {
	if(jugeNull()) {
		alert('请输入信息');
	}
	element.getElementsByTagName("td")[0].innerHTML = aInput[0].value;
	element.getElementsByTagName("td")[1].innerHTML = aInput[1].value;
	element.getElementsByTagName("td")[2].innerHTML = aInput[2].value;
	element.getElementsByTagName("td")[3].innerHTML = aInput[3].value;
}

function addRow() {

	var tr_new = document.createElement("tr");
	Tr.parentNode.appendChild(tr_new);
	for(i = 0; i < Td.length; i++) {
		var td_new = document.createElement("td");
		tr_new.appendChild(td_new);
		td_new.setAttribute("class", "con");
	}
	tr_new.lastChild.innerHTML = "<button onclick='getValue(this);'>编辑</button>";
	tr_new.lastChild.previousSibling.innerHTML = "<button onclick='deleteRow(this)'>刪除</button>";
	tr_new.lastChild.firstChild.setAttribute("class", "edit");
	tr_new.lastChild.previousSibling.firstChild.setAttribute("class", "delete");
	saveData(tr_new);
}

function deleteRow(node) {
	var Tbody = document.getElementsByTagName("tbody")[0];
	Tbody.removeChild(node.parentNode.parentNode);
}

var aInput;
var Tr;
var Td;
var Row;
window.onload = function() {
	aInput = document.getElementsByTagName("input");
	Tr = document.getElementById("list");
	Td = Tr.getElementsByTagName("td");
	var Btn_edit = document.getElementsByClassName("edit");
	var Btn_save = document.getElementById("save");
	var Btn_add = document.getElementById("add");
	Btn_edit[0].onclick = function() {
		showDiv();
		getValue(this);
	};
	Btn_save.onclick = function() {
		saveData(Row);
	};
	Btn_add.onclick = function() {
		addRow();
	};

};