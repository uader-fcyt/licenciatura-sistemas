//tiempo = 62.46 minutos
#include <fstream>
#include <iostream>
#include <string>
using namespace std;
void busqueda_lineal(string buscarEn[], int cantidadElementos, string elementoBuscado, int &id);
void ordenamiento_lineal(string pieza[], string desc[], int prest[], int cantidadElementos);

int main(){
    string pieza[100];
    string desc[100];
    int prest[100];
    int total_pacientes = 0;
    int total_obrasocial = 0;
    int index = 0;

    for(int i = 0; i < 100; i++){
        prest[i] = 0;
    }

    ifstream file;
    file.open("mapa_dental.txt");
    if(file.fail()){
        cout << "Error al abrir el archivo";
        exit(1);
    }
    file >> pieza[index];
    getline(file, desc[index]);
    while (!file.eof()) {
       index++; 
        file >> pieza[index];
        getline(file, desc[index]);
    }
    file.close();
    
    int x = 1;
    int matricula[10000], dni[10000];
    string nombre[10000], apellido[10000];
    cout << "Ingrese matricula\n";
    cin >> matricula[x];
    while (matricula[x] != 0) {
        x++;
        cout << "Ingrese apellido\n";
        cin >> apellido[x];
        cout << "Ingrese nombre\n";
        cin >> nombre[x];
        cout << "Ingrese DNI\n";
        cin >> dni[x];
        cout << "Ingrese matricula\n";
        cin >> matricula[x];
    }
    
    int id;
    string prestaciones[10000][5]; //matricula, cod_pieza, dni, edad, obra social
    for(int i = 1; i < x; i++){
        int cant_prestaciones;
        int aux_matricula;
        cout << "Ingrese matricula\n";
        cin >> aux_matricula;
        cout << "Ingrese cantidad de prestaciones\n";
        cin >> cant_prestaciones;
        total_pacientes += cant_prestaciones;
        for(int j = 0; j < cant_prestaciones; j++){
            prestaciones[j][0] = aux_matricula;
            cout << "Ingrese codigo de pieza dentaria\n";
            cin >> prestaciones[j][1];
            busqueda_lineal(pieza, 100, prestaciones[j][1], id);
            prest[id] += 1;
            cout << "Ingrese DNI de paciente\n";
            cin >> prestaciones[j][2];
            cout << "Ingrese edad de paciente\n";
            cin >> prestaciones[j][3];
            cout << "Ingrese obra social de paciente (S-N)\n";
            cin >> prestaciones[j][4];
            if(prestaciones[j][4] == "S")
                total_obrasocial += 1;
        }

        //tiempo 28:36
    }
    ordenamiento_lineal(pieza, desc, prest, 100 );
    cout << "CODIGO DE PIEZA\tDESCRIPCIO\tCANTIDAD DE PRESTACIONES \n";
    for(int i = 0; i < 100; i++){
        cout << pieza[i] << "\t\t" << desc[i] << "\t" << prest[i] << endl;
    }
    cout << endl << "CANTIDAD PACIENTES: " << total_pacientes << endl;
    cout << endl << "CANTIDAD CON OBRA SOCIAL: " << total_obrasocial << endl;
    ofstream out;
    out.open("odontologos.txt");
    if(file.fail()){
        cout << "Error al abrir el archivo";
        exit(1);
    }
    for(int i = 0; i < x; i++){
            out << matricula[i] << endl;
            out << apellido[i] << endl;
            out << nombre[i] << endl;
            out << dni[i] << endl;
            out << prestaciones[i][0] << endl;
    }
    out.close();
    return 0;
}

void busqueda_lineal(string buscarEn[], int cantidadElementos, string elementoBuscado, int &id){
    int index = 0;
    while(index < cantidadElementos){
        if(buscarEn[index] == elementoBuscado){
            id = index;
            index = cantidadElementos;
        }
        index++;
    }
}
void ordenamiento_lineal(string pieza[], string desc[], int prest[], int cantidadElementos){
    for(int i = 0; i < cantidadElementos-1; i++){ //i es el indice del elemento anterior
        for(int j = i+1; j < cantidadElementos; j++){ //j es el indice del elemento siguiente
            if(pieza[i] > pieza[j]){ //orden ASCENDENTE; para orden descendente usar "<"
                string aux = pieza[i];
                pieza[i] = pieza[j];
                pieza[j] = aux;

                aux = desc[i];
                desc[i] = desc[j];
                desc[j] =aux;
                
                int iaux = prest[i];
                prest[i] = prest[j];
                prest[j] = iaux;
            }
        }
    }
}
