#include <fstream>
#include <iostream>
#include <iomanip>
#include <string>
using namespace std;

void mas_bebido(int litros[][8], int is_alcohol[8], int &nombre_id);

void localidad_ebria(int &cod_loc, int &consumo, int localidad[][8], int j);

int main(){
    int litros[4][8]; //fila:grupo_etario col:tipo_bebida
    int localidad[51][8]; //fila:localidaes col:tipo_bebida
    //litros[0][j] se almacenan el total de bebidas por tipo

    for(int y = 0; y < 8; y++){
        for(int x = 0; x < 4; x++){ //inicializacion
            litros[x][y] = 0;
        }
        for(int x = 0; x < 51; x++){
            localidad[x][y] = 0;
        }
    }


    int loc, b, l, g;
    string grupo_etario;
    cout << "Ingrese codigo de localidad\n";
    cin >> loc;
    while (loc != 0) {
        cout << "Ingrese tipo de bebida [1-7]\n";
        cin >> b;
        cout << "Ingrese litros consumidos\n";
        cin >> l;
        cout << "Ingrese grupo etario [G1: Adolescentes, G2: Adultos, G3 Adultos +\n";
        cin >> grupo_etario;
        grupo_etario = grupo_etario[1];
        g = stoi(grupo_etario);
        litros[g][b] += l;
        localidad[loc][b] += l;
        litros[0][b] += l;
        cout << "Ingrese codigo de localidad\n";
        cin >> loc;
    }

    ifstream file;
    file.open("TIPOS_DE_BEBIDA.TXT");
    int index = 1;
    string id, nombre_bebida[8];
    int is_alcohol[8];
    file >> id >> is_alcohol[index] >> nombre_bebida[index];
    while (!file.eof()) {
        index++;
        file >> id >> is_alcohol[index] >> nombre_bebida[index];
    }
    file.close();

    file.open("CIUDADES.TXT");
    index = 1;
    string nombre_localidad[51];
    string aux;
    getline(file, aux);
    while (!file.eof()) {
        int large, space;
        space = aux.find(" ") + 1;
        large = aux.size();
        nombre_localidad[index] = aux.substr(space, large);
        index++;
        getline(file, aux);
    }
    file.close();

//punto 1
    int n;
    mas_bebido(litros, is_alcohol, n);
    cout << "Bebida alcoholica mas consumida: " << nombre_bebida[n] << endl;

//punto 2
   cout << "Grupo/Tipo de bebidas" << setw(9);
   for(int x = 1; x < 8; x++){
       cout << x << setw(5);
   }
   cout << endl;
   for(int i = 1; i <= 3; i++){
       cout << "G" << i << setw(24);
        for(int j = 1; j <=7; j++){
           cout << litros[i][j] << setw(5);
        }
       cout << endl;
   }

//punto 3
    ofstream out;
    out.open("localidad_ebria.txt");
    if(out.fail()){
        cout << "Error al abrir el archivo\n";
        exit(1);
    }else{		
		int cl, c; //cod_localidad, consumo
		for(int j = 1; j <= 7; j++){
			localidad_ebria(cl, c, localidad, j);
			out << j << " " << nombre_bebida[j] << " "<< cl << " " << nombre_localidad[j] << " " << c << endl; 
		}
		out.close();
	}

    return 0;
}

void mas_bebido(int litros[][8], int is_alcohol[8], int &nombre_id){
    int max = 0;
    for(int j = 1; j <= 7; j++){
        if(is_alcohol[j] == 1){
            if(litros[0][j] > max){
                max = litros[0][j];
                nombre_id = j;
            }
        }
    }
}


void localidad_ebria(int &cod_loc, int &consumo, int localidad[][8], int j){
    int max = 0;
    for(int i = 1; i <= 50; i++){
        if(localidad[i][j] > max){
            max = localidad[i][j];
            consumo = max;
            cod_loc = i;
        }
    }
}
