// Accessory Page JS
const accessoryTabContent = document.querySelector('#Things') || document.querySelector('#Accessories');

if(accessoryTabContent){
	const tabContent = accessoryTabContent.innerText;
	console.log(tabContent);

	switch(tabContent) {
		case '%%Panel.LEDRopeLightAccessories%%':
			console.log('rope light accessories');
			break;
		case '%%Panel.OutdoorAccessories%%':
			console.log('outdoor accessories');
			break;
		default:
			console.log('no accessories'); 
	}
}
