/*
	Sistema desenvolvido por SatellaSoft
	www.satellasoft.com
	Leia nossos termos de uso e politica de privacidade em nosso site.
*/

var Editor = null;
			 
		document.addEventListener("DOMContentLoaded", function(){
			Editor = new myEditor();
			Editor.Start();
			
			setInterval(function(){
				var valor = document.getElementById('Editor').contentWindow.document.body.innerHTML
				document.getElementById("txtEditor").value = valor;
			}, 1000);
		});

			function myEditor() {
				this.getEditor = function() {
					return document.getElementById("Editor").contentWindow.document;
				};


				this.Start = function() {
					this.getEditor().designMode = 'on'; //Inicia o modo Design
					//Desativa a formatação padrão em CSS
					try { this.getEditor().execCommand("styleWithCSS", 0, false); }
					catch (e) { try { this.getEditor().execCommand("useCSS", 0, true); } catch (e) { } }
				}; 
				
				
				//Novo documento
				document.getElementById("btn_new").addEventListener("click", function(){
							
					if(confirm("Deseja realmente criar um novo documento?")){
						document.getElementById('Editor').contentWindow.document.body.innerHTML = "";
					}							
					return false; 
				});
				
				//Deletar pedaço
				document.getElementById("btn_delete").addEventListener("click", function(){
										
					Editor.getEditor().execCommand('delete', false, null);
					return false; 
				});

				//Alterar para Negrito
				document.getElementById("btn_bold").addEventListener("click", function(){
					Editor.getEditor().execCommand("styleWithCSS", true, null);
					Editor.getEditor().execCommand("bold", false, null);
					return false; 
				});
				
				//Alterar para Itálico
				document.getElementById("btn_italic").addEventListener("click", function(){
					Editor.getEditor().execCommand("styleWithCSS", true, null);
					Editor.getEditor().execCommand("italic", false, null);
					return false; 
				});
				
				//Alterar para Underline
				document.getElementById("btn_underline").addEventListener("click", function(){
					Editor.getEditor().execCommand("styleWithCSS", true, null);
					Editor.getEditor().execCommand("underline", false, null);
					return false; 
				});
				
				//Alterar Fonte
				document.getElementById("slFonte").addEventListener("change", function(){
					
					var fonteName = document.getElementById("slFonte").value;
					
					Editor.getEditor().execCommand('fontName', false, fonteName);
					return false; 
				});
				
				//Alterar Tamanho Fonte
				document.getElementById("slSize").addEventListener("change", function(){
					
					var fontSize = document.getElementById("slSize").value;
					
					Editor.getEditor().execCommand('fontSize', false, fontSize);
					return false; 
				});
				
				//Alterar Cor
				document.getElementById("btn_color").addEventListener("click", function(){
					
					var colorName = prompt("Insira o nome da cor:");
					
					Editor.getEditor().execCommand('foreColor', false, colorName);
					return false; 
				});
				
				//Inserir imagem
				document.getElementById("btn_image").addEventListener("click", function(){
					
					var linkImage = prompt("Insira o link da imagem");
					if(linkImage!= null){
						Editor.getEditor().execCommand('insertImage', false, linkImage);
					}
					return false; 
				});
				
				//Alinhar a esquerda
				document.getElementById("btn_left").addEventListener("click", function(){
										
					Editor.getEditor().execCommand('justifyLeft', false, null);
					return false; 
				});
				
				//Centralizar
				document.getElementById("btn_center").addEventListener("click", function(){
										
					Editor.getEditor().execCommand('justifyCenter', false, null);
					return false; 
				});
				
				
				//Alinhar a direita
				document.getElementById("btn_right").addEventListener("click", function(){
										
					Editor.getEditor().execCommand('justifyright', false, null);
					return false; 
				});
				
				//Justificar
				document.getElementById("btn_justify").addEventListener("click", function(){
										
					Editor.getEditor().execCommand('justifyFull', false, null);
					return false; 
				});
				
				//<hr />
				document.getElementById("btn_line").addEventListener("click", function(){
										
					Editor.getEditor().execCommand('insertHorizontalRule', false, null);
					return false; 
				});
				
				//Lista ordenada
				document.getElementById("btn_ordered").addEventListener("click", function(){
										
					Editor.getEditor().execCommand('insertOrderedList', false, null);
					return false; 
				});
				
				//Lista não ordenada
				document.getElementById("btn_unordered").addEventListener("click", function(){
										
					Editor.getEditor().execCommand('insertUnorderedList', false, null);
					return false; 
				});
				
				//Inserir Link
				document.getElementById("btn_link").addEventListener("click", function(){
										
					var url = prompt("Insira a URL: ");
										
					Editor.getEditor().execCommand('createLink', false, url);
					return false; 
				});
				
				
				//Remover Link
				document.getElementById("btn_link_break").addEventListener("click", function(){
																				
					Editor.getEditor().execCommand('unlink', false, null);
					return false; 
				});
				
				/*
					Copy, Cut and past only it work in Maxthon Browser and Internet Explorer
				*/
				
				//Copy
				document.getElementById("btn_copy").addEventListener("click", function(){
																				
					Editor.getEditor().execCommand('copy', false, null);
					return false; 
				});
				
				//Cut
				document.getElementById("btn_cut").addEventListener("click", function(){							
					Editor.getEditor().execCommand('cut', false, null);
					return false; 
				});
				
				//Paste
				document.getElementById("btn_paste").addEventListener("click", function(){
																				
					Editor.getEditor().execCommand('paste', false, null);
					return false; 
				});
				
				//Undo
				document.getElementById("btn_undo").addEventListener("click", function(){
																				
					Editor.getEditor().execCommand('undo', false, null);
					return false; 
				});
				
				//Redo
				document.getElementById("btn_redo").addEventListener("click", function(){
																				
					Editor.getEditor().execCommand('redo', false, null);
					return false; 
				});	
			
				//Insert Audio, Only Maxthon test and it work
				document.getElementById("btn_audio").addEventListener("click", function(){
						
					var url = prompt("Insira a URL: ");
					
					if(url != null){
						var html = "<audio controls> <source src=\""+url+"\" type=\"audio/mpeg\"> Your browser does not support the audio element.</audio>";
						Editor.getEditor().execCommand('insertHTML', false, html);
					}
					return false; 
				});		
				
				//Select All
				document.getElementById("btn_select").addEventListener("click", function(){
																				
					Editor.getEditor().execCommand('selectAll', false, null);
					return false; 
				});
				
				//<p>
				document.getElementById("btn_paragraph").addEventListener("click", function(){
																				
					Editor.getEditor().execCommand('insertParagraph', false, null);
					return false; 
				});
				
			}