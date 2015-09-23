#pragma strict

var anim: Animator;
var isOpened: boolean;
var entranceTrig: GameObject;

function Start () 
{
	isOpened = false;
	entranceTrig.SetActive(false);
}

function Update () 
{
	anim.SetBool("isOpened", isOpened);	
}

function open()
{
	isOpened = true;
	entranceTrig.SetActive(true);	

}
