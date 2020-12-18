#include <fstream>
#include <iostream>
#include <string>
using namespace std;

int calc_punt(int l[][6], int i);
bool busqueda(string datos[][3], int dni, int &pos, int cant_datos);
void ordenamiento_matriz(int  matriz[][6], int cantidadFilas);

int main(){
    int listado[1000][6]; // fila: id; col: 0 dni, 1 AF, 2 CA; 3 CO, 4 CI, 5 PUNTAJE FINAL;
    string datos[1000][3]; // fila: id; col: 0 dni, 1 nombreyapellido, 2 telefono;
    int valor_maximo = 0;
    int valor_minimo = 99999;
    int total_puntaje_final = 0;
    int avg_pf = 0;

    for(int i = 0; i < 1000; i++){
        for(int j = 0; j < 6; j++){
            listado[i][j] = 0;
        }
    }
	
    int index = 0;
    ifstream in;
    in.open("aspirantes.txt");
    if(in.fail()){
        cout << "Error al abrir el archivo\n";
    }else{
		in >> datos[index][0];
		while(!in.eof()){
			in >> datos[index][1];
			in >> datos[index][2];
			index++;
			in >> datos[index][0];
		}
		in.close();
	}
   
    int dni, muestra = 0, cod_prueba, puntaje;
    cout << "Ingrese DNI\n";
    cin >> dni;
    while(dni != 0){
        listado[muestra][0] = dni;
        cout << "Ingrese codigo de prueba (1-4)\n";
        cin >> cod_prueba; 
        cout << "Ingrese puntaje\n";
        cin >> puntaje; 
        listado[muestra][cod_prueba] = puntaje;
        muestra++;
        cout << "Ingrese DNI\n";
        cin >> dni;
    }
    for(int i = 0; i < muestra; i++){
        listado[i][5] = calc_punt(listado, i);
    }
    ordenamiento_matriz(listado, muestra);
    for(int i = 0; i < muestra; i++){
        total_puntaje_final += listado[i][5];
        if(listado[i][5] > valor_maximo)
            valor_maximo = listado[i][5];
        if(listado[i][5] < valor_minimo)
            valor_minimo = listado[i][5];
    }
    avg_pf = total_puntaje_final / muestra;

    cout << "DNI\t\tAF\tCA\tCO\tCI\tPF\n";
    for(int i = 0; i < muestra; i++){
        for(int j = 0; j < 6; j++){
            cout << listado[i][j] << "\t";
        }
        cout << endl;
    }
    cout << "AVG\tMAX\tMIN\n";
    cout << avg_pf << "\t" << valor_maximo << "\t" << valor_minimo << endl;

    ofstream out;
    out.open("postulantes.txt");
    if(out.fail()){
        cout << "Error al abrir el archivo\n";
    }else{
        for(int i = 0; i < muestra; i++){
            int posicion;
            if(busqueda(datos, listado[i][0], posicion, index)){
                if(listado[i][5] >= avg_pf){
                    out << listado[i][0] << endl;
                    out << datos[posicion][1];
                    out << endl;
                    out << datos[posicion][2] << endl;
                    out << listado[i][5] << endl;
                }
            }
        }
    }
    return 0;
}

int calc_punt(int l[][6], int i){
    return l[i][1]*2 + l[i][2]*3 + l[i][3]*4 + l[i][4]*5;
}

void ordenamiento_matriz(int  matriz[][6], int cantidadFilas){
    for(int i = 0; i < cantidadFilas-1; i++){ //i es el indice del elemento anterior
        for(int j = i+1; j < cantidadFilas; j++){ //j es el indice del elemento siguiente
            if(matriz[i][5] < matriz[j][5]){ //orden ASCENDENTE; para orden descendente usar "<"
                for(int k = 0; k < 6; k++){ //k es el indice de las columnas
                    int aux = matriz[i][k];
                    matriz[i][k] = matriz[j][k];
                    matriz[j][k] = aux;
                }
            }
        }
    }
}

bool busqueda(string datos[][3], int dni, int &pos, int cant_datos){
    bool encontrado = false;
    for(int i = 0; i < cant_datos; i++){
        string str_dni = to_string(dni);
        if(str_dni == datos[i][0]){
            encontrado = true;
            pos = i;
            i = cant_datos;
        }
    }
    return encontrado;
}
