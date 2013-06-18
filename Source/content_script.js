walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bCloud Computing\b/g, "NSA Datamining");
	v = v.replace(/\bcloud Computing\b/g, "NSA Datamining");
	v = v.replace(/\bCloud computing\b/g, "NSA datamining");
	v = v.replace(/\bcloud computing\b/g, "NSA datamining");

	v = v.replace(/\bcloud computing\b/gi, "NSA datamining");
	v = v.replace(/\bcloudcomputing\b/gi, "NSAdatamining");
	v = v.replace(/\bcloud_computing\b/gi, "NSA_datamining");
	v = v.replace(/\bcloud-computing\b/gi, "NSA-datamining");
	

	v = v.replace(/\bThe Cloud\b/g, "The NSA");
	v = v.replace(/\bThe cloud\b/g, "The NSA");
	v = v.replace(/\bthe Cloud\b/g, "the NSA");
	v = v.replace(/\bthe cloud\b/g, "the NSA");

	v = v.replace(/\bthe cloud\b/gi, "the NSA");
	v = v.replace(/\bthecloud\b/gi, "theNSA");
	v = v.replace(/\bthe_cloud\b/gi, "the_NSA");
	v = v.replace(/\bthe-cloud\b/gi, "the-NSA");
	
	
	textNode.nodeValue = v;
}


