
var item1 = {name:"Váy Woan 1",made:"Xuất xứ : BangCok",price:20000,img :"picture/nu1.jpg"}
var item2 = {name:"Váy Woan 2",made:"Xuất xứ : Laos",price:5000,img:"picture/nu2.jfif"}
var item3 = {name:"Váy Woan 3",made:"Xuất xứ : China",price:7000,img:"picture/nu3.jfif"}
var item4 = {name:"Váy Woan 4",made:"Xuất xứ : Laos",price:40000,img:"picture/nu4.jfif"}
var item5 = {name:"Áo phong 1",made:"Xuất xứ : VietNam",price:90000,img:"picture/na1.jpg"}
var item6 = {name:"Áo phong 2",made:"Xuất xứ : Laos",price:80000,img:"picture/na2.jfif"}
var item7 = {name:"Áo phong 3",made:"Xuất xứ : Laos",price:80000,img:"picture/na3.jfif"}
var item8 = {name:"Áo phong 4",made:"Xuất xứ : Laos",price:80000,img:"picture/na4.jfif"}
var item9 = {name:"Son Kem ",made:"Xuất xứ : VietNam",price:900000,img:"picture/sonkem1.jpg"}
var item10 = {name:"Son 3CE",made:"Xuất xứ : Laos",price:800000,img:"picture/ce2.jfif"}
var item11 = {name:"Son Vacosi",made:"Xuất xứ : Laos",price:800000,img:"picture/vacosi3.jfif"}
var item12 = {name:"Son Bbia",made:"Xuất xứ : Laos",price:800000,img:"picture/bbia4.jfif"}

var items = [item1,item2,item3,item4,item5,item6,item7,item8,item9,item10,item11,item12];
var cart = [];

// function tim(){
// 	alert("sr");
// 	var box = document.getElementById("search").value;
// 		var myMap = new Map();
// 		myMap.set("Váy Woan 1",'Váy Woan 1','picture/nu1.jpg','Xuất xứ : BangCok',20000);
// 		myMap.size;
// 		myMap.get("Váy Woan 1");

// 		// document.getElementById("result").src = myMap.get(box);
// 		console.log(myMap.get("Váy Woan 1"));
// 		var box = document.getElementById("container");
// 		for (var i = 0; i <12; i++) {
// 		var flex = document.createElement("div");
// 		flex.className = "grid-item";
// 		var paraImg = document.createElement("img");
// 		var paraName = document.createElement("h3");
// 		var paraMade = document.createElement("h3");
// 		var paraPrice = document.createElement("h3");
// 		var paraButton = document.createElement("button");
// 		paraButton.className = "btn-2";
// 		paraImg.className = "img";

// 		paraImg.src= items[i].img;
// 		paraName.innerHTML = items[i].name;
// 		paraMade.innerHTML= items[i].made;
// 		paraPrice.innerHTML = items[i].price;
// 		paraButton.innerHTML = "Đặt mua";
// 		// Function Add
// 		paraButton.onclick = function(ar){
// 			return function(){
// 			alert("Đã thêm vào giỏ hàng")
// 			cart.push(items[ar]);
// 			console.log(cart);
// 			document.getElementById("container2").innerHTML = ' ';	
// 			displayCart();
// 			Sum();
// 		}	
// 	}(i);
// 		flex.appendChild(paraImg);
// 		flex.appendChild(paraName);
// 		flex.appendChild(paraMade);
// 		flex.appendChild(paraPrice);
// 		flex.appendChild(paraButton);
// 		box.appendChild(flex);
// 	}
// }



// var tim=[];
// function displaytim(){
// 	alert("tim");
// 	var box = document.getElementById("container");
// 	for (var i = 0; i<tim.length; i++) {
// 		var flex = document.createElement("div");
// 		flex.className = "grid-item";
// 		var paraImg = document.createElement("img");
// 		var paraName = document.createElement("h3");
// 		var paraMade = document.createElement("h3");
// 		var paraPrice = document.createElement("h3");
// 		var paraButton = document.createElement("button");
// 		paraButton.className = "btn-2";
// 		paraImg.className = "img";

