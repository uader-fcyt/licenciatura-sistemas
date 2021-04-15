#include <iostream>
using namespace std;
/* 
Pueden hacer el análisis aquí para el parcial
*/

int main() 
{
	float vecPrecios[151]; //vector de precios unitarios
	float Suc2[151][2]; //matriz para guardar datos de la sucursal 2
	int vecCod88[6];
	int codSuc, codP, i, cantVtas, Cod88, j, cantProd, pos, l, n, band, a, b, c;
	float precioBus;
	
	
	//Leo los codigos de productos y sus precios unitarios
	cout<<"Se comienza con la carga de los precios unitarios de los productos"<<endl;
	for (i=1; i<=4; i++)//Sería hasta 150, pongo menos para probar
	{
		cout<<"Ingrese el código del producto: "<<endl;
		cin>>codP;
		cout<< "Ingrese el precio unitario del producto: "<<endl;
		cin>>vecPrecios[i];
	}
	
	Cod88=0;
	band=0;
	//Pongo en cero la matriz Suc2
	for(a=1;a<=4;a++)
	{
		for (b=0; b<2;b++)
			Suc2[a][b]=0;
	}
	for (c=1;c<6;c++)    //1  2   3   4   5
		vecCod88[c]=0;  // 0  0   0   0   0
	
	
	cout<<"-------------------------------------------------------"<<endl;
	cout<<"Comienza la carga de las ventas por sucursal"<<endl;
	cout<<"-------------------------------------------------------"<<endl;
	//Comienzo con la carga de las ventas realizadas
	cout<< "Ingrese el código de sucursal: "<<endl;
	cin>>codSuc;
	while (codSuc<=5)
	{
		cout<<"Ingrese la cantidad de ventas realizadas: "<<endl;
		cin>>cantVtas;
		for (j=1; j<=cantVtas; j++)
		{   cout<<"-------------------------------------------------------"<<endl;
			cout<< "Ingrese el código del producto: "<<endl;
			cin>>codP;
			cout<< "Ingrese la cantidad de ventas realizadas: "<<endl;
			cin>>cantProd;
			if (codSuc==2)
			{
				Suc2[codP][0]=Suc2[codP][0]+cantProd;
				Suc2[codP][1]=Suc2[codP][1]+(cantProd*vecPrecios[codP]);
			}
			//Informe punto 1
			if (codP==3) //Sería == 88, pero le pongo 3 porque no cargo 150 productos sino que cargo 4
			{
				vecCod88[codSuc]=1;
			}
		}
		
		cout<<"-------------------------------------------------------"<<endl;
		cout<<"Ingrese el código de sucursal: "<<endl;
		cin>>codSuc;
	}
	cout<<"-------------------------------------------------------"<<endl;
	cout<<"Fin de la carga de las ventas de las sucursales"<<endl;
	cout<<"*******************************************************"<<endl;
	
	//cuento en el vector cuantas sucursales vendieron el codigo producto 88
	for (c=1;c<6;c++)
	{
		if (vecCod88[c]==1)
			Cod88++;
	}
	
	cout<<"Ingrese un precio unitario a buscar: "<<endl;
	cin>>precioBus;
	n=1;
	while (n<=4)//Sería hasta 150, pongo menos para probar
	{
		if (vecPrecios[n] == precioBus)
		{
			band=1;
			pos=n;
			n=4;//Sería hasta 150, pongo menos para probar
		}
		n++;
	}
	cout<<"*******************************************************"<<endl;
	cout<<"INFORMES"<<endl;
	cout<<"*******************************************************"<<endl;
	cout<<"PUNTO 1"<<endl;
	cout<<"-------------------------------------------------------"<<endl;
	//INFORMO PUNTO 1
	cout<<"El código de producto N° 88 se vendió en "<<Cod88<<" sucursales"<<endl;	
	
		
	//INFORMO PUNTO 2
	cout<<"-------------------------------------------------------"<<endl;
	cout<<"PUNTO 2"<<endl;
	cout<<"-------------------------------------------------------"<<endl;
	cout<<"Cod. prod.    Cantidad   Monto Total "<<endl;
	for (l=1; l<=4; l++)//Sería hasta 150, pongo menos para probar	
			cout<<l<< "               " <<Suc2[l][0]<< "             " <<"$"<<Suc2[l][1]<<endl;
	
    //INFORMO PUNTO 3
	cout<<"-------------------------------------------------------"<<endl;
	cout<<"PUNTO 3"<<endl;
	cout<<"-------------------------------------------------------"<<endl;		
	if (band == 0)
		cout<<"Precio no hallado";
	else cout<<"El precio ingresado corresponde al código de producto "<<pos<<endl;
	
	return 0;
}

