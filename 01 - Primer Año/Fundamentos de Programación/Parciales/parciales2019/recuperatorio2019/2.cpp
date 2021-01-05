#include <iostream>
#include <string>
#include <iomanip>
using namespace std;
void mejor_chofer(float kilometros[][11],int &id_camion, int &id_chofer);

int main(){
    string chofer[21];
    float kilometros[21][11]; //chofer x camion // [chofer][0]: km acumulados
    int viajes[21][11];
    int nro_chofer[21];

    for(int i = 0; i < 21; i++){ //inicializacion
        for(int j = 0; j < 11; j++){
            kilometros[i][j] = 0;
            viajes[i][j] = 0;
        }
    }

    for(int i = 1; i <= 3; i++){
        cout << "Ingrese numero de chofer (1-20)\n";
        cin >> nro_chofer[i];
        cout << "Ingrese nombre de chofer\n";
        cin.get();
        getline(cin, chofer[i]);
    }
    int cod_chofer, cod_camion, km;
    cout << "Ingrese codigo de chofer (1-20)\n";
    cin >> cod_chofer;
    while (cod_chofer != 0) {
        cout << "Ingrese codigo de camion (1-10)\n";
        cin >> cod_camion;
        cout << "Ingrese kilometros recorridos\n";
        cin >> km;
        kilometros[cod_chofer][0] += km;
        viajes[cod_chofer][cod_camion] += 1;
        cout << "Ingrese codigo de chofer (1-20)\n";
        cin >> cod_chofer;
    }
    cout << "RESUMEN MENSUAL\n";
    cout << "NOMBRE DEL CHOFER \t\t KM RECORRIDOS \t\t SUELDO A PERCIBIR"<< endl;
    for(int i = 1; i <= 20; i++){
        cout << chofer[i] << setw(30) << kilometros[i][0] << setw(30) << kilometros[i][0] * 50 << endl;
    }
    cout << endl << endl;
    cout << "Choferes" << setw(10) << "Camiones" << endl;
    cout << setw(14);
    for(int j = 1; j <= 10; j++){
        cout << j << setw(7);
    }
    cout << endl;
    for(int i = 1 ; i <= 20; i++){
        cout << i << setw(7);
        for(int j  = 1; j <= 10; j++){
            cout << viajes[i][j] << setw(7);
        }
        cout << endl;
    }
    int id_ch, id_ca; //id_chofer, id_camion
    mejor_chofer(kilometros, id_ca, id_ch);
    cout << "Chofer que realizó mas km: " << chofer[id_ch] << endl;
    cout << "... con el camion: " << id_ca;
    return 0;
}

void mejor_chofer(float kilometros[][11], int &id_camion, int &id_chofer){
    int mayor_camion = 0; int mayor_chofer = 0;
    for(int i = 1; i <= kilometros[i][0]; i++){
        if(kilometros[i][0] > mayor_chofer){
            mayor_chofer = kilometros[i][0];
            id_chofer = i;
            for(int j = 1; j <= 10; j++){
                if(kilometros[i][j] > mayor_camion){
                    mayor_camion = kilometros[i][j];
                    id_camion = j;
                }
            }
        }
    }
}
