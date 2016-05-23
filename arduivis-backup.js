
/*
	super simple max scripting with javascript example
	this shows the use of the newdefault method for creating objects in patchers
	so that you can create objects without needing to specify special patcher format 
	arguments for UI objects or font information and pixel width for text objects.
*/

autowatch=1;
outlets=2;


// global varables and code
var vbox;
var vserial;
var vatoi;
var vsel;
var vx=200;
var vy=140;

var inputs = new Array();
var outputs = new Array();
var sliders = new Array();

var vrouteport; 		
var vtclear; 		
var vbutton;			
var vsprintf;		
var viter; 			
var vprependappend; 
var vumenu; 			
var vprependport; 	
var vserialport; 	
var vsel; 			
var vzl; 			
var vitoa; 			
var vsym; 			
var vmettog; 		
var vmetro; 			
var vatoi; 			
var vapp10; 			
var vpak; 			
var vunpack; 		
var vpipe;
var vloadbang;
var vmettogM;
var verticalSpacing=30;

var _arduivis = this.patcher;


function arduivis(ins, outs){
	
	post(ins+" inputs \n");
	post(outs+" outputs \n");

	for(ii=0;ii<ins;ii++){
		inputs[ii] = 0;
	}
	
	for(oo=0;oo<outs;oo++){
		outputs[oo] = 0;
	}

	createScript(ins, outs);
	

	vinputs = ins;
	voutputs = outs;

	if(vinputs == 0){



		vmettogM 		= _arduivis.newdefault(85, verticalSpacing*7, "toggle", "1");
		vmessage		= _arduivis.newobject('message', 85, verticalSpacing*8, 30, 10, 'print');	
		vrouteport 		= _arduivis.newdefault(85, verticalSpacing*3, 'route', 'port');
		vtclear 		= _arduivis.newdefault(85, verticalSpacing*4, 't', 'clear');	
		viter 			= _arduivis.newdefault(200, verticalSpacing*5, 'iter');
		vpipe 			= _arduivis.newdefault(200, verticalSpacing*6, 'pipe', '200');
		vprependappend 	= _arduivis.newdefault(200, verticalSpacing*7, 'prepend', 'append');
		vumenu 			= _arduivis.newdefault(200, verticalSpacing*8, 'umenu');
		vprependport 	= _arduivis.newdefault(200, verticalSpacing*9, 'prepend', 'port');
		vserialport 	= _arduivis.newdefault(200, verticalSpacing*10, 'serial', 'arduivisPort', '9600');
		vsel 			= _arduivis.newdefault(200, verticalSpacing*11, 'sel', '13', '10');
		vzl 			= _arduivis.newdefault(200, verticalSpacing*12, 'zl', 'group', '1000');
		vitoa 			= _arduivis.newdefault(200, verticalSpacing*13,  'itoa');
		vsym 			= _arduivis.newdefault(200, verticalSpacing*14, 'fromsymbol');
		// vmettog 		= _arduivis.newdefault(305, verticalSpacing*2, "toggle");
		// vmetro 			= _arduivis.newdefault(305, verticalSpacing*3, "metro", "50");
		// vatoi 			= _arduivis.newdefault(305, verticalSpacing*4, 'atoi');	
		// vapp10 			= _arduivis.newdefault(305, verticalSpacing*5, 'append', '10');
		// vpak 			= _arduivis.newdefault(405, verticalSpacing*3,'pak', inputs);	
		vunpack 		= _arduivis.newdefault(200, verticalSpacing*15, 'unpack', outputs);			
	}
	if (voutputs ==0){
	
		vmettogM 		= _arduivis.newdefault(85, verticalSpacing*7, "toggle", "set", '1');	
		vmessage		= _arduivis.newobject('message', 85, verticalSpacing*8, 30, 10, 'print');	
		vrouteport 		= _arduivis.newdefault(100, verticalSpacing*3, 'route', 'port');
		vtclear 		= _arduivis.newdefault(100, verticalSpacing*4, 't', 'clear');	
		// vsprintf		= _arduivis.newdefault(100, verticalSpacing*6, 'sprintf', 'print')
		viter 			= _arduivis.newdefault(200, verticalSpacing*4, 'iter');
		vpipe 			= _arduivis.newdefault(200, verticalSpacing*5, 'pipe', '200');	
		vprependappend 	= _arduivis.newdefault(200, verticalSpacing*5, 'prepend', 'append');
		vumenu 			= _arduivis.newdefault(200, verticalSpacing*6, 'umenu');
		vprependport 	= _arduivis.newdefault(200, verticalSpacing*7, 'prepend', 'port');
		vserialport 	= _arduivis.newdefault(200, verticalSpacing*8, 'serial', 'arduivisPort', '9600');	
		// vsel 			= _arduivis.newdefault(200, verticalSpacing*7, 'sel', '13', '10');
		// vzl 			= _arduivis.newdefault(200, verticalSpacing*8, 'zl', 'group', '1000');
		// vitoa 			= _arduivis.newdefault(200, verticalSpacing*9,  'itoa');
		// vsym 			= _arduivis.newdefault(200, verticalSpacing*10, 'fromsymbol');
		vmettog 		= _arduivis.newdefault(305, verticalSpacing*4, "toggle");
		vmetro 			= _arduivis.newdefault(305, verticalSpacing*5, "metro", "50");
		vatoi 			= _arduivis.newdefault(305, verticalSpacing*6, 'atoi');	
		vapp10 			= _arduivis.newdefault(305, verticalSpacing*7, 'append', '10');
		vpak 			= _arduivis.newdefault(415, verticalSpacing*5,'pak', inputs);

	for(s=0;s<ins;s++){
		sliders[s] = _arduivis.newobject("slider",  415+(s*50), verticalSpacing*1, 40, 100);
	}		
	}

	// vbutton			= _arduivis.newobject('button', 100, verticalSpacing*5, 30, 30);		
	// vrouteport 		= _arduivis.newdefault(100, verticalSpacing*1, 'route', 'port');
	// vtclear 		= _arduivis.newdefault(100, verticalSpacing*2, 't', 'clear');	
	// vsprintf		= _arduivis.newdefault(100, verticalSpacing*6, 'sprintf', 'print')
	// viter 			= _arduivis.newdefault(200, verticalSpacing*2, 'iter')
	// vprependappend 	= _arduivis.newdefault(200, verticalSpacing*3, 'prepend', 'append')
	// vumenu 			= _arduivis.newdefault(200, verticalSpacing*4, 'umenu')
	// vprependport 	= _arduivis.newdefault(200, verticalSpacing*5, 'prepend', 'port')
	// vserialport 	= _arduivis.newdefault(200, verticalSpacing*6, 'serial', 'a', 'arduivis-port1')	
	// vsel 			= _arduivis.newdefault(200, verticalSpacing*7, 'sel', '13', '10');
	// vzl 			= _arduivis.newdefault(200, verticalSpacing*8, 'zl', 'group', '1000');
	// vitoa 			= _arduivis.newdefault(200, verticalSpacing*9,  'itoa');
	// vsym 			= _arduivis.newdefault(200, verticalSpacing*10, 'fromsymbol');
	// vmettog 		= _arduivis.newdefault(305, verticalSpacing*2, "toggle");
	// vmetro 			= _arduivis.newdefault(305, verticalSpacing*3, "metro", "50");
	// vatoi 			= _arduivis.newdefault(305, verticalSpacing*4, 'atoi');	
	// vapp10 			= _arduivis.newdefault(305, verticalSpacing*5, 'append', '10');
	// vpak 			= _arduivis.newdefault(405, verticalSpacing*3,'pak', inputs);	
	// vunpack 		= _arduivis.newdefault(200, verticalSpacing*11, 'unpack', outputs);	



	connectCables(); 

	outlet(1, "init");

		// outlet(0, "void setup(){Serial.begin(%s);} void loop(){int max%s=Serial.parseInt();}");	
}

