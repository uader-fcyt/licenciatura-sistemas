#include <fstream>
#include <ios>
#include <iostream>
#include <string>
using namespace std;

int main(){
    ofstream file;
    int n, cod_competidor, cod_deporte, tiempo;
	string deporte;
    cout << "Ingrese cantidad de competidores\n";
    cin >> n;
    for(int i = 0; i < n; i++){
        cout << "Ingrese codigo de competidor\n";
        cin >> cod_competidor;
        for(int j = 0; j < 3; j++){
            cout << "Ingrese codigo de deporte (1 natacion)(2 carrera)(3 bicicleta)\n";
            cin >> cod_deporte;
            cout << "Ingrese tiempo en minutos)\n";
            cin >> tiempo;
            if(cod_deporte == 1){
                deporte = "natacion.txt";
            }else if (cod_deporte == 2) {
                deporte = "carrera.txt";
            }else if (cod_deporte == 3) {
                deporte = "bicicleta.txt";
            }
			
			file.open(deporte, ios::app);
            if(file.fail()){
                cout << "Error al abrir el archivo\n";
            }else {
                file << cod_competidor << " " << tiempo << endl;
            }
            file.close();
        }
    }
    return 0;
}
