<?
if(!empty($_POST['g-recaptcha-response'])){
	$un       = strtoupper(uniqid(time()));
	
	if($_POST['theme'] == 'otkr'){
		$theme    = 'Запросили провести ППО на сайте service.bytecodecrm.ru';
	}elseif($_POST['theme'] == 'demo_f'){
		//две формы попробовать
		$theme    = 'Запросили попробовать бесплатно CRM на сайте service.bytecodecrm.ru';
	}elseif($_POST['theme'] == 'vop_f'){
		$theme    = 'Задали вопрос на сайте service.bytecodecrm.ru';
	}elseif($_POST['theme'] == 'prez_f'){
		$theme    = 'Запросили презентацию на сайте service.bytecodecrm.ru';
	}elseif($_POST['theme'] == 'pred_f'){
		$theme    = 'Запросили провести ППО на сайте service.bytecodecrm.ru';
	}elseif($_POST['theme'] == 'demo_mf'){
		//форма демо
		$theme    = 'Запросили демо-доступ к CRM на сайте service.bytecodecrm.ru';
	}

	$headers .= "Subject: $theme\n";
	$headers .= "X-Mailer: PHPMail Tool\n";
	$headers .= "Mime-Version: 1.0\n";
	$headers .= "From: Service Creatio <support@service.bytecodecrm.ru>\r\n";
	$headers .= 'Bcc: spy45242@yandex.ru' . "\r\n";
	$headers .= "Content-Type:multipart/mixed;";
	$headers .= "boundary=\"----------".$un."\"\n\n";
	
	//text
	$text     = "------------".$un."\nContent-Type:text/html;\n";
	$text    .= "Content-Transfer-Encoding: 8bit\n".$theme."\n\n";
	$text    .= "------------".$un."\n";
	$text    .= "Content-type: text/html; charset=utf8\r\n";
	$text    .= "boundary=\"----------".$un."\"\n\n";
	$text    .= '<html>';
	foreach($_POST as $key=>$post){
		if($key == 'feedback__name'){		$text    .= 'Имя: '.$post.'<br />';}
		if($key == 'feedback__email'){		$text    .= 'Почта: '.$post.'<br />';}
		if($key == 'feedback__phone'){		$text    .= 'Телефон: '.$post.'<br />';}
		if($key == 'feedback__comm'){		$text    .= 'Комментарий: '.$post.'<br />';}
		if($key == 'feedback__company'){	$text    .= 'Компания: '.$post.'<br />';}
		if($key == 'feedback__people'){		$text    .= 'Количество сотрудников: '.$post.'<br />';}
		if($key == 'feedback__city'){		$text    .= 'Город: '.$post.'<br />';}
		if($key == 'g-recaptcha-response'){	$text    .= '';}
	}
	$text    .= '</html>';
	$text    .= "\n";
	
	//files
	$check     = array();
	foreach($_FILES as $key => $value){
		if(!empty($value['name'])){
			if(!in_array($value['name'], $check)){
				$file = fopen($value["tmp_name"], "rb");
				$data = fread($file, filesize($value["tmp_name"]));
				fclose($file);
				$File = $data;
				$text    .= "------------".$un."\n";
				$text    .= "Content-Type: application/octet-stream; ";
				$text    .= "name=\"".basename($value["name"])."\"\n";
				$text    .= "Content-Transfer-Encoding:base64\n";
				$text    .= "Content-Disposition:attachment;";
				$text    .= "filename=\"".basename($value["name"])."\"\n\n";
				$text    .= chunk_split(base64_encode($data));
				
				$check[] = $value['name'];
			}
		}
	}

	if(mail('sales@bytecodecrm.ru', $theme, $text, $headers)){
		echo 'good';
	}
}
?>