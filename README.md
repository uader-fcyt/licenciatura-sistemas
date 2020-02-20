

![N|Solid](https://fcytvirtual.uader.edu.ar/pluginfile.php/1/theme_klass/logo/1573658134/fcyt.png)

Este repositorio de apuntes, modelos de parciales y finales evaluados pertenece a un grupo de alumnos de la carrera Licenciatura en Sistemas de Información.
El repositorio no esta a cargo de ningún area o entidad representante de la FCyT. Por lo cual los apuntes y examenes modelos son pura y exclusiva responsabilidad de los alumnos que se encuentran en el grupo UADER-FCyT Sistemas en Telegram. 
En el repositorio podremos compartir.
  - Apuntes, teoricos/practicos de las catedras
  - Carpetas o Resumenes de las catedras
  - Material relacionado a las catedras.

# ¡Importante!

  - El material compartido aqui no garantiza que se encuentren todos los temas dictados por las catedras.
  - El contenido de apuntes y material subido, puede ser o no autorizado por la catedras o sus docentes.


Tu tambien puedes:
  - Compartir material de catedras que hayas cursado.
  - Material de tu autoria o modificar material ya existente.
  - Corroborar que el material subido ya este en existencia! (para no encontrarnos con material repetido).
  - El material compartido aqui puede ser modificado por cualquier integrante del grupo de telegram. 

Al modificar material ya existente, se va a pedir que en el mensaje del commit al repositorio.

> Aclarando quien realizo la actualizacion.
> Fecha en el Formato dd/mm/aaaa "Dia/Mes/Año"
> La catedra a la que pertenece.
> Dejar los datos de quien lo habia realizado en caso de que estuviesen en el apunte, de lo contrario sin ellos.

#### Como clonar el repositorio
Para poder subir tu material y además obtener todo el material ya subido:

* Descargar en zip el repositorio - Obtendremos todos los apuntes, no podremos compartir nuevos apuntes o actualizar con el material que se vaya subiendo!
* Clonar el repositorio - Con este método podremos actualizar cada vez que se comparta algo nuevo, y poder subir nosotros material propio.

### Clonar Repo

Abriremos un navegador e iremos al repositorio de GitHub.

Una vez logueados buscaremos arriba a la derecha un botón verde que dice "Clone or Download".
Nos abrimos una terminal en linux o GitBash depende el S.O donde instalamos Git (abajo explicaremos su instalación)
```sh
$ cd ubicacion-donde-alojaremos-el-repo
$ git clone "url-del-repo"
```
Ej: Ubicacion
```
Usuario@Usuario-Pc:~/Documentos
```
Ej Url:
```
https://github.com/UsuarioGit/Apuntes_FCYT_Personales.git
```
Una vez que terminó el clonado nos encontraremos en la carpeta especificada, con una "subcarpeta" licenciatura-sistemas
```
Usuario@Usuario-Pc:~/Documentos/licenciatura-sistemas
```
#### Para subir Material de catedras.
Dentro la carpeta clonada veremos que esta subdividida en carpetas específicas y respetando el orden copiamos y pegamos el/los archivo/s en la carpeta correspondiente.
Una vez hecho eso procederemos ah realizar los siguiente:

```
$ git status    (nos muestra si hay archivos/carpetas nuevos o modificados)
$ git add nombre-archivo-o-carpeta     (sino con el . pasa todos los archivos/carpetas a stage)
$ git commit -m "detalle de lo que subimos"
$ git push origin master (para subir el contenido al repo en linea, en la rama master)
```
Cabe  aclarar que la rama origin master es la principal y por eso se hace push a esa rama.
Ej:
```
$ git status
$ git add .
$ git commit -m "apuntes-discreta-2020"
$ git push origin master
```
Recordemos que push origin master nos pedirá usuario y contraseña de nuestro usuario de git.
### Actualizar el repositorio por si alguien más realizó cambios
Para actualizar debemos usar el comando pull: incorpora cambios desde un repositorio remoto en la rama actual. En su modo predeterminado, git pull es la abreviatura de git fetch seguido de git merge FETCH_HEAD. Más precisamente, git pull ejecuta git fetch con los parámetros dados y llama a git merge para fusionar las cabezas de rama recuperadas en la rama actual.
```
$ git pull origin master
```
Va a solicitar usuario y contraseña de tu usuario de Github

### Instalar Git

##### Link oficial: https://www.git-scm.com/downloads
##### Linux: https://www.git-scm.com/download/linux
##### Windows: https://www.git-scm.com/download/win

Con esto ya podremos acceder al material que alumnos y algunos docentes comparten con alumnos.
No olviden compartir información y Apuntes, si compartimos fotos que sean legibles y no repetidas.

Canal del Grupo en Telegram: 
https://t.me/joinchat/CCmxvkUEY5BzIUN5PCvCcQ
