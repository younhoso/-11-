//탭 가눙 만들기
//버튼0을 누르면, 
//	모든 버튼들은 주황색 제거
//	버튼0이 주황색으로 변하고, 
//	모든 내용들은 안보이게.
//	내용0이 보임.

//자바스크립트 탭기능
var 버튼 = document.querySelectorAll('.tab-button');
var 탭 = document.querySelectorAll('.tab-content');

function 버튼하이라이트(number) {
	버튼[0].classList.remove('active');
	버튼[1].classList.remove('active');
	버튼[2].classList.remove('active');
	버튼[number].classList.add('active');
}

function 탭하이라이트(number) {
	탭[0].classList.remove('show-tab');
	탭[1].classList.remove('show-tab');
	탭[2].classList.remove('show-tab');
	탭[number].classList.add('show-tab');
}

//탭기능 고수버전
//<ul>여기다가 addEventListener를 달아줌.
document.querySelector('ul.list').addEventListener('click', (e) => {

	버튼하이라이트(e.target.dataset.id);
	탭하이라이트(e.target.dataset.id);

});

function plus (a,b){
	console.log(a+b);
}
	
//-----------------------------------------------------------------------------
//제이쿼리 탭기능
$(document).ready(function(){
	//탭기능 고수버전
	//<ul>여기다가 addEventListener를 달아줌.
	var 버튼하이라이트 = function (index){
		$('.tab-button').eq(0).removeClass('active');
		$('.tab-button').eq(1).removeClass('active');
		$('.tab-button').eq(2).removeClass('active');
		$('.tab-button').eq(index).addClass('active');
	}
	
	var 탭하이라이트 = function (index){
		$('.tab-content').eq(0).removeClass('show-tab');
		$('.tab-content').eq(1).removeClass('show-tab');
		$('.tab-content').eq(2).removeClass('show-tab');
		$('.tab-content').eq(index).addClass('show-tab');
	}
	
	$('ul.list').on('click',function(e){
		버튼하이라이트(e.target.dataset.id);
		탭하이라이트(e.target.dataset.id);
	});
	
	
	//장바구니 추가 기능 만들기
	//1. Add to cart 버튼을 눌렀을 때, 
	//	2. 사용자가 입력한 값(value)를 가져와서 
	//	3. {데이터}를 만들고
	//	4. 이걸 글자로 변환해서
	//	5. localStorage에 product1이라는 key로 저장하기
	//	
		$('#add').on('click', function(e){
			e.preventDefault();
	
			var Data= {
				name : 'Blossom Dress',
				number : document.getElementById('quantity').value,
				size : document.getElementById('size').value,
				color : document.getElementById('color').value
			}
	
			if(Number(Data.number) === 0) {
				alert('이상한 문자 넣지 마세요!!');
			}
	
			var datastring = JSON.stringify(Data);
			for(var i = 0; i<localStorage.length; i++){
				localStorage.setItem('product' + e.target.dataset.id(i), datastring)
			}

			// localStorage.clear(data2);

			// for (var i = 0; i < localStorage.length; i++) {
			// 	console.log(localStorage.getItem(localStorage.key(i)));
			// }
	
		});
	});







	






















