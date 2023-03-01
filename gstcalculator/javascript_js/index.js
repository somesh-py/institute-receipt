	$(document).ready(function()
	{
		$("#gstpersentage").change(function()
		{	
			var amountone=parseInt($("#gstpersentage").val());
			var amount=parseInt($("#payfees").val());
			var nnt=parseInt(amount*amountone)/100;
			$("#gstamount").val(nnt);

			var cgst=nnt*1/2;
			$("#cgst").val(cgst);
			$("#sgst").val(cgst);

			var totalamount=amount+nnt;
			$("#totalfees").val(totalamount);
		});

		$("#print").click(function()
		{
			window.print();
		});
	});