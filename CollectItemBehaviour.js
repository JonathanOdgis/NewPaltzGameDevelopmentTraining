#pragma strict

var playerattr: playerAttributes;

function Start () 
{

}

function Update () 
{
	transform.Rotate(Vector3.forward , 50 * Time.deltaTime);
	transform.Rotate(Vector3.right , 50 * Time.deltaTime);
}

function OnTriggerEnter(other: Collider)
{
	if (other.CompareTag("Player"))
	{
		playerattr.add();
		Destroy(this.gameObject);
	}
}