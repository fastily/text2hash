$(document).ready(function(){

	var calcHash = function() {

		var md;
		switch($("#alg-select option:selected").val())
		{
			case 'md5':
				md = forge.md.md5.create();
				break;
			case 'sha1':
				md = forge.md.sha1.create();
				break;
			case 'sha-256':
				md = forge.md.sha256.create();
				break;
			case 'sha-384':
				md = forge.md.sha384.create();
				break;
			case 'sha-512':
				md = forge.md.sha512.create();
				break;
			default:
				alert("Should never reach here?");
				break;
		}

		var text = $('#comment').val();
		if(text === "")
			$("#hashed").val("");
		else
		{
			md.update(text);
			$("#hashed").val(md.digest().toHex());
		}
	};


	$('#comment').keyup(calcHash);
	$('#alg-select').change(calcHash);
});