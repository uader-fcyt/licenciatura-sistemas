//17 minutos
#include <iostream>
using namespace std;

int main(int argc, char *argv[]) {
	int nota[25][3], dni[25], avg, alumno;
	bool encontrado = false;
	
	for(int x = 0; x < 25; x++){
		cout << "Ingrese DNI: \n";
		cin >> dni[x];
			
		for(int i = 0; i < 3; i++){
			cout << "Ingrese nota: \n";
			cin >> nota[x][i];
		}
	}
	
	cout << "Ingrese DNI a buscar: \n";
	cin >> alumno;
	for(int x = 0; x < 25; x++){
		if(alumno == dni[x]){
			encontrado = true;
			avg = (nota[x][0] + nota[x][1] + nota[x][2]) / 3;
		}
	}
	
	if(encontrado){
		cout << "El promedio es: " << avg << endl;
	}else{
		cout << "Elemento no encontrado" << endl;
	}
	
	return 0;
}
