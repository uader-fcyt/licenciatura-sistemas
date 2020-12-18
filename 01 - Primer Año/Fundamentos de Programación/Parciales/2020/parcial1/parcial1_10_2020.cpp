#include <iostream>
#include <string>
#include <iomanip>
using namespace std;
int main(int argc, char *argv[]) {
	string dpto_str[18][2]; // col 0(cod) 1(nombre)
	int dpto[18][5]; // col 0(cod) 1(internado) 2(aislado) 3(domicilio) 4(total)
	int	total = 0, menor13 = 0, mayor80 = 0, menor75 = 0;
		
	for(int i = 1; i < 18; i++){
		cout << "Ingrese codigo de departamento\n";
		cin.get();
		getline(cin, dpto_str[i][0]);
		cout << "Ingrese nombre de departamento\n";
		getline(cin, dpto_str[i][1]);
	}
	//inicializacion
	for(int i = 0; i < 18; i++){
		for(int j = 0; j < 5; j++){
			dpto[i][j] = 0;
		}
	}
	
	int dni, condicion, edad, cod_dpto;
	char sexo;
	cout << "Ingrese DNI:\n";
	cin >> dni;
	while(dni != 0){
		cout << "Ingrese edad:\n";
		cin >> edad;
		cout << "Ingrese sexo: (F/M)\n"; //F = 1; M = 2;
		cin >> sexo;
		cout << "Ingrese condicion: (1/2/3)\n"; // 1(internado) 2(aislado) 3(domicilio)
		cin >> condicion;
		cout << "Ingrese codigo de departamento: (1-17)\n";
		cin >> cod_dpto;
		dpto[cod_dpto][0] = cod_dpto;
		dpto[cod_dpto][4] += 1;
		switch(condicion){
			case 1:
				dpto[cod_dpto][1] += 1; 
				break;
			case 2:
				dpto[cod_dpto][2] += 1; 
				break;
			case 3:
				dpto[cod_dpto][3] += 1; 
				break;
		}
		if(edad < 13)
			menor13 += 1;
		if(sexo == 'F'){
			dpto[cod_dpto][2] = 1;
			if(edad > 80)
				mayor80 += 1;
		}
		if(sexo == 'M'){
			dpto[cod_dpto][2] = 2;
			if(edad < 75)
				menor75 += 1;
		}
		total += 1;
		cout << "Ingrese DNI:\n";
		cin >> dni;
	}
	//punto 1
	cout << "REPORTE DIARIO COVID-19 - ENTRE RIOS\n";
	cout << "DEPARTAMENTO" << setw(15) << "INTERNADO" << setw(5) <<  "AISLADO" << setw(5) << "DOMICILIO"<< endl;
	for(int i = 1; i < 18; i++){
		cout << dpto_str[i][1] << setw(15) << dpto[i][1] << setw(5) << dpto[i][2] << setw(5) << dpto[i][3] << endl;
	}
	//punto 2
	for(int i = 1; i < 17; i++){
		for(int j = i + 1; j < 18; j++){
			if(dpto[i][4] < dpto[j][4]){
				for(int k = 0; k < 5; k++){
					int aux = dpto[i][k];
					dpto[i][k] = dpto[j][k];
					dpto[j][k] = aux;
				}
			}
		}
	}
	cout << "DEPARTAMENTO" << setw(15) << "TOTAL "<< endl;
	for(int i = 1; i < 18; i++){
	cout << dpto_str[i][0] << setw(15) << dpto[i][4] << endl;
	}
	//punto 3
	cout << "Menores de 13: " << float(menor13 / total * 100) << "%" << endl;
	//punto 4
	cout << "Mujeres mayores a 80 años:" << mayor80 << endl;
	cout << "Hombres menores a 75 años:" << menor75 << endl;
	return 0;
}
