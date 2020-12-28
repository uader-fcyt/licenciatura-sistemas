#include <iostream>
using namespace std;

int main(){
    int cant_criaderos, lana[1000][5]; // 0 total, 1 Merino, 2 Texel, 3 Dorset, 4 id 
    for(int i = 0; i < 1000; i++){
        for(int j = 0; j < 5; j++){
            lana[i][j] = 0;
        }
    }
    cout << "Ingrese cantidad de criaderos a procesar\n";
    cin >> cant_criaderos; 
    cout << "Ingrese numero de criadero 1-" << cant_criaderos << ":\n";
    int nro;
    cin >> nro;
    while(nro != 999){
        cout << "Ingrese tipo de oveja 1: Merino, 2: Texel, 3: Dorset\n";
        int tipo;
        cin >> tipo;
        cout << "Ingrese cantidad de lana\n";
        int cantidad;
        cin >> cantidad;
        lana[nro][tipo] += cantidad;
        lana[nro][0] += cantidad;
        lana[nro][4] = nro;
        cout << "Ingrese numero de criadero 1-" << cant_criaderos << ":\n";
        cin >> nro;
    }
    for(int i = 1; i <= cant_criaderos-1; i++){
        for(int j = i+1; j <= cant_criaderos; j++){
            if(lana[i][0] < lana[j][0]){
                for(int k = 0; k < 5; k++){
                    int aux = lana[i][k];
                    lana[i][k] = lana[j][k];
                    lana[j][k] = aux;
                }
            }
        }
    }
    cout << "NRO\tCOSTO\n";
    for(int i = 1; i <= cant_criaderos; i++){
        cout << lana[i][4] << "\t" << lana[i][0] * 300 << endl;
    }

    bool todos = true;
    for(int i = 1; i <= cant_criaderos; i++){
        for(int j = 1; j <= 3; j++){
            if(lana[i][j] == 0)
                todos = false;
        }
    }

    if(todos)
        cout << "TODOS ENVIARON\n";
    else
        cout << "NO TODOS ENVIARON\n";

    return 0;
}
