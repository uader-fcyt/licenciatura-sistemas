#include <iostream>
#include <string>
using namespace std;
bool busqueda_lineal(string buscarEn[][3], int cantidadElementos, string elementoBuscado, int &pos);

int main(int argc, char *argv[]) {

    float stock[40][5], total_ventas = 0; //col 0(id) 1(inicial) 2(vendidos) 3(final) 4(precio)
    string cod_desc[40][3]; //col 0(id) 1(cod) 2(desc)

	for(int i = 0; i < 40; i++){ //inicializacion
		for(int j = 0; j < 5; j++){
			stock[i][j] = 0;
		}
	}
	
	for(int i = 0; i < 40; i++){
		cout << "Ingrese codigo de producto " << i <<  endl;
		getline(cin, cod_desc[i][1]);
		cout << "Ingrese descripcion de producto " << i <<  endl;
		getline(cin, cod_desc[i][2]);
		stock[i][0] = i;
		cout << "Ingrese stock de producto " << i <<  endl;
		cin >> stock[i][1];
		cout << "Ingrese precio de producto " << i <<  endl;
		cin >> stock[i][4];
	}
    int id, index = 0;	
	string codigo;
	cout << "Ingrese codigo" << endl;
	cin >> codigo;
	while(codigo != "X9Z01"){
		bool condicion = busqueda_lineal(cod_desc, 40, codigo, id);
		if(condicion){
			cout << "Ingrese cantidad vendida" << endl;
			cin >> stock[id][2];
			stock[id][3] = stock[id][1] - stock[id][2]; //stock final
			total_ventas += stock[id][2] * stock[id][4];
		}
        index++;
		cout << "Ingrese codigo" << endl;
	    cin >> codigo;
	}
	
	//punto 1
	cout << "CGO.PRODUCTO\tDESCRIPCION\tSTOCK INICIAL\tSTOCK FINAL\n";
    for(int i = 0; i < index; i++){
        cout << cod_desc[i][1] << "\t\t" << cod_desc[i][2] << "\t\t" << stock[i][1] << "\t\t" <<stock[i][3] << endl;
    }
	
	//punto 2
	cout << "Total recaudado:" << total_ventas << endl;

    //punto 3
	cout << "CGO.PRODUCTO\tSTOCK FINAL PONDERADO\n";
    for(int i = 0; i < index; i++){
        cout << cod_desc[i][1] << "\t\t" << stock[i][3] * stock[i][4] << endl;
    }

	return 0;
}

bool busqueda_lineal(string buscarEn[][3], int cantidadElementos, string elementoBuscado, int &pos){
    int index = 0;
    bool encontrado = false;
    while(index < cantidadElementos){
        if(buscarEn[index][1] == elementoBuscado){
            encontrado = true;
            pos = index;
            index = cantidadElementos;
        }else{
            index++;
        }
    }
    return encontrado;
}
