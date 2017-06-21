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
 if (PE >= 23.5 && PE <= 23.99)
     PEWeight = 0.5;
 else if (PE >= 23.00 && PE <= 23.50)
     PEWeight = 0.55;
 else if (PE >= 22.51 && PE <= 22.99)
     PEWeight = 0.6;
 else if (PE >= 22.00 && PE <= 22.50)
     PEWeight = 0.65;
 else if (PE >= 21.51 && PE <= 21.99)
     PEWeight =  0.7;
 else if (PE >= 21.00 && PE <= 21.50)
     PEWeight =  0.75;
 else if (PE >= 20.51 && PE <= 21.99)
     PEWeight = 0.8;
 else if (PE >= 20.00 && PE <= 20.5)
     PEWeight = 0.85;
 else if (PE >= 19.01 && PE <= 19.99)
     PEWeight = 0.9;
 else if (PE >= 18.01 && PE <= 18.99)
     PEWeight = 1.0;
 else if (PE >= 17.01 && PE <= 17.99)
     PEWeight = 1.1;
 else if (PE >= 16.01 && PE <= 16.99)
     PEWeight = 1.2;
 else if (PE >= 15.01 && PE <= 15.99)
     PEWeight = 1.3;
 else if (PE >= 14.01 && PE <= 14.99)
     PEWeight = 1.4;
 else if (PE >= 13.01 && PE <= 13.99)
     PEWeight = 1.5;
PEAmt =  PEFact * PEWeight;
if (MMI >= 0 && MMI <= 29.99)
     MMIWeight = 1.5;
 else if (MMI >= 30 && MMI <= 35.99)
     MMIWeight = 1.4;
 else if (MMI >= 36 && MMI <= 40.99)
     MMIWeight = 1.3;
 else if (MMI >= 41 && MMI <= 45.00)
     MMIWeight = 1.2;
 else if (MMI >= 45.01 && MMI <= 49.99)
     MMIWeight =  1.1;
 else if (MMI >= 50 && MMI <= 55)
     MMIWeight =  1.0;
 else if (MMI >= 55.01 && MMI <= 60)
     MMIWeight = 0.9;
 else if (MMI >= 60.01 && MMI <= 65)
     MMIWeight = 0.8;
 else if (MMI >= 65.01 && MMI <= 70)
     MMIWeight = 0.7;
 else if (MMI >= 70.01 && MMI <= 75)
     MMIWeight = 0.6;
 else if (MMI >= 75.01 && MMI <= 80)
     MMIWeight = 0.5;
 else if (MMI >= 80.01 && MMI <= 100)
     MMIWeight = 0.4;
	 
MMIAmt = MMIFact * MMIWeight;
 if (PB >= 0 && PB <= 2.50)
     PBWeight = 1.55;
 else if (PB >= 2.51 && PB <= 2.55)
     PBWeight = 1.5;
 else if (PB >= 2.56 && PB <= 2.60)
     PBWeight = 1.45;
 else if (PB >= 2.61 && PB <= 2.65)
     PBWeight = 1.4;
 else if (PB >= 2.66 && PB <= 2.70)
     PBWeight =  1.35;
 else if (PB >= 2.71 && PB <= 2.75)
     PBWeight =  1.3;
 else if (PB >= 2.76 && PB <= 2.80)
     PBWeight = 1.25;
 else if (PB >= 2.81 && PB <= 2.85)
     PBWeight = 1.2;
 else if (PB >= 2.86 && PB <= 2.90)
     PBWeight = 1.15;
 else if (PB >= 2.91 && PB <= 2.95)
     PBWeight = 1.10;
 else if (PB >= 2.96 && PB <= 3.00)
     PBWeight = 1.05;
 else if (PB >= 3.01 && PB <= 3.05)
     PBWeight = 1;
 else if (PB >= 3.06 && PB <= 3.10)
     PBWeight = 0.95;
 else if (PB >= 3.11 && PB <= 3.15)
     PBWeight = 0.90;
 else if (PB >= 3.16 && PB <= 3.20)
     PBWeight = 0.85;
 else if (PB >= 3.21 && PB <= 3.25)
     PBWeight = 0.80;
 else if (PB >= 3.26 && PB <= 3.30)
     PBWeight =  0.75;
 else if (PB >= 3.31 && PB <= 3.35)
     PBWeight =  0.70;
 else if (PB >= 3.36 && PB <= 3.40)
     PBWeight = 0.65;
 else if (PB >= 3.41 && PB <= 3.45)
     PBWeight = 0.60;
 else if (PB >= 3.46 && PB <= 3.50)
     PBWeight = 0.55;
 else if (PB >= 3.51 && PB <= 3.55)
     PBWeight = 0.50;
 else if (PB >= 3.56 && PB <= 3.60)
     PBWeight = 0.45;
 else if (PB >= 3.61 && PB <= 3.65)
     PBWeight = 0.40;
