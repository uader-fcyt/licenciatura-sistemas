#include <iostream>
using namespace std;

int mayor_recursivo(int arr[], int indice, int tam);

int main(int argc, char *argv[]) {
	int ind=0;//el ind indica el primer elemento del vector
	int arreglo[8]={33,7,55,25,2,72,0,99};
	int tam=((sizeof(arreglo))/(sizeof(int))); //calculo el tamaño del vector y lo paso como parametro si lo calculas adentro de la funcion no anda
	int may=mayor_recursivo(arreglo,ind,tam);
	cout<<"el mayor es: "<<may;
	

	return 0;
}

int mayor_recursivo(int arr[], int indice, int tam){
	int mayor;
	int temp;
	if (indice==tam){
		return mayor==arr[indice];
	}
	else{
		mayor=mayor_recursivo(arr,indice+1,tam);
		if(arr[indice]>mayor){
			temp=arr[indice];
		}
		else{
			temp=mayor;
		}
	}
	return temp;
}

