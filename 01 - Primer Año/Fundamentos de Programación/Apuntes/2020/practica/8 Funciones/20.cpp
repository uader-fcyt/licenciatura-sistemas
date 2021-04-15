#include <iostream>
#include <string>
using namespace std;

void requisitos(int peticion[], float avg_max, float avg_min, int  edad1[], int  edad2[], float ingreso1[], float ingreso2[], int n);

int main(int argc, char *argv[]) {
    string conyugue[100], conyugue2[100], nombre_barrio[100];
    int edad1[100], edad2[100], cant_hijos[100], n;
    float ingreso1[100], ingreso2[100], avg_max, avg_min;
    int peticion[100];

    cout << "Ingrese cantidad de inscriptos\n";   
    cin >> n;
    for(int i = 0; i < n; i++){
        cout << "Ingrese nombre y apellido de conyugue\n";   
        getline(cin, conyugue[i]); 
        cout << "Ingrese edad\n";
        cin >> edad1[i];
        cout << "Ingrese salario\n";
        cin >> ingreso1[i];
        cin.get();
        cout << "Ingrese nombre y apellido de conyugue restante\n";   
        getline(cin, conyugue2[i]);
        cout << "Ingrese edad\n";
        cin >> edad2[i];
        cout << "Ingrese salario\n";
        cin >> ingreso2[i];
        cout << "Ingrese cantidad de hijos\n";   
        cin >> cant_hijos[i];
        cout << "Ingrese nombre de barrio\n";   
        cin.get();
        getline(cin, nombre_barrio[i]);
    }
    cout << "Ingrese limite de promedio de edad maxima\n";   
    cin >> avg_max;
    cout << "Ingrese limite de promedio de salario minimo\n";
    cin >> avg_min;
    requisitos(peticion, avg_max, avg_min, edad1, edad2, ingreso1,ingreso2, n);
    for(int i = 0; i < n; i++){
        cout << nombre_barrio[i] << endl;
        cout << conyugue[i] << " y " << conyugue2 << " Estado: ";
        if(peticion[i] = 0)
            cout << "Rechazado" << endl;
        if(peticion[i] = 1)
            cout << "Aceptado" << endl;
        if(peticion[i] = 2)
            cout << "Reservado" << endl;
        if(cant_hijos[i] < 3)
            cout << "2 dormitorios\n";
        else
            cout << "3 dormitorios\n";
    }
	return 0;
}

void requisitos(int peticion[], float avg_max, float avg_min, int  edad1[], int  edad2[], float ingreso1[], float ingreso2[], int n){
     // aceptado(1) reservado(2) rechazado(0)
    float max = 0, min = 0;
    for(int i = 0; i < n; i++){
        max = (edad1[i] + edad2[i])/2;
        min = (ingreso1[i] + ingreso2[i])/2;
        if(max < avg_max or min > avg_min){
            peticion[i] = 2;
            if(max < avg_max and min > avg_min)
                peticion[i] = 1;
        } else
            peticion[i] = 0;
    }
}
