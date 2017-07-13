			class Cancion{
			constructor (titulo,artista,duracion,codec,genero)
			{
			this.titulo=titulo;
			this.artista=artista;
			this.duracion=duracion;
			this.codec=codec;
			this.genero=genero;
			this.estado=false;
			
			}
			
			reproducir()
			{
				this.estado=true;
			}
				detener()
				{
				this.estado=false;
				}
				
				nombre()
				{
				return this.artista+" "+this.titulo;
				}
				
				
		}
		
		var nuevaCancion=new Cancion("Almohada De Piedra","La Renga","3:59","mp3","HardRock");
		nuevaCancion.reproducir();
		console.log ("El estado de la canción es:"+nuevaCancion.nombre());
		
		var nuevaCancion2=new Cancion("Lejos De Casa","Skay Beilinson","3:11","mp3","Rock");
		nuevaCancion2.reproducir();
		console.log ("El estado de la canción es:"+nuevaCancion2.nombre());
			