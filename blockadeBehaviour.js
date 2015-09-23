#pragma strict

var blockadeCount: blockadeCounter;

function Start () {

}

function Update () 
{
	if (blockadeCount.getCurrentValue() == 0)
	{
		Destroy(this.gameObject);
	}
}