else if (PB >= 3.66 && PB <= 3.70)
     PBWeight = 0.35;
 else if (PB >= 3.71 && PB <= 3.75)
     PBWeight = 0.30;
 else if (PB >= 3.76 && PB <= 3.80)
     PBWeight = 0.25;
 else if (PB >= 3.81 && PB <= 3.85)
     PBWeight = 0.20;
 else if (PB >= 3.86 && PB <= 3.90)
     PBWeight =  0.15;
 else if (PB >= 3.91 && PB <= 3.95)
     PBWeight =  0.1;
 else if (PB >= 3.96 && PB <= 4.00)
     PBWeight =  0.05;
	 
PBAmt =  PBFact * PBWeight;	 
 if (Div_Yld >= 2.9)
     DYWeight = 1.50;
 else if (Div_Yld >= 2.81 && Div_Yld <= 2.89)
     DYWeight = 1.45;
 else if (Div_Yld >= 2.71 && Div_Yld <= 2.79)
     DYWeight = 1.40;
 else if (Div_Yld >= 2.61 && Div_Yld <= 2.69)
     DYWeight = 1.35;
 else if (Div_Yld >= 2.51 && Div_Yld <= 2.59)
     DYWeight =  1.30;
 else if (Div_Yld >= 2.41 && Div_Yld <= 2.49)
     DYWeight =  1.25;
 else if (Div_Yld >= 2.31 && Div_Yld <= 2.39)
     DYWeight = 1.20;
 else if (Div_Yld >= 2.21 && Div_Yld <= 2.29)
     DYWeight = 1.15;
 else if (Div_Yld >= 2.10 && Div_Yld <= 2.19)
     DYWeight = 1.10;
 else if (Div_Yld >= 2.01 && Div_Yld <= 2.09)
     DYWeight = 1.05;
 else if (Div_Yld >= 1.91 && Div_Yld <= 2.00)
     DYWeight = 1.00;
 else if (Div_Yld >= 1.81 && Div_Yld <= 1.90)
     DYWeight = 0.95;
 else if (Div_Yld >= 1.71 && Div_Yld <= 1.80)
     DYWeight = 0.90;
 else if (Div_Yld >= 1.61 && Div_Yld <= 1.70)
     DYWeight = 0.85;
 else if (Div_Yld >= 1.51 && Div_Yld <= 1.60)
     DYWeight = 0.80;
 else if (Div_Yld >= 1.41 && Div_Yld <= 1.50)
     DYWeight = 0.75;
 else if (Div_Yld >= 1.31 && Div_Yld <= 1.40)
     DYWeight =  0.70;
 else if (Div_Yld >= 1.21 && Div_Yld <= 1.30)
     DYWeight =  0.65;
 else if (Div_Yld >= 1.11 && Div_Yld <= 1.20)
     DYWeight = 0.60;
 else if (Div_Yld >= 1.01 && Div_Yld <= 1.10)
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
 else if (param >= 251 && param <= 300.99)
     Weight = 0.5;
 else if (param >= 201 && param <= 250.99)
     Weight = 0.6;
 else if (param >= 151 && param <= 200.99)
     Weight = 0.7;
 else if (param >= 101 && param <= 150.99)
     Weight = 0.8;
 else if (param >= 51 && param <= 100.99)
     Weight =  0.9;
 else if (param <= 50 && param >= -50.99)
     Weight =  1.0;
 else if (param <= -100 && param >= -51.99)
     Weight = 1.1;
 else if (param <= -150 && param >= -101.99)
     Weight = 1.2;
 else if (param <= -200 && param >= -151.99)
     Weight = 1.3;
 else if (param <= -250 && param >= -201.99)
     Weight = 1.4;
 else if (param <= -300 && param >= -251.99)
     Weight = 1.5;
 else if (param <= -301.99)
     Weight = 1.6;
	 
return Weight;
}
function getVal(param)
{
var e = document.getElementById(param);
var val = parseFloat(e.options[e.selectedIndex].value);
return val;
}
function filldefaultvalues()
{
document.getElementById("Sensex_Today").value = 29926.15;
document.getElementById("Sensex_Previous").value = 29858.8;
document.getElementById("Nifty_Today").value = 18162.85;
document.getElementById("Nifty_Previous").value = 18048.6;
document.getElementById("Sensex_Intra").value = 29957.9;
document.getElementById("Nifty_Intra").value = 18271.1;
document.getElementById("PE").value = 22.67;
document.getElementById("PB").value = 2.92;
document.getElementById("MMI").value = 51.17;
document.getElementById("Div_Yld").value = 1.39;
document.getElementById("Nifty50ST").value = 2;
document.getElementById("Nifty50PSAR").value = 2;
document.getElementById("Nifty50WilliamsR").value = 0;
document.getElementById("NiftyMidcap50ST").value = 2;
document.getElementById("NiftyMidcap50PSAR").value = 2;
document.getElementById("NiftyMidcap50WilliamsR").value = 0;
}
