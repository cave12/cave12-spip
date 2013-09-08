// code pour liens sortants:

$(document).ready(function() { // The @ syntax is no longer supported in JQuery 1.3+.
 $("a[href^=http]").each(
   function(){ 
          if(this.href.indexOf(location.hostname) == -1) {
      $(this).attr('target', '_blank');
    }
  }
 ) 
});

// SHOW-HIDE
	$(document).ready(function(){
		$(".show-hide-action").click(function(){
			//$(this).replaceWith('<a href="#" class="hide-hide-action">moins d\'infos</a>');
			//$(".show-hide").slideToggle("slow");
			$(".show-hide").show("1000");
			$(".instant-show").show();
			$(this).hide();
			return false;
		});
	});
	
	$(document).ready(function(){
		$(".hide-hide-action").click(function(){
			//$(this).replaceWith('<a href="#" class="show-hide-action">plus d\'infos</a>');
			//$(".show-hide").slideToggle("slow");
			$(".show-hide").hide("1000");
			$(".show-hide-action").show();
			$(".instant-show").hide();
			return false;
		});
	});

// code pour formulaire mailing-liste:

function clearForm() { document.formulaire.email.value = "nom@adresse";
document.formulaire.email.select();}


// Dection du systeme d'exploitation

function systest() {
var OSName="Unknown OS";
if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
if (OSName == "Windows") {
	//alert("Working");
	document.body.style.fontFamily = "'Courier New',Consolas,Courier,monospace,sans-serif";
	}
}