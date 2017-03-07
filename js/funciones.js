$(document).ready(function() {
	//Variables de precio Kw/h
	var estrato1 = 218.40;
	var estrato2 = 273.00;
	var estrato3 = 434.13;
	var estrato4 = 510.74;
	var estrato5 = 612.89;
	var estrato6 = 612.89;
	//Imprime variables de valor Kw/h
	$('.precio_kw_1').html('$'+$.number(estrato1,2,',','.'));
	$('.precio_kw_2').html('$'+$.number(estrato2,2,',','.'));
	$('.precio_kw_3').html('$'+$.number(estrato3,2,',','.'));
	$('.precio_kw_4').html('$'+$.number(estrato4,2,',','.'));
	$('.precio_kw_5').html('$'+$.number(estrato5,2,',','.'));
	$('.precio_kw_6').html('$'+$.number(estrato6,2,',','.'));

	//Calcula total Sala
	var consumo_dia_sala = 0;
	var consumo_dia_alcobas = 0;
	var consumo_dia_cocina = 0;
	var consumo_dia_otros = 0;
	function Calcula(){
		//Consumo sala
		consumo_dia_sala  = $('.tv_s .cantidad').val()*$('.tv_s .h_d').val()*$('.tv_s .potencia').val();
		consumo_dia_sala += $('.s_s .cantidad').val()*$('.s_s .h_d').val()*$('.s_s .potencia').val();
		consumo_dia_sala += $('.t_s .cantidad').val()*$('.t_s .h_d').val()*$('.t_s .potencia').val();
		consumo_dia_sala += $('.b_s .cantidad').val()*$('.b_s .h_d').val()*$('.b_s .potencia').val();
		//Consumo alcboas
		consumo_dia_alcobas  = $('.a_a .cantidad').val()*$('.a_a .h_d').val()*$('.a_a .potencia').val();
		consumo_dia_alcobas += $('.v_a .cantidad').val()*$('.v_a .h_d').val()*$('.v_a .potencia').val();
		consumo_dia_alcobas += $('.c_a .cantidad').val()*$('.c_a .h_d').val()*$('.c_a .potencia').val();
		consumo_dia_alcobas += $('.i_a .cantidad').val()*$('.i_a .h_d').val()*$('.i_a .potencia').val();
		consumo_dia_alcobas += $('.b_a .cantidad').val()*$('.b_a .h_d').val()*$('.b_a .potencia').val();
		consumo_dia_alcobas += $('.t_a .cantidad').val()*$('.t_a .h_d').val()*$('.t_a .potencia').val();
		//Consumo Cocina
		consumo_dia_cocina  = $('.n_c .cantidad').val()*$('.n_c .h_d').val()*$('.n_c .potencia').val();
		consumo_dia_cocina += $('.h_c .cantidad').val()*$('.h_c .h_d').val()*$('.h_c .potencia').val();
		consumo_dia_cocina += $('.l_c .cantidad').val()*$('.l_c .h_d').val()*$('.l_c .potencia').val();
		consumo_dia_cocina += $('.o_c .cantidad').val()*$('.o_c .h_d').val()*$('.o_c .potencia').val();
		consumo_dia_cocina += $('.b_c .cantidad').val()*$('.b_c .h_d').val()*$('.b_c .potencia').val();
		//Consumo Otros
		consumo_dia_otros  = $('.c_o .cantidad').val()*$('.c_o .h_d').val()*$('.c_o .potencia').val();
		consumo_dia_otros += $('.l_o .cantidad').val()*$('.l_o .h_d').val()*$('.l_o .potencia').val();
		consumo_dia_otros += $('.s_o .cantidad').val()*$('.s_o .h_d').val()*$('.s_o .potencia').val();
		consumo_dia_otros += $('.p_o .cantidad').val()*$('.p_o .h_d').val()*$('.p_o .potencia').val();
		consumo_dia_otros += $('.m_o .cantidad').val()*$('.m_o .h_d').val()*$('.m_o .potencia').val();
		consumo_dia_otros += $('.b_o .cantidad').val()*$('.b_o .h_d').val()*$('.b_o .potencia').val();
		//Suma Total de Consumos
		var consumo_dia_total = ((consumo_dia_sala+consumo_dia_alcobas+consumo_dia_cocina+consumo_dia_otros)/1000);
		//Muestra Total de Consumos diarios en Kw/h
		$('.Total_Sala').html(consumo_dia_sala/1000+' Kw/d');
		$('.Total_Alcobas').html(consumo_dia_alcobas/1000+' Kw/d');
		$('.Total_Cocina').html(consumo_dia_cocina/1000+' Kw/d');
		$('.Total_Otros').html(consumo_dia_otros/1000+' Kw/d');
		//Calcula valor diario del consumo por estrato
		var dia_estrato1 = estrato1*consumo_dia_total;
		var dia_estrato2 = estrato2*consumo_dia_total;
		var dia_estrato3 = estrato3*consumo_dia_total;
		var dia_estrato4 = estrato4*consumo_dia_total;
		var dia_estrato5 = estrato5*consumo_dia_total;
		var dia_estrato6 = estrato6*consumo_dia_total;
		//Imprime valor diario de cada estrato
		$('.precio_kw_dia_1').html('$'+$.number(dia_estrato1,2,',','.'));
		$('.precio_kw_dia_2').html('$'+$.number(dia_estrato2,2,',','.'));
		$('.precio_kw_dia_3').html('$'+$.number(dia_estrato3,2,',','.'));
		$('.precio_kw_dia_4').html('$'+$.number(dia_estrato4,2,',','.'));
		$('.precio_kw_dia_5').html('$'+$.number(dia_estrato5,2,',','.'));
		$('.precio_kw_dia_6').html('$'+$.number(dia_estrato6,2,',','.'));
		//Imprime valor mensual de cada estrato
		$('.precio_kw_mes_1').html('$'+$.number(dia_estrato1*30,2,',','.'));
		$('.precio_kw_mes_2').html('$'+$.number(dia_estrato2*30,2,',','.'));
		$('.precio_kw_mes_3').html('$'+$.number(dia_estrato3*30,2,',','.'));
		$('.precio_kw_mes_4').html('$'+$.number(dia_estrato4*30,2,',','.'));
		$('.precio_kw_mes_5').html('$'+$.number(dia_estrato5*30,2,',','.'));
		$('.precio_kw_mes_6').html('$'+$.number(dia_estrato6*30,2,',','.'));
		//visualiza Valor estrato en pantalla
		var estrato = $('#estrato').val();
		if(estrato==''){
			$('.valor_estrato').html('Ingrese un estrato');
		}else if(estrato==1){
			$('.valor_estrato').html('$'+$.number(dia_estrato1*30,2,',','.'));
		}else if(estrato==2){
			$('.valor_estrato').html('$'+$.number(dia_estrato2*30,2,',','.'));
		}else if(estrato==3){
			$('.valor_estrato').html('$'+$.number(dia_estrato3*30,2,',','.'));
		}else if(estrato==4){
			$('.valor_estrato').html('$'+$.number(dia_estrato4*30,2,',','.'));
		}else if(estrato==5){
			$('.valor_estrato').html('$'+$.number(dia_estrato5*30,2,',','.'));
		}else{
			$('.valor_estrato').html('$'+$.number(dia_estrato6*30,2,',','.'));
		}
	}
	$('input').blur(function(){
		Calcula();
	});
	$('#estrato').change(function(){
		Calcula();
	});
});