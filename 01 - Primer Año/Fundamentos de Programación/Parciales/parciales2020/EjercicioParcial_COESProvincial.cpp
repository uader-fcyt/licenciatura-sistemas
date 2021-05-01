#include <iostream>
using namespace std;

int main(int argc, char *argv[]) {
	string vecDpto[18];// nombre de los 17 departamentos guardados desde pos 1 a pos 17
	string auxnom[18];// vector auxiliar de nombre de los 17 departamentos para ordenar e informar el punto 2
	string aux1;// vector auxiliar de nombre para ordenamiento
	int codDpto;//código de departamento
	int edad;//edad de la persona
	int condicion;//condicion de aislamiento
	long dni; // dni de la persona
	char sexo;//sexo de la persona
	int men13;//contador menores de 13 años
	int muj80;//contador mujeres mayores de 80 años
	int hom75;//contador hombres menores a 75 años
	int totPosi;//total de personas positivas
	int mP1[18][4]; //Matriz de totales por dpto y segun tipo de aislamiento 
	int vecP2[18]; //matriz para el Resultado 2). Total de pos. x Dpto
	int aux2;//variable auxiliar para ordenamiento
	int n, d;//variables auxiliares
	float porc13;//porcentaje de menores de 13 sobre total de positivos
	
	//inicializo variables simples en cero
	men13=0;
	muj80=0;
	hom75=0; 
	totPosi=0;
	//variable auxiliar usada de limite en los ciclos iterativos para cargar departamentos, son 17 para probar se puede poner menos
	d=3;
	
	cout<<"Comienza la carga de codigo y nombr de deparamentos de la provincia"<<endl;
	for (int i=1; i<=d; i++)
	{
		cout<<"Ingrese el código de departamento"<<endl;
		cin>>codDpto;
		cout<<"Ingrese el nombre de departamento"<<endl;
		cin.get();
		getline(cin, vecDpto[codDpto]);//leo el nombre en la posición codigo
		
		auxnom[codDpto]=vecDpto[codDpto];//guardo el nombre en el vector auxiliar para ordenamiento
		
	}
	
	//Pongo en cero mi matriz acumuladora de totales por dpto y segun tipo de aislamiento  y mi vector acumulador de Total de pos. x Dpto
	for (int j=1; j<=d; j++)
	{
		mP1[j][1]=0;
		mP1[j][2]=0;
		mP1[j][3]=0;
		vecP2[j]=0;
	}
		
	cout<<"Comienza la carga de habitantes COVID positivos de la provincia"<<endl;
	
	//leo la variable de control del while
	cout<<"Ingrese el DNI del habitante"<<endl;
	cin>>dni;
	
	while (dni!=0)
	{   //lectura de datos que dice el enunciado
		cout<<"Ingrese el código de departamento"<<endl;
		cin>>codDpto;
		cout<<"Ingrese la edad"<<endl;
		cin>>edad;
		cout<<"Ingrese el sexo (f o m)"<<endl;
		cin>>sexo;
		cout<<"Ingrese la condición de aislamiento (1, 2 o 3)"<<endl;
		cin>>condicion;
		//acumulo en mi matriz usando de índice fila el codigo de dpto y de indice columna la condición
		mP1[codDpto][condicion]=mP1[codDpto][condicion]+1;
		//Me quedaría así
		//                  internado              aisladodom          asiladohospi
		// depto              
		//   1                   x                       x                 x
		//   2                   x                       x                 x
		//   3                   x                       x                 x
		//   .                  .                       .                  .
		//   .                  .                       .                  .
		//   .                  .                       .                  .
		//  17                  x                       x                  x
		
		
		
		totPosi++;
		
		//pregunto por la edad < 13 para el punto 3 del informe
		if (edad<13)
			men13++;
		
		//pregunta para el punto 4 del informe
		if ((edad>80) && (sexo=='f'))
			muj80++;
		//pregunta para el punto 4 del informe
		if ((edad<75) && (sexo=='m'))
			hom75++;
		
		//Vuelvo a leer la variable de control del while
		cout<<"Ingrese el DNI del habitante"<<endl;
		cin>>dni;
			
	}//fin del while
	
	//calculo el porcentaje de menores de 13 sobre el total de positivos
	porc13=(men13*100)/totPosi;
	
	//calculo y guardo en el vector vecP2 el totel de casos
	//Para ello recorro la matriz donde tengo los totales por condicion y dpto.
	for(int k=1; k<=d; k++)
	{		
		vecP2[k]=mP1[k][1] + mP1[k][2] + mP1[k][3];
	}
	
	n=d;
	
	//Ordeno de manera descendente para informar el punto 2
	for (int i=1; i<(n); i++)
	{
		for (int j=i+1; j<n+1; j++)
	{
			if (vecP2[i] < vecP2[j])//el signo es menor porque ordeno de mayor a menor
			{
			//debo ordenar mi vector vecP2 donde tengo los totales de casos por dpto 
				aux2= vecP2[i];
				vecP2[i]= vecP2[j];
				vecP2[j]= aux2;
			// y el vector auxiliar de nombres TAMBIEN debo ordenarlo para no perder la relación de los datos
				aux1=auxnom[i];
				auxnom[i]=auxnom[j];
				auxnom[j]=aux1;
			}
	}
	}
	
	//COMIENZAN LOS INFORMES
	cout<<"COMIENZAN LOS INFORMES"<<endl;
	cout<<"---------------------------------------------------------------------"<<endl;
	cout<<"PUNTO 1"<<endl;
	cout<<"REPORTE DIARIO  COVID-19 - ENTRE RÍOS"<<endl;
	cout<<"DPTO	 INTERNADO  AISLADO   DOMICILIO"<<endl;
	for (int i=1; i<=d; i++)
	{
	//nombre dpto --> vecDpto      col 1 Internado       col 2 aisladodom        col 3  asiladohospi
		cout<<vecDpto[i]<<"        "<<mP1[i][1]<<"        "<<mP1[i][2]<<"        "<<mP1[i][3]<<endl;
	}
	
	cout<<"---------------------------------------------------------------------"<<endl;
	cout<<"PUNTO 2: INFORME DESCENDENTE"<<endl;
	cout<<"DPTO 	       TOTAL"<<endl;
	for (int m=1;m<=d;m++)
		//en el vector auxnum tengo los nombres ordenados de mayor a menor por cantidad de casos
		//y en vecP2 los totales  ordenados de mayor a menor
		cout<<auxnom[m]<<"           "<<vecP2[m]<<endl;
	
	cout<<"---------------------------------------------------------------------"<<endl;
	cout<<"PUNTO 3"<<endl;
	cout<<"El porcentaje de menores de 13 años sobre total de positivos es: "<<porc13<<endl;
	
	cout<<"---------------------------------------------------------------------"<<endl;
	cout<<"PUNTO 4"<<endl;
	cout<<"Cantidad de mujeres mayores de 80 años: "<<muj80<<endl;
	cout<<"Cantidad de hombres menores a 75: "<<hom75<<endl;
		
	return 0;
}

