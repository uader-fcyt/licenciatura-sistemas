#include <fstream>
#include <iostream>
using namespace std;

int calc_punt(int cp, int p);

int main(){
    int listado[1000][6]; // fila: id; col: 0 dni, 1 AF, 2 CA; 3 CO, 4 CI, 5 total;
    int puntaje_final[1000][2]; //fila id; col: 0 dni 1 puntaje_final
    string datos[1000][3]; // fila: id; col: 0 dni, 1 nombreyapellido, 2 telefono;
    int valor_maximo = 0;
    int valor_minimo = 99999;
    int total_puntaje_final = 0;

    for(int i = 0; i < 1000; i++){
        for(int j = 0; j < 6; j++){
            listado[i][j] = 0;
        }
    }
    ifstream in;
    in.open("aspirantes.txt");
    if(in.fail()){
        cout << "Error al abrir el archivo\n";
    }else{		
		int index = 0;
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
        muestra++;
        listado[muestra][cod_prueba] = calc_punt(cod_prueba, puntaje);
        cout << "Ingrese DNI\n";
        cin >> dni;
    }
    int x = 0;
    while( != listado[x][dni])
    for(int i = 0; i < muestra-1; i++){
        for(int j = i+1; j < muestra; j++){
             
        }
    }
// hasta acá venía bien, o casi bien.
    return 0;
}

int calc_punt(int cp, int p){}  //debía calcular el pubntaje final
    int puntos = 0;
    if(cp == 1){
        puntos = p * 2;
    }else if (cp == 2) {
        puntos = p * 3;
    }else if(cp == 3){
        puntos = p * 4;
    }else{
        puntos = p * 5;
    }
    return puntos;
}
