;(function($){
	$.fn.verifica=function (option){
			$("#senha").keydown(function(){
			var tamanho=option.text.length;
		var qtd_tipo=0;
			for( var i=0;i<tamanho-1;i++){
			var carac=option.text.charAt(i);
			if(isLetra(carac)==true){
				
			}
			if(isNum(carac)==true){
				qtd_tipo++;
			}
			if(isEspecial(carac)==true){
				qtd_tipo++;
			}
		}
		if (tamanho<8 && qtd_tipo==1){
			$(".tipoS").val("Muito Fraca");
		}
		if(tamanho<8 && qtd_tipo==2){
			$(".tipoS").val("Fraca");
		}
		if (tamanho>8 && qtd_tipo==2){
			$(".tipoS").val("Moderada");
		}
		if (tamanho>8 && qtd_tipo==3){
			$(".tipoS").val("Forte");
		}
			
	});
	function isLetra(digito){
		if(digito.charCodeAt(0)>=65 && digito.charCodeAt(0)<=90 || digito.charCodeAt(0)>=97 && digito.charCodeAt(0)<=122){
			//alert("1");
			console.log(digito);
			return true;
			
		}
		return false;
	}
		function isNum(digito){
			if(digito.charCodeAt(0)>=48  && digito.charCodeAt(0)<=57){
				//alert("2");
				return true;
				
			}
			return false;
		}
		function isEspecial(digito){
			if(digito.charCodeAt(0)>=33 && digito.charCodeAt(0)<=47 || digito.charCodeAt(0)>=58 && digito.charCodeAt(0)<=64){
				//alert("3");
				return true;
				
			}
			return false;
		}
	}
})(jQuery);