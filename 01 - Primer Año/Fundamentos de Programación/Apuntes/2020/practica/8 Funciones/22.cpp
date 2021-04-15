#include <iostream>
#include <string>
using namespace std;

float calculo_velocidad(float d, float t);

int main(int argc, char *argv[]) {
    string patente, vec_patentes[100];
    string tipo_multa[100][3]; //col: 0->20l, 1-> 10l, 2->aprecibimiento
    float vec_tiempo[100];
    float vec_distancia[100];
    float vec_velocidad[100];
    float vec_multa[100];
    float precio_nafta;
    cout << "Ingrese precio de la nafta\n";
    cin >> precio_nafta;
    cout << "Ingrese patente de la forma \"ZZZ-000\"\n";
    cin >> patente;
    int  id = 0;
    while (patente != "ZZZ-000") {
        vec_patentes[id] = patente;
        cout << "Ingrese distancia recorrida en metros\n";
        cin >> vec_distancia[id];
        cout << "Ingrese tiempo en segundos\n";
        cin >> vec_tiempo[id];
        vec_velocidad[id] = calculo_velocidad(vec_distancia[id], vec_tiempo[id]);
        float multa = 0;
        if(vec_velocidad[id] > 100){
            multa = 20 * precio_nafta;
            tipo_multa[id][0] = patente;
        }else if(vec_velocidad[id] > 80 and vec_velocidad[id] <= 100){
            multa = 10 * precio_nafta;
            tipo_multa[id][1] = patente;
        }else if(vec_velocidad[id] > 60 and vec_velocidad[id] <= 80){
            tipo_multa[id][2] = patente;
            multa = -1;
        }
        vec_multa[id] = multa;
        id++;
        cout << "Ingrese patente de la forma \"ZZZ-000\"\n";
        cin >> patente;
    }
    for(int j = 0; j < 3; j++){
        if(j == 0)
            cout << "20 litros\n";
        else if(j == 1)
            cout << "10 litros\n";
        else
            cout << "Aprecibimiento\n";
        for(int i = 0; i < id; i++){
            if(tipo_multa[i][j] != "")
                cout << "\t" << tipo_multa[i][j] << endl;
            }
        }
	return 0;
}

float calculo_velocidad(float d, float t){
    return (d/1000)/(t/3600);
}

