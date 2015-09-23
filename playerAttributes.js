#pragma strict

var items: int;

function Start () 
{
	items = 0;
}

function Update () {

}

function add()
{
	items = items + 1;
}

function getItemsCount()
{
	return items;
}

function OnGUI () 
{
	GUI.Label (Rect (10, 10, 100, 20), "" + getItemsCount());
}