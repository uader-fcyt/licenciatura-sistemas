//recordar que para realizar busqueda binaria, el arreglo debe estar ordenado
#include <iostream>
using namespace std;

int main(int argc, char *argv[]) {
	float nota[25][3];
    int dni[25], dni_alumno;
	
	for(int x = 0; x < 25; x++){
		cout << "Ingrese DNI: \n";
		cin >> dni[x];
		for(int i = 0; i < 3; i++){
			cout << "Ingrese nota: \n";
			cin >> nota[x][i];
		}
	}

	//ordenamiento
	for(int i = 0; i < 25-1; i++){
		for(int j = i+1; j < 25; j++){
            if(dni[i] > dni[j]){
                int aux = dni[i];
                dni[i] = dni[j];
                dni[j] = aux;
                for(int k = 0; k < 3; k++){
                    aux = nota[i][k];
                    nota[i][k] = nota[j][k];
                    nota[j][k] = aux;
                }
            }
		}
	}

	//busqueda
	cout << "Ingrese DNI a buscar: \n";
	cin >> dni_alumno;
	int inf = 0, sup = 25-1;
	int mid = (inf + sup) / 2;
	
	while((inf <= sup) and (dni_alumno != dni[mid])){
		if(dni_alumno < dni[mid])
			sup = mid -= 1;
		else
			inf = mid += 1;
		mid = (inf + mid) / 2;
	}

	if(inf > sup){
		cout << "Elemento no encontrado" << endl;
	}
	else{
		float avg = (nota[mid][0] + nota[mid][1] + nota[mid][2]) / 3;
        cout << "La nota promedio del alumno es:\t" << avg << endl;
	}
	return 0;
}
