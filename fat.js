var $=function( id )
{return document.getElementById(id);};

function msystem()
{if($('msf').value=='metric')
{$('thf').innerHTML=' (Cms)';$('tneck').innerHTML=' (Cms)';$('twaist').innerHTML=' (Cms)';$('thips').innerHTML=' (Cms)';}else{$('thf').innerHTML=' (inches)';$('tneck').innerHTML=' (inches)';$('twaist').innerHTML=' (inches)';$('thips').innerHTML=' (inches)';}}
function bfat (){var ms=$('msf').value;var sex=$('sf').value;var height=$('hf').value;var neck=$('neck').value;var waist=$('waist').value;var hips=$('hips').value;var ibf;var bfc;if(height==null || height==0 || neck==null || neck==0 || waist==null || waist==0){$('bf').value="Pl. enter data.";}else{$('bf').value="";}
if(ms=='metric'&&sex=='m'&&height>0&&waist>0&&neck> 0){ibf=Math.round((86.010*(Math.log(waist*1-neck*1)/Math.log(10))-70.041*(Math.log(height)/Math.log(10))+30.30*1)*100)/100;if(ibf<=5){bfc='Essential';}else if(ibf>5&&ibf<=17){bfc='Fit';}else if(ibf>17&&ibf<=25){bfc='Acceptable';}else if(ibf>25 ) {bfc='Obese';}$('bf').value=ibf+" % ";$('nbf').value=bfc;}
else if(ms=='us'&&sex=='m'&&height>0&&waist>0&&neck> 0){ibf= Math.round((86.010*(Math.log(waist*1-neck*1)/Math.log(10))-70.041*(Math.log(height)/Math.log(10))+36.76*1)*100)/100;if(ibf<=5){bfc='Essential';}else if(ibf>5&&ibf<=17){bfc='Fit';}else if(ibf>17&&ibf<=25){bfc='Acceptable';}else if(ibf>25 ) {bfc='Obese';}$('bf').value=ibf+" % ";$('nbf').value=bfc;}
else if(ms=='metric'&&sex=='f'&&height>0&&waist>0&&neck> 0){ibf= Math.round((163.205*(Math.log(waist*1+hips*1-neck*1)/Math.log(10))-97.684*(Math.log(height)/Math.log(10))-104.912*1)*100)/100;
if(ibf<=15){bfc='Essential';}else if(ibf>15&&ibf<=24){bfc='Fit';}else if(ibf>24&&ibf<=31){bfc='Acceptable';}else if(ibf>31 ) {bfc='Obese';}$('bf').value=ibf+" % ";$('nbf').value=bfc;}else if(ms=='us'&&sex=='f'&&height>0&&waist>0&&neck> 0){ibf= Math.round((163.205*(Math.log(waist*1+hips*1-neck*1)/Math.log(10))-97.684*(Math.log(height)/Math.log(10))-78.387*1)*100)/100;
if(ibf<=15){bfc='Essential';}else if(ibf>15&&ibf<=24){bfc='Fit';}else if(ibf>24&&ibf<=31){bfc='Acceptable';}else if(ibf>31 ) {bfc='Obese';}
$('bf').value=ibf+" % ";$('nbf').value=bfc;}}