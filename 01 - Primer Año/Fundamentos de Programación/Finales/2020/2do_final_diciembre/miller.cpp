#include <iostream>
#include <string>
#include <fstream>
using namespace std;

bool buscar(int cod_provincia[], int cod_buscar, int &pos);
void ordenamiento_lineal(string vector[], int vacunados[][6], int cant_medicos[], int cod_provincia[], int cantidadElementos);

int main(){
    int cod_provincia[24];
    int cant_medicos[24];
    string nombre_prov[24];
    int vacunados[24][6]; //semanas -> col 1 a 5;

    for(int i = 0; i < 24; i++){
        for(int j = 0; j < 6; j++){
            vacunados[i][j] = 0;
        }
    }

    int index = 0;
    ifstream in;
    in.open("provincias.txt");
    if(in.fail()){
        cout << "Error al abrir el archivo\n";
    }else{
        in >> cod_provincia[index];
        while(!in.eof()){
            in.get();
            getline(in, nombre_prov[index]);
            in >> cant_medicos[index];
            index += 1;
            in >> cod_provincia[index];
        }
        in.close();
    }


    int id, matricula, dia, posicion;
    int muestra = 0;
    string especialidad;
	cout << "Ingrese codigo de provincia\n";
	cin >> id;
	while(id != 0){
		cout << "Ingrese numero de matricula\n";
		cin >> matricula;
		cout << "Ingrese especialidad medica\n";
		cin >> especialidad;
		cout << "Ingrese dia de vacunacion\n";
		cin >> dia;
		bool encontrado = buscar(cod_provincia, id, posicion);
		if(encontrado){
			if(especialidad == "intensivista"){
				ofstream out;
				out.open("tep_int_vac.txt", ios::app);
				if(out.fail()){
					cout << "Error al abrir el archivo\n";
				}else {
					out << id << endl;
					out << matricula << endl;
					out << dia << endl;             
					out.close();
				}
			}
			if(dia >= 1 and dia <= 3){
				dia = 1;
			}else if(dia >= 4 and dia <= 10){
				dia = 2;
			}else if(dia >= 11 and dia <= 17){
				dia = 3;
			}else if(dia >= 24 and dia <= 24){
				dia = 4;
			}else{
				dia = 5;
			}
		vacunados[posicion][dia] += 1;
		vacunados[posicion][0] += 1; //pos 0 es el total por prov
		}
		muestra += 1;
		cout << "Ingrese codigo de provincia\n";
		cin >> id;
	}
        ordenamiento_lineal(nombre_prov, vacunados, cant_medicos, cod_provincia, 24);
        cout << "PROV\t\t\t\tSEM1\tSEM2\tSEM3\tSEM4\tSEM5\n";
        for(int i = 0; i < 24; i++){
            cout << nombre_prov[i] << "\t\t\t\t";
            for(int j = 1; j <= 5; j++){
                cout << vacunados[i][j] << "\t";
            }
            cout << endl;
        }

        cout << "ID\tTOTAL\tNO VAC\n";
        for(int i = 0; i < 24; i++){
            cout << cod_provincia[i] << "\t" << cant_medicos[i] << "\t" << 100-(vacunados[i][0]*100/cant_medicos[i]) << "%" << endl; 
        }
    return 0;
}


bool buscar(int cod_provincia[], int cod_buscar, int &pos){
    bool encontrado = false;
    for(int i = 0; i < 24; i++){
        if(cod_provincia[i] == cod_buscar){
            encontrado = true;
            pos = i;
            i = 24;
        }

    }
    return encontrado;
}

void ordenamiento_lineal(string vector[], int vacunados[][6], int cant_medicos[], int cod_provincia[], int cantidadElementos){
    for(int i = 0; i < cantidadElementos-1; i++){
        for(int j = i+1; j < cantidadElementos; j++){
            if(vector[i] > vector[j]){
                string aux = vector[i];
                vector[i] = vector[j];
                vector[j] = aux;

                for(int k = 0; k < 6; k++){
                    int iaux = vacunados[i][k];
                    vacunados[i][k] = vacunados[j][k];
                    vacunados[j][k] = iaux;
                }

                int iaux = cant_medicos[i];
                cant_medicos[i] = cant_medicos[j];
                cant_medicos[j] = iaux;

                iaux = cod_provincia[i];
                cod_provincia[i] = cod_provincia[j];
                cod_provincia[j] = iaux;
            }
        }
    }
}
