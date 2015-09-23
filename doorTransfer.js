#pragma strict

var destination: Transform;
var isInDoor: boolean;

var playerRef: GameObject;

function Start () 
{
	//isInDoor = false;	
}

function Update () 
{
	
}

function OnTriggerEnter(other: Collider)
{
	if (other.CompareTag("Player"))
	{
		other.gameObject.transform.position = destination.transform.position;		
	}
}