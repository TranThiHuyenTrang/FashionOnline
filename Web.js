var cart = [];
var arrdisplay=[];
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
var item13 = {name:"Váy nữ 1",made:"Xuất xứ : Laos",price:800000,img:"picture/t1.jfif"}
var item14 = {name:"Váy nữ 2",made:"Xuất xứ : Laos",price:800000,img:"picture/t2.jfif"}
var item15 = {name:"Váy nữ 2",made:"Xuất xứ : Laos",price:800000,img:"picture/t3.jfif"}
var item16 = {name:"Váy nữ 4",made:"Xuất xứ : Laos",price:800000,img:"picture/t4.jfif"}
var item17 = {name:"Áo nam 1",made:"Xuất xứ : Laos",price:800000,img:"picture/n1.jfif"}
var item18 = {name:"Áo nam 2",made:"Xuất xứ : Laos",price:800000,img:"picture/n2.jfif"}
var item19 = {name:"Áo nam 2",made:"Xuất xứ : Laos",price:800000,img:"picture/n3.jfif"}
var item20 = {name:"Áo nam 4",made:"Xuất xứ : Laos",price:800000,img:"picture/n4.jfif"}
var item21 = {name:"Túi 1",made:"Xuất xứ : Laos",price:800000,img:"picture/tui1.jfif"}
var item22 = {name:"Túi 2",made:"Xuất xứ : Laos",price:800000,img:"picture/tui2.jfif"}
var item23 = {name:"Túi 3",made:"Xuất xứ : Laos",price:800000,img:"picture/tui3.jfif"}
var item24 = {name:"Túi 4",made:"Xuất xứ : Laos",price:800000,img:"picture/tui4.jfif"}

function search(){
	var so =  document.getElementById('find').value.toLowerCase();
	for(var i =0; i <arrdisplay.length;i++ ){
		if(so==arrdisplay[i].name){
			document.getElementById("container").innerHTML = ' ';
			var flex = document.createElement("div");
			var box = document.createElement("div");
			var paraImg = document.createElement("img");
			var paraName = document.createElement("h3");
			var paraMade = document.createElement("h3");
			var paraPrice = document.createElement("h3");
			var paraButton = document.createElement("button");
			paraButton.className = "btn-2";
			paraImg.className = "img";
			flex.className = "grid-item";

			paraImg.src= arrdisplay[i].img;
			paraName.innerHTML = arrdisplay[i].name;
			paraMade.innerHTML= arrdisplay[i].made;
			paraPrice.innerHTML = arrdisplay[i].price;
			paraButton.innerHTML = "Đặt mua";
			paraButton.onclick = function(ar){
			return function(){
			alert("Đã thêm vào giỏ hàng")
			cart.push(arrdisplay[ar]);
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
			container.appendChild(box);
		}				
	}
}
function seeMore(){
	var items = [item1,item2,item3,item4,item5,item6,item7,item8,item9,item10,item11,item12,item13,item14,item15,item16,item17,item18,item19,item20];
	arrdisplay= items;
	display();	
}
function seeWomen(){
	var items = [item1,item2,item3,item4,item13,item14,item15,item16];
	arrdisplay= items;
	display();	
}
function seeMen(){
	var items = [item5,item6,item7,item8,item17,item18,item19,item20];
	arrdisplay= items;
	display();
}
function seeLipstick(){
	var items = [item9,item10,item11,item12,item21,item22,item23,item24];
	arrdisplay= items;
	display();
}
function displayLipstick(){
	var items = [item9,item10,item11,item12];
	arrdisplay= items;
	display();
}
function displayMen(){
	var items = [item5,item6,item7,item8];
	arrdisplay= items;
	display();
}
function displayWomen(){
	var items = [item1,item2,item3,item4];
	arrdisplay= items;
	display();
}
function displayItems(){
	var items = [item1,item2,item3,item4,item5,item6,item7,item8,item9,item10,item11,item12];
	arrdisplay= items;
	display();
}
function display(){
	document.getElementById("container").innerHTML = ' ';
	for (var i = 0; i <arrdisplay.length; i++) {
		var flex = document.createElement("div");
		flex.className = "grid-item";
		var paraImg = document.createElement("img");
		var paraName = document.createElement("h3");
		var paraMade = document.createElement("h3");
		var paraPrice = document.createElement("h3");
		var paraButton = document.createElement("button");
		paraButton.className = "btn-2";
		paraImg.className = "img";

		paraImg.src= arrdisplay[i].img;
		paraName.innerHTML = arrdisplay[i].name;
		paraMade.innerHTML= arrdisplay[i].made;
		paraPrice.innerHTML = arrdisplay[i].price;
		paraButton.innerHTML = "Đặt mua";
		// Function Add
		paraButton.onclick = function(ar){
			return function(){
			alert("Đã thêm vào giỏ hàng")
			cart.push(arrdisplay[ar]);
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
		container.appendChild(flex);
	}
}
function displayCart(){
	var box2 = document.getElementById("container2");
	for (var i = 0; i < cart.length; i++) {
		var flex = document.createElement("div");
		flex.className = "sopy";
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
    var count = 0
    for (var k = 0; k < cart.length; k++) {
    	count ++;
        sum += cart[k].price;
        console.log(sum);
    }
    var sumText = document.getElementById("tong").innerText = sum;
    var sumCount = document.getElementById("dem").innerText = count;
}
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
        var yourinfo = document.getElementById('contener_3');
		yourinfo.style.display = "block";
		var foot = document.getElementById('container4');
    	foot.style.display="none";
    }  
}
function xacnhan(){
	alert("Chúc mừng bạn đã đặt hàng thành công");
}	
function huydon(){
	var hoten = document.getElementById('name').value;
    var dt = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var dc = document.getElementById('address').value;
    var ghichu = document.getElementById('note').value;
    if (hoten =="" || dt =="" || email == "" || dc == "") {
        alert("Bạn chưa đặt hàng");
    }
	else{
      	alert("Bạn có chắc chắn muốn hủy đơn không ?");
       	displayItems();
    }  
}
function ShoppyCard() {
    var prod = document.getElementById('container');
    prod.style.display="none";
    var giohang = document.getElementById('container2');
    giohang.style.display = "block";
    var foot = document.getElementById('container4');
    foot.style.display="none";
}
function load2(){
    var prod = document.getElementById('container');
    prod.style.display="none";
    var giohang = document.getElementById('container2');
    giohang.style.display = "block";
    var info = document.getElementById('contener_2');
    info.style.display = "block";
    var foot = document.getElementById('container4');
    foot.style.display="none";
}