function connectCables(){
	// _arduivis.connect(vloadbang, 0, vbutton, 0);
	_arduivis.connect(vserialport, 1, vrouteport, 0);
	_arduivis.connect(vrouteport, 0, viter, 0);
	_arduivis.connect(vrouteport, 0, vtclear, 0);
	_arduivis.connect(vtclear, 0, vumenu, 0);
	_arduivis.connect(vmettogM, 0, vmessage,0);
	_arduivis.connect(vmessage, 0, vserialport, 0);
	_arduivis.connect(viter, 0, vpipe, 0);
	_arduivis.connect(vpipe, 0, vprependappend, 0);
	_arduivis.connect(vprependappend, 0, vumenu, 0);
	_arduivis.connect(vumenu, 1, vprependport, 0);
	_arduivis.connect(vprependport, 0, vserialport, 0);
	_arduivis.connect(vserialport, 0, vsel, 0);
	_arduivis.connect(vsel, 0, vzl, 0);
	_arduivis.connect(vzl, 0, vitoa, 0);
	_arduivis.connect(vitoa, 0, vsym, 0);
	_arduivis.connect(vmettog, 0, vmetro, 0);
	_arduivis.connect(vmetro, 0, vatoi, 0);
	_arduivis.connect(vatoi, 0, vapp10, 0);	
 	_arduivis.connect(vapp10, 0, vserialport, 0);
 	_arduivis.connect(vpak, 0, vatoi, 2);

	for(sc=0;sc<vinputs;sc++){
		_arduivis.connect(sliders[sc], 0, vpak, sc);	
	}

	for(oo=0;oo<voutputs;oo++){
		_arduivis.connect(vsym, 0, vunpack, 0);	
	}
}