// 		paraImg.src= tim[i].img;
// 		paraName.innerHTML = tim[i].name;
// 		paraMade.innerHTML= tim[i].made;
// 		paraPrice.innerHTML = tim[i].price;
// 		paraButton.innerHTML = "Đặt mua";
// 		Function Add
// 		paraButton.onclick = function(ar){
// 			return function(){
// 			alert("Đã thêm vào giỏ hàng")
// 			cart.push(items[ar]);
// 			console.log(cart);
// 			document.getElementById("container2").innerHTML = ' ';	
// 			displayCart();
// 			Sum();
// 		}	
// 	}(i);
// 		flex.appendChild(paraImg);
// 		flex.appendChild(paraName);
// 		flex.appendChild(paraMade);
// 		flex.appendChild(paraPrice);
// 		flex.appendChild(paraButton);
// 		box.appendChild(flex);
// 	}
// 	var b = document.getElementById('container2');
//     b.style.display = "none";
//     var c = document.getElementById('contener_2');
//     c.style.display = "none";
//     var d = document.getElementById('contener_3');
//     d.style.display = "none";
// }
// function search(){
// 	alert("da");
// 	var word = document.getElementById('find').value;
// 	for (var i =0; i < items.length; i++) {
// 		if (word[i]==items[i].name){
// 			tim.push(items[i]);
// 			document.getElementById("container").innerHTML = ' ';
// 			displaytim();
// 		}else{
// 			alert("Khong co");
// 		}
// 	}
	
// }



function displayLipstick(){
	var box = document.getElementById("container");
	for (var i = 8; i <12; i++) {
		var flex = document.createElement("div");
		flex.className = "grid-item";
		var paraImg = document.createElement("img");
		var paraName = document.createElement("h3");
		var paraMade = document.createElement("h3");
		var paraPrice = document.createElement("h3");
		var paraButton = document.createElement("button");
		paraButton.className = "btn-2";
		paraImg.className = "img";

		paraImg.src= items[i].img;
		paraName.innerHTML = items[i].name;
		paraMade.innerHTML= items[i].made;
		paraPrice.innerHTML = items[i].price;
		paraButton.innerHTML = "Đặt mua";
		// Function Add
		paraButton.onclick = function(ar){
			return function(){
			alert("Đã thêm vào giỏ hàng")
			cart.push(items[ar]);
			console.log(cart);
			document.getElementById("container2").innerHTML = ' ';	
			displayCart();
			Sum();
		}	
	}(i);
		flex.appendChild(paraImg);
		flex.appendChild(paraName);
		flex.appendChild(paraMade);
		flex.appendChild(paraPrice);
		flex.appendChild(paraButton);
		box.appendChild(flex);
	}
	var b = document.getElementById('container2');
    b.style.display = "none";
    var c = document.getElementById('contener_2');
    c.style.display = "none";
    var d = document.getElementById('contener_3');
    d.style.display = "none";
}

function displayMen(){
	var box = document.getElementById("container");
	for (var i = 4; i <8; i++) {
		var flex = document.createElement("div");
		flex.className = "grid-item";
		var paraImg = document.createElement("img");
		var paraName = document.createElement("h3");
		var paraMade = document.createElement("h3");
		var paraPrice = document.createElement("h3");
		var paraButton = document.createElement("button");
		paraButton.className = "btn-2";
		paraImg.className = "img";

		paraImg.src= items[i].img;
		paraName.innerHTML = items[i].name;
		paraMade.innerHTML= items[i].made;
		paraPrice.innerHTML = items[i].price;
		paraButton.innerHTML = "Đặt mua";
		// Function Add
		paraButton.onclick = function(ar){
			return function(){
			alert("Đã thêm vào giỏ hàng")
			cart.push(items[ar]);
			console.log(cart);
			document.getElementById("container2").innerHTML = ' ';	
			displayCart();
			Sum();
		}	
	}(i);
		flex.appendChild(paraImg);
		flex.appendChild(paraName);
		flex.appendChild(paraMade);
		flex.appendChild(paraPrice);
		flex.appendChild(paraButton);
		box.appendChild(flex);
	}var b = document.getElementById('container2');
    b.style.display = "none";
    var c = document.getElementById('contener_2');
    c.style.display = "none";
    var d = document.getElementById('contener_3');
    d.style.display = "none";
}

function displayWomen(){
	var box = document.getElementById("container");
	for (var i = 0; i <4; i++) {
		var flex = document.createElement("div");
		flex.className = "grid-item";
		var paraImg = document.createElement("img");
		var paraName = document.createElement("h3");
		var paraMade = document.createElement("h3");
		var paraPrice = document.createElement("h3");
		var paraButton = document.createElement("button");
		paraButton.className = "btn-2";
		paraImg.className = "img";

		paraImg.src= items[i].img;
		paraName.innerHTML = items[i].name;
		paraMade.innerHTML= items[i].made;
		paraPrice.innerHTML = items[i].price;
		paraButton.innerHTML = "Đặt mua";
		// Function Add
		paraButton.onclick = function(ar){
			return function(){
			alert("Đã thêm vào giỏ hàng")
			cart.push(items[ar]);
			console.log(cart);
			document.getElementById("container2").innerHTML = ' ';	
			displayCart();
			Sum();
		}	
	}(i);
		flex.appendChild(paraImg);
		flex.appendChild(paraName);
		flex.appendChild(paraMade);
		flex.appendChild(paraPrice);
		flex.appendChild(paraButton);
		box.appendChild(flex);
	}var b = document.getElementById('container2');
    b.style.display = "none";
    var c = document.getElementById('contener_2');
    c.style.display = "none";
    var d = document.getElementById('contener_3');
    d.style.display = "none";
}


