function showHide()
{
	if (document.getElementById('div2').style.visibility == 'visible')
	{
		document.getElementById('div2').style.visibility = 'hidden'
	}
	else
	{
		document.getElementById('div2').style.visibility = 'visible'
	}
}

function validateEmail(email) {
	var oEmail = $(email);
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	if (!emailReg.test(oEmail.val()))
	{
		oEmail.val("");
		//alert("Invalid email !");
		$('#emailErr').text("Invalid email");
		$("#email").focus();
		return false;
	}
	else
	{
		$('#emailErr').text("");
		return true;
	}
}

function isNumberKey(evt) {
	var charCode = (evt.which) ? evt.which : event.keyCode;
	if (charCode > 31 && (charCode < 48 || charCode > 57))
		return false;
//	var str = this.valueOf();
	return true;
}

function signInForm() {
	debugger;
	$('#credentials').text("");

}


//Validate Page
function validateForm() {
	var listSimple = $('.form-control');
	var counter = 0;
	for (var i = 0; i < listSimple.length; i++)
	{
		var control = listSimple[i];
		var fieldvalue = $(control).val();
		if (i != 8)
		{
			if (fieldvalue == null || fieldvalue == "")
			{
				//$(control).prop('placeholder', 'required');
				counter++;
				$(control).addClass("Error");
			}
			else
			{
				$(control).removeClass("Error");
			}
		}
	}
	if (counter > 0)
	{
		//implementing focus back to error
		if ($(".Error").length > 0)
		{
			var divId = $(".Error")[0].id;
			if ($("#" + divId).length > 0)
				$("#" + divId).focus();
			return false;
		}
	}
	else
	{
		return true;
	}
} // end

function clearForm() {
	var listSimple = $('.form-control');
	for (var i = 0; i < listSimple.length; i++)
	{
		listSimple[i].value = null;
	}
}

function validatePassword() {
	var password = $('#password');
	if (password.val()!="" && password.val().length < 8) {
		$('#pwd').text("Too short, must be atleast 8 characters");
		password.val("");
		$('#password').focus();
	} else {
		$('#pwd').text("");
	}
}

$("#confirmPassword").on("blur", function() {
	var confirmpassowrd = $('#confirmPassword');
	var password = $('#password');
	var x = confirmpassowrd.val();
	var y = password.val();
	if (x != y) {
		$('#cnfrmPwd').text("Passwords don't match");
		confirmpassowrd.val("");
		$('#confirmPassword').focus();
	} else {
		$('#cnfrmPwd').text("");
	}
});

//function CheckUserName(control) {
//var username = $(control).val();
//var url = "/Dashboard/LoadRecruitments";
//$.ajax({
//url: url,
//type: 'GET',
//data: {
//username: username 
//},
//dataType: "json",
//success: function (data) {
////write logic
//},
//error: function (e) {
//alert('Error=' + e.toString());
//}
//});
//};
//function calling
//$("#registerBtn").on("click", function () {
//validateForm();
//})

//$("#email").on("blur", function () {
//validateEmail(this);
//})

$(function () {
	$("#datepicker").datepicker(
			{
				changeMonth: true,
				changeYear: true,
				maxDate:new Date(),
				dateFormat: "dd-mm-yy",
				yearRange: "1980:2050"
			});
});


function date_time(id)
{
	date = new Date;
	year = date.getFullYear();
	month = date.getMonth();
	months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
	d = date.getDate();
	day = date.getDay();
	days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
	h = date.getHours();
	if(h<10)
	{
		h = "0"+h;
	}
	m = date.getMinutes();
	if(m<10)
	{
		m = "0"+m;
	}
	s = date.getSeconds();
	if(s<10)
	{
		s = "0"+s;
	}
	result = ''+days[day]+', '+months[month]+' '+d+', '+year;
	document.getElementById(id).innerHTML = result;
	setTimeout('date_time("'+id+'");','1000');
	return true;
}


function Pvalidation(){
    debugger;
var x=document.getElementById("pwd").value;
var len=x.length;
var a = 0, b = 0, c = 0;
for (var i = 0; i < len; i++) {
    if (x[i] >= 'A' && x[i] <= 'Z') {
        a++;
    }

    if (x[i] >= 'a' && x[i] <= 'z') {
        b++;
    }

    if (x[i] >= 0 && x[i] <= 9) {
        c++;
    }
  
}

if (a == 0 || b == 0 || c == 0) {
    document.getElementById("aname").innerHTML = "Enter Correct Password !! ";
    return false;
}
else {
    document.getElementById("aname").innerHTML = "";
    return true;
}

}



//window.onload = date_time('date_time');

//$(document).ready(function () {
//function getParameterByName(name) {
//name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
//var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
//results = regex.exec(location.search);
//return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
//}
//var msg = getParameterByName('msg');
//if(msg!=""){
//$('#credentials').text(msg);
//}
//else {
//$('#credentials').text("");
//$('#Membership').hide();
//}
//});