function createScript(scriptIn, scriptOut){
	spacer = '" "';
	outlet(0, "void setup(){" + '\n');
	outlet(0, "Serial.begin(9600);" + '\n' + "}" + '\n'); 
	outlet(0, "void loop(){"+'\n');

	for(ii=0;ii<scriptIn;ii++){
		if(scriptIn !== 0){
			outlet(0, "int arduivisSlider"+ii+ " = Serial.parseInt();"+'\n');
		}
	}
	
	for(oo=0;oo<scriptOut;oo++){
		if(scriptOut !== 0 && oo < scriptOut-1){		
			outlet(0, "Serial.println(arduivisSlider"+oo+"); Serial.println("+spacer+");"+'\n' );
		} 
		else if(oo+1 == scriptOut){
			outlet(0, "Serial.println(arduivisSlider"+oo+"); Serial.print("+spacer+");"+'\n' );
		}

	}
	outlet(0,"};");
}

function clear(){
	_arduivis.remove(vserialport);
	_arduivis.remove(vrouteport);
	_arduivis.remove(vtclear);
	_arduivis.remove(vbutton)
	_arduivis.remove(vmessage);
	_arduivis.remove(viter);
	_arduivis.remove(vpipe);
	_arduivis.remove(vprependappend);
	_arduivis.remove(vumenu);
	_arduivis.remove(vprependport);
	_arduivis.remove(vserialport);
	_arduivis.remove(vsel);
	_arduivis.remove(vsym);
	_arduivis.remove(vunpack);		
	_arduivis.remove(vzl);
	_arduivis.remove(vitoa)
	_arduivis.remove(vmettog);
	_arduivis.remove(vmetro); 
	_arduivis.remove(vatoi);
	_arduivis.remove(vapp10);
	_arduivis.remove(vpak);
	_arduivis.remove(sliders);
	_arduivis.remove(vmettogM);

	for(j=0;j<vinputs;j++){
		_arduivis.remove(sliders[j]);	
	}	
	// if(vinputs === 0){
	// 	post('hhinin');
	// 	// _arduivis.remove(vmettog);
	// 	// _arduivis.remove(vmetro); 
	// 	// _arduivis.remove(vatoi);
	// 	// _arduivis.remove(vapp10);
	// 	_arduivis.remove(vpak);		
	// }	
}

function location(x,y)
{
	vx = x;
	vy = y;
	if (vbox) {
		var width,height;
		var r = new Array();
		
		width  = vbox.rect[2] - vbox.rect[0];
		height = vbox.rect[3] - vbox.rect[1];
		r[0] = x;
		r[1] = y;
		r[2] = x+width;
		r[3] = y+height;
		
		vbox.rect = r;
	}
	
}

function sizebox(width,height)
{
	if (vbox) {
		var r = new Array();
		
		r[0] = vbox.rect[0];
		r[1] = vbox.rect[1];
		r[2] = vbox.rect[0]+width;
		r[3] = vbox.rect[1]+height;
		
		vbox.rect = r;
	}
}

function hidebox(hidden)
{
	if (vbox) {
		vbox.hidden = hidden;
	}
}

function sendtobox()
{
	var i;
	var a = new Array();
	
	// send any message the box understands to the box
	if (vbox) {
		if (vbox.understands(arguments[0])) {	
			for (i=0;i<(arguments.length-1);i++)
				a[i] = arguments[i+1];
			vbox[arguments[0]](a);
		} else if (vbox.understands("sendbox")) {
			for (i = 0; i < arguments.length; i++)
				a[i] = arguments[i];
			vbox["sendbox"](a);
		} else {
			post("doesn't understand " + arguments[0] + "\n");
		}
	}
}
