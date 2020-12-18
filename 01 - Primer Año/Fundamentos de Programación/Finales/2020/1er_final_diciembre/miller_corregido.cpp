//MILLER, MARCOS
#include <iostream>
#include <fstream>
#include <string>
#include <iomanip>
using namespace std;
bool comprobar_repartidor(int repartidor[][3],string str_repartidos[][2], int index_r, string nombre, string ciudad, int &pos);

int main(){

    int delivery_pedidos[5]; //son de 1 a 4
    int delivery_asignados[5];

    for(int x = 0; x < 5; x++){
        delivery_pedidos[x] = 0;
        delivery_asignados[x] = 0;
    }
    //archivo unidades
    int index_u = 0;
    string delivery[1000][5]; //0tipo, 1cod, 2nombre, 3 direc, 4ciudad

    //archivo repartidores
    int index_r = 0;
    int repartidor[1000][3]; // 0dni, 1estado(D=1;ND=2), 2puntos
    string str_repartidos[1000][2]; //0nombre_apellido, 1ciudad

    for(int i = 0; i < 1000; i++){
        for(int j = 0; j < 3; j++){
            repartidor[i][j] = 0;
        }
    }

    ifstream u;
    u.open("unidades.txt");
    if(u.fail()){
        cout << "Error al abrir el archivo";
    }else{
        u >> delivery[index_u][0];
        while(!u.eof()){
            u >> delivery[index_u][1];
            getline(u, delivery[index_u][2]);
            getline(u, delivery[index_u][3]);
            getline(u, delivery[index_u][4]);
            index_u++;
            u >> delivery[index_u][0];
        }
        u.close();
    }

    ifstream r;
    r.open("repartidores.txt");
    if(r.fail()){
        cout << "Error al abrir el archivo";
    }else{
        r >> repartidor[index_r][0]; // 0dni
        while(!u.eof()){
            r.get();
            getline(r, str_repartidos[index_r][0]); //0nombre_apellido
            string aux;
            r >> aux;
            if(aux == "D")
                repartidor[index_r][1] = 1; // 1estado(D=1;ND=2)
            else
                repartidor[index_r][1] = 2; // 1estado(D=1;ND=2)
            r >> repartidor[index_r][2]; // 2puntos
            r.get();
            getline(r, str_repartidos[index_r][1]); //1ciudad
            index_r++;
            r >> repartidor[index_r][0]; // 0dni, 1estado(D=1;ND=0), 2puntos
        }
        r.close();
    }
   
    int index = 0, id;
    string cod, nombre, ciudad, telefono;
    cout << "Ingrese codigo\n";
    cin >> cod;
    while(cod != "z099"){
        cod = cod[1];
        int icod = stoi(cod);
        delivery_pedidos[icod] += 1;
        cout << "Ingrese nombre\n";
        cin.get();
        getline(cin, nombre);
        cout << "Ingrese ciudad\n";
        getline(cin, ciudad);
        cout << "Ingrese telefono\n";
        cin >> telefono;
        if(comprobar_repartidor(repartidor, str_repartidos, index_r, nombre, ciudad, id))
            delivery_asignados[icod] += 1;
        index += 1;
        cout << "Ingrese codigo\n";
        cin >> cod;
    }
	
    return 0;
}

bool comprobar_repartidor(int repartidor[][3],string str_repartidos[][2], int index_r, string nombre, string ciudad, int &pos){
	bool encontrado = false;
    int max_puntos = 0;
    for(int i = 0; i < index_r; i++){
        if(nombre == str_repartidos[i][0] and ciudad == str_repartidos[i][1] and 1 == repartidor[i][1]){
            if(repartidor[i][2] > max_puntos){
                repartidor[i][1] = 2;
                max_puntos = repartidor[i][2];
                pos = i;
                encontrado = true;
            }
        }
    }
	return encontrado;
}
