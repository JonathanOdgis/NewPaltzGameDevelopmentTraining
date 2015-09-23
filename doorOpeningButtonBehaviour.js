#pragma strict

var door: doorBehaviour;

function Start () 
{
	
}

function Update () {

}

function OnTriggerEnter(other: Collider)
{
	door.open();
}