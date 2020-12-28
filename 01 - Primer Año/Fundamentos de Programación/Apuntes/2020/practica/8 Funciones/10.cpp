#include <iostream>
using namespace std;
void validar_edad(int edad, int &id);

int main(int argc, char *argv[]) {
	int vec_edad[100][3]; //1(id) 2(edad) 3(dni)
	int id = 0, dni, edad;
	cout << "Ingrese DNI\n";
	cin >>  dni;
	cout << "Ingrese edad\n";
	cin >> edad;
	while(edad != 200){
		validar_edad(edad, id);
		vec_edad[id][1] = id;
		vec_edad[id][2] = edad;
		vec_edad[id][3] = dni;
		id++;
		cout << "Ingrese DNI\n";
		cin >>  dni;
		cout << "Ingrese edad\n";
		cin >> edad;
	}
	
	int max = 0;
	for(int i = 0; i < id; i++){
		if(max < vec_edad[i][2])
			max = vec_edad[i][3];
	}
	cout << "Mayor: " << max;
	return 0;
}

void validar_edad(int edad, int &id){
	if(edad < 12 or edad > 90){
		cout << "Edad erronea. Por favor ingrese nuevamente...\n";
		id--;
	}
}
