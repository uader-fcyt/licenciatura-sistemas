#include <iostream>
#include <string>
using namespace std;
 int mayor_salario(float vec[], int id);
 int menor_salario(float vec[], int id);
 
int main(int argc, char *argv[]) {
	int legajo[50];
	float sueldo[50];
	char sexo[50];
	string nombre[50];
	
	int id = 0, leg;
	cout << "Ingrese legajo\n";
	cin >> leg;
	while(leg != 999){
		legajo[id] = leg;
		cout << "Ingrese sueldo\n";
		cin >> sueldo[id];
		cout << "Ingrese sexo\n";
		cin >> sexo[id];
		cout << "Ingrese nombre\n";
		cin.get();
		getline(cin, nombre[id]);
		
		id++;
		cout << "Ingrese legajo\n";
		cin >> leg;
	}
	cout << "Mayor salario:\n"; 
	cout << legajo[mayor_salario(sueldo, id)] << endl;
	cout << sueldo[mayor_salario(sueldo, id)] << endl;
	cout << sexo[mayor_salario(sueldo, id)] << endl;
	cout << nombre[mayor_salario(sueldo, id)] << endl << endl;
	cout << "Menor salario:\n"; 
	cout << legajo[menor_salario(sueldo, id)] << endl;
	cout << sueldo[menor_salario(sueldo, id)] << endl;
	cout << sexo[menor_salario(sueldo, id)] << endl;
	cout << nombre[menor_salario(sueldo, id)] << endl << endl;
	return 0;
}

 int mayor_salario(float vec[], int id){
	int mayor = 0, x;
	for(int i = 0; i < id; i++){
		if(vec[i] > mayor){
			mayor = vec[i];
			x = i;
		}
	}
	return x;
 }
	
 int menor_salario(float vec[], int id){
	int menor = 9999999, y;
	for(int i = 0; i < id; i++){
		if(vec[i] < menor){
			menor = vec[i];
			y = i;
		}
	}
	return y;
 }