function displayItems(){
	var box = document.getElementById("container");
	for (var i = 0; i <12; i++) {
		var flex = document.createElement("div");
		flex.className = "grid-item";
		var paraImg = document.createElement("img");
		var paraName = document.createElement("h3");
		var paraMade = document.createElement("h3");
		var paraPrice = document.createElement("h3");
		var paraButton = document.createElement("button");
		paraButton.className = "btn-2";
		paraImg.className = "img";

		paraImg.src= items[i].img;
		paraName.innerHTML = items[i].name;
		paraMade.innerHTML= items[i].made;
		paraPrice.innerHTML = items[i].price;
		paraButton.innerHTML = "Đặt mua";
		// Function Add
		paraButton.onclick = function(ar){
			return function(){
			alert("Đã thêm vào giỏ hàng")
			cart.push(items[ar]);
			console.log(cart);
			document.getElementById("container2").innerHTML = ' ';	
			displayCart();
			Sum();
		}	
	}(i);
		flex.appendChild(paraImg);
		flex.appendChild(paraName);
		flex.appendChild(paraMade);
		flex.appendChild(paraPrice);
		flex.appendChild(paraButton);
		box.appendChild(flex);
	}
	var b = document.getElementById('container2');
    b.style.display = "none";
    var c = document.getElementById('contener_2');
    c.style.display = "none";
    var d = document.getElementById('contener_3');
    d.style.display = "none";
}
		// Display Product
function displayCart(){
	var box2 = document.getElementById("container2");
	for (var i = 0; i < cart.length; i++) {
		var flex = document.createElement("div");
		flex.className = "flex";
		var paraName1 = document.createElement("h3");
		var paraPrice1 = document.createElement("h3");
		var paraButton1 = document.createElement("button");
		paraButton1.className = "btn-2";

		paraName1.innerHTML = cart[i].name;
		paraPrice1.innerHTML= cart[i].price;
		paraButton1.innerHTML = "DELETE";
		// Function DELETE
		paraButton1.onclick = function(br){
				return function(){
					 cart.splice(br,1);
					 console.log(cart);
					 document.getElementById("container2").innerHTML = ' ';	
					 displayCart();
					 Sum();
					 } 
			}(i);
		flex.appendChild(paraName1);
		flex.appendChild(paraPrice1);
		flex.appendChild(paraButton1);
		box2.appendChild(flex);
	}					
}


function Sum() {
    var sum = 0;
    for (var k = 0; k < cart.length; k++) {
        sum += cart[k].price;
        console.log(sum);
    }
    var sumText = document.getElementById("tong").innerText = sum;
}
// displayCart();


function thongtin(){
    var hoten = document.getElementById('name').value;
    var dt = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var dc = document.getElementById('address').value;
    var ghichu = document.getElementById('note').value;
    if (hoten =="" || dt =="" || email == "" || dc == "") {
        alert("Nhập đầy đủ thông tin trước khi xác nhận");
    }
    else{
        var c = document.getElementById("contener_3");
        c.style.display = "block";

        document.getElementById("nameCus").innerHTML = hoten;
        document.getElementById("phoneCus").innerHTML = dt;
        document.getElementById("emailCus").innerHTML = email;
        document.getElementById("addressCus").innerHTML = dc;
        document.getElementById("noteCus").innerHTML = ghichu;
        var d = document.getElementById('contener_3');
		d.style.display = "block";
		var e = document.getElementById('container4');
    	e.style.display="none";
    }  

}
function xacnhan(){
	alert("Chúc mừng bạn đã đặt hàng thành công");
}	

function ShoppyCard() {
    var a = document.getElementById('container');
    a.style.display="none";
    var b = document.getElementById('container2');
    b.style.display = "block";
    var d = document.getElementById('container4');
    d.style.display="none";
}

function load2(){
    var a = document.getElementById('container');
    a.style.display="none";
    var b = document.getElementById('container2');
    b.style.display = "block";
    var c = document.getElementById('contener_2');
    c.style.display = "block";
    var d = document.getElementById('container4');
    d.style.display="none";
}
