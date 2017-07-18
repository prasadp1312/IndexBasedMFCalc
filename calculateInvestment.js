function calculateInvestment() {
var Sensex_Today = parseFloat(document.getElementById("Sensex_Today").value);
var Sensex_Previous = parseFloat(document.getElementById("Sensex_Previous").value);
var Nifty_Today = parseFloat(document.getElementById("Nifty_Today").value);
var Nifty_Previous = parseFloat(document.getElementById("Nifty_Previous").value);
var Sensex_Intra = parseFloat(document.getElementById("Sensex_Intra").value);
var Nifty_Intra = parseFloat(document.getElementById("Nifty_Intra").value);
var PE = parseFloat(document.getElementById("PE").value);
var PB = parseFloat(document.getElementById("PB").value);
var MMI = parseFloat(document.getElementById("MMI").value);
var Div_Yld = parseFloat(document.getElementById("Div_Yld").value);
Nifty50STAmt = getVal("Nifty50ST");
Nifty50PSARAmt = getVal("Nifty50PSAR");
Nifty50WilliamsRAmt = getVal("Nifty50WilliamsR");
NiftyMidcap50STAmt = getVal("NiftyMidcap50ST");
NiftyMidcap50PSARAmt = getVal("NiftyMidcap50PSAR");
NiftyMidcap50WilliamsRAmt = getVal("NiftyMidcap50WilliamsR");
var SensexFact = 20;
var NiftyFact =  20;
SensexIntraFact = 20;
NiftyIntraFact = 20;
MMIFact = 35;
PEFact = 45;
PBFact = 40;
Div_YldFact = 40;
Nifty50STFact = 2;
Nifty50PSARFact	= 2;	
Nifty50WilliamsRFact = 1;
NiftyMidcap50STFact = 2;
NiftyMidcap50PSARFact =	2;	
NiftyMidcap50WilliamsRFact = 1;
SensexDiff = Sensex_Today - Sensex_Previous;
SensexDiff = parseFloat(Math.round(SensexDiff * 100) / 100).toFixed(2);
SensexWt = getWt(SensexDiff);
SensexAmt = SensexFact * SensexWt;
NiftyDiff = Nifty_Today - Nifty_Previous;
NiftyDiff = parseFloat(Math.round(NiftyDiff * 100) / 100).toFixed(2);
NiftyWt = getWt(NiftyDiff);
NiftyAmt = NiftyFact * NiftyWt;
SensexIntraDiff = Sensex_Intra - Sensex_Today;
SensexIntraDiff = parseFloat(Math.round(SensexIntraDiff * 100) / 100).toFixed(2);
SensexIntraWt = getWt(SensexIntraDiff);
SensexIntraAmt = SensexIntraFact * SensexIntraWt;
NiftyIntraDiff = Nifty_Intra - Nifty_Today;
NiftyIntraDiff = parseFloat(Math.round(NiftyIntraDiff * 100) / 100).toFixed(2);
NiftyIntraWt = getWt(NiftyIntraDiff);
NiftyIntraAmt = NiftyIntraFact * NiftyIntraWt;
 if (between(23.5,23.99,PE))
     PEWeight = 0.5;
 else if (between(23.00,23.50,PE))
     PEWeight = 0.55;
 else if (between(22.51,22.99,PE))
     PEWeight = 0.6;
 else if (between(22.00,22.50,PE))
     PEWeight = 0.65;
 else if (between(21.51,21.99,PE))
     PEWeight =  0.7;
 else if (between(21.00,21.50,PE))
     PEWeight =  0.75;
 else if (between(20.51,21.99,PE))
     PEWeight = 0.8;
 else if (between(20.00,20.5,PE))
     PEWeight = 0.85;
 else if (between(19.01,19.99,PE))
     PEWeight = 0.9;
 else if (between(18.01,18.99,PE))
     PEWeight = 1.0;
 else if (between(17.01,17.99,PE))
     PEWeight = 1.1;
 else if (between(16.01,16.99,PE))
     PEWeight = 1.2;
 else if (between(15.01,15.99,PE))
     PEWeight = 1.3;
 else if (between(14.01,14.99,PE))
     PEWeight = 1.4;
 else if (between(13.01,13.99,PE))
     PEWeight = 1.5;
PEAmt =  PEFact * PEWeight;
	
if (between(0,29.99,MMI))
     MMIWeight = 1.5;
 else if (between(30,35.99,MMI))
     MMIWeight = 1.4;
 else if (between(36,40,MMI))
     MMIWeight = 1.3;
 else if (between(40.01,45.00,MMI))
     MMIWeight = 1.2;
 else if (between(45.01,49.99,MMI))
     MMIWeight =  1.1;
 else if (between(50,55,MMI))
     MMIWeight =  1.0;
 else if (between(55.01,60,MMI))
     MMIWeight = 0.9;
 else if (between(60.01,65,MMI))
     MMIWeight = 0.8;
 else if (between(65.01,70,MMI))
     MMIWeight = 0.7;
 else if (between(70.01,75,MMI))
     MMIWeight = 0.6;
 else if (between(75.01,80,MMI))
     MMIWeight = 0.5;
 else if (between(80.01,100,MMI))
     MMIWeight = 0.4;	 
MMIAmt = MMIFact * MMIWeight;
	
 if (between(0,2.50,PB))
     PBWeight = 1.55;
 else if (between(2.51,2.55,PB))
     PBWeight = 1.5;
 else if (between(2.56,2.60,PB))
     PBWeight = 1.45;
 else if (between(2.61,2.65,PB))
     PBWeight = 1.4;
 else if (between(2.66,2.70,PB))
     PBWeight =  1.35;
 else if (between(2.71,2.75,PB))
     PBWeight =  1.3;
 else if (between(2.76,2.80,PB))
     PBWeight = 1.25;
 else if (between(2.81,2.85,PB))
     PBWeight = 1.2;
 else if (between(2.86,2.90,PB))
     PBWeight = 1.15;
 else if (between(2.91,2.95,PB))
     PBWeight = 1.10;
 else if (between(2.96,3.00,PB))
     PBWeight = 1.05;
 else if (between(3.01,3.05,PB))
     PBWeight = 1;
 else if (between(3.06,3.10,PB))
     PBWeight = 0.95;
 else if (between(3.11,3.15,PB))
     PBWeight = 0.90;
 else if (between(3.16,3.20,PB))
     PBWeight = 0.85;
 else if (between(3.21,3.25,PB))
     PBWeight = 0.80;
 else if (between(3.26,3.30,PB))
     PBWeight =  0.75;
 else if (between(3.31,3.35,PB))
     PBWeight =  0.70;
 else if (between(3.36,3.40,PB))
     PBWeight = 0.65;
 else if (between(3.41,3.45,PB))
     PBWeight = 0.60;
 else if (between(3.46,3.50,PB))
     PBWeight = 0.55;
 else if (between(3.51,3.55,PB))
     PBWeight = 0.50;
 else if (between(3.56,3.60,PB))
     PBWeight = 0.45;
 else if (between(3.61,3.65,PB))
     PBWeight = 0.40;
else if (between(3.66,3.70,PB))
     PBWeight = 0.35;
 else if (between(3.71,3.75,PB))
     PBWeight = 0.30;
 else if (between(3.76,3.80,PB))
     PBWeight = 0.25;
 else if (between(3.81,3.85,PB))
     PBWeight = 0.20;
 else if (between(3.86,3.90,PB))
     PBWeight =  0.15;
 else if (between(3.91,3.95,PB))
     PBWeight =  0.1;
 else if (between(3.96,4.00,PB))
     PBWeight =  0.05;
	 
PBAmt =  PBFact * PBWeight;	 
 if (Div_Yld >= 2.91)
     DYWeight = 1.50;
 else if (between(2.81,2.90,Div_Yld))
     DYWeight = 1.45;
 else if (between(2.71,2.80,Div_Yld))
     DYWeight = 1.40;
 else if (between(2.61,2.70,Div_Yld))
     DYWeight = 1.35;
 else if (between(2.51,2.60,Div_Yld))
     DYWeight =  1.30;
 else if (between(2.41,2.50,Div_Yld))
     DYWeight =  1.25;
 else if (between(2.31,2.40,Div_Yld))
     DYWeight = 1.20;
 else if (between(2.21,2.30,Div_Yld))
     DYWeight = 1.15;
 else if (between(2.10,2.20,Div_Yld))
     DYWeight = 1.10;
 else if (between(2.01,2.09,Div_Yld))
     DYWeight = 1.05;
 else if (between(1.91,2.00,Div_Yld))
     DYWeight = 1.00;
 else if (between(1.81,1.90,Div_Yld))
     DYWeight = 0.95;
 else if (between(1.71,1.80,Div_Yld))
     DYWeight = 0.90;
 else if (between(1.61,1.70,Div_Yld))
     DYWeight = 0.85;
 else if (between(1.51,1.60,Div_Yld))
     DYWeight = 0.80;
 else if (between(1.41,1.50,Div_Yld))
     DYWeight = 0.75;
 else if (between(1.31,1.40,Div_Yld))
     DYWeight =  0.70;
 else if (between(1.21,1.30,Div_Yld))
     DYWeight =  0.65;
 else if (between(1.11,1.20,Div_Yld))
     DYWeight = 0.60;
 else if (between(1.01,1.10,Div_Yld))
     DYWeight = 0.55;
 else if (Div_Yld <= 1)
     DYWeight = 0.50;
Div_YldAmt =  Div_YldFact * DYWeight;	
Investment = 500 + SensexAmt + SensexIntraAmt + NiftyAmt + NiftyIntraAmt + MMIAmt + PEAmt + PBAmt + Div_YldAmt + Nifty50STAmt + Nifty50PSARAmt + Nifty50WilliamsRAmt +NiftyMidcap50STAmt + NiftyMidcap50PSARAmt + NiftyMidcap50WilliamsRAmt;
Investment = Math.round(parseFloat(Math.round(Investment * 100) / 100).toFixed(2));
result = Investment.toString();
document.getElementById("Investment1").innerHTML = result;
result = Investment * 1.75;
result = Math.round(parseFloat(Math.round(result * 100) / 100).toFixed(2));
result = result.toString();
document.getElementById("Investment2").innerHTML = result;
result = Investment * 2.5;
result = Math.round(parseFloat(Math.round(result * 100) / 100).toFixed(2));
result = result.toString();
document.getElementById("Investment3").innerHTML = result;
result = Investment * 3.5;
result = Math.round(parseFloat(Math.round(result * 100) / 100).toFixed(2));
result = result.toString();
document.getElementById("Investment4").innerHTML = result;
Amount = 500 + " Sensex: "+ SensexAmt.toString() + "(wt) "+ SensexWt.toString() + " ,SensexIntra: "  + SensexIntraAmt.toString() +"(wt) "+  SensexIntraWt.toString() +
			   " ,Nifty: "  + NiftyAmt.toString() + "(wt) "+NiftyWt.toString() + " NiftyIntra: "  + NiftyIntraAmt.toString() +"(wt) "+ NiftyIntraWt.toString() +
			   " ,MMI: "  + MMIAmt.toString() + "(wt) "+MMIWeight.toString() + "PE: "  + PEAmt.toString() + "(wt) "+PEWeight.toString() +
			   " ,PB: "  + PBAmt.toString() +"(wt) "+ PBWeight.toString() + "Div_Yld: "  + Div_YldAmt.toString() + "(wt) "+ DYWeight.toString() +
			   " ,Nifty50ST: "  + Nifty50STAmt.toString() + " Nifty50PSAR: "  + Nifty50PSARAmt.toString() + 
			   " ,Nifty50WilliamsR: "  + Nifty50WilliamsRAmt.toString() + " NiftyMidcap50ST: "  +NiftyMidcap50STAmt.toString() + 
			   " ,NiftyMidcap50PSAR: "  + NiftyMidcap50PSARAmt.toString() + " NiftyMidcap50WilliamsR: " + NiftyMidcap50WilliamsRAmt.toString();
document.getElementById("Amount").innerHTML = Amount;

var d = new Date();
document.getElementById("showDate").innerHTML = d;
}
function getWt(param)
{
if (param >= 301)
     Weight = 0.4;
 else if (between(251,300.99,param))
     Weight = 0.5;
 else if (between(201,250.99,param))
     Weight = 0.6;
 else if (between(151,200.99,param))
     Weight = 0.7;
 else if (between(101,150.99,param))
     Weight = 0.8;
 else if (between(51,100.99,param))
     Weight =  0.9;
 else if (between(50.99,-50.99,param))
     Weight =  1.0;
 else if (between(-100.99,-51,param))
     Weight = 1.1;
 else if (between(-150.99,-101,param))
     Weight = 1.2;
 else if (between(-200.99,-151,param))
     Weight = 1.3;
 else if (between(-250.99,-201,param))
     Weight = 1.4;
 else if (between(-300.99,-251,param))
     Weight = 1.5;
 else if (param <= -301.99)
     Weight = 1.6;	 
return Weight;
}
function between(lt1,lt2,param)
{
low = lt1;
high = lt2;
if (low > high){
    low = lt2;
    high = lt1; }
return (param >= low && param <= high);
}
function getVal(param)
{
var e = document.getElementById(param);
var val = parseFloat(e.options[e.selectedIndex].value);
return val;
}
function filldefaultvalues()
{
document.getElementById("Sensex_Today").value = 31290.74;
document.getElementById("Sensex_Previous").value = 31283.64;
document.getElementById("Nifty_Today").value = 17907.90;
document.getElementById("Nifty_Previous").value = 18045.85;
document.getElementById("Sensex_Intra").value = 31160;
document.getElementById("Nifty_Intra").value = 17619;
document.getElementById("PE").value = 22.91;
document.getElementById("PB").value = 3.00;
document.getElementById("MMI").value = 49.04;
document.getElementById("Div_Yld").value = 1.24;
document.getElementById("Nifty50ST").value = 2;
document.getElementById("Nifty50PSAR").value = 0;
document.getElementById("Nifty50WilliamsR").value = 0;
document.getElementById("NiftyMidcap50ST").value = 0;
document.getElementById("NiftyMidcap50PSAR").value = 2;
document.getElementById("NiftyMidcap50WilliamsR").value = 0;
}
