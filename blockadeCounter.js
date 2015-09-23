#pragma strict

var playerattr: playerAttributes;
var valueNeeded: int;

function Start () 
{

}

function Update () 
{
	GetComponent.<TextMesh>().text = "" + getCurrentValue();
}

function getCurrentValue()
{
	return valueNeeded - playerattr.getItemsCount();
}