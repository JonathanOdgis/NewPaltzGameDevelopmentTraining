#pragma strict

var projectile : Rigidbody;
var projSpeed = 100;
var clone : Rigidbody;
   
function Update () 
{
	if (Input.GetButtonDown("Fire1")) 
	{
		clone = Instantiate(projectile, transform.position, transform.rotation);
		clone.velocity = transform.TransformDirection (Vector3.forward * projSpeed);	
		Destroy(clone.gameObject, .3);
	}

}