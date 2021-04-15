#include <iostream>
#include <iomanip>
#include <string>
using namespace std;

void ordenar(int ci, string inm[][3]); //cont_inmediata, inmediata
int main(){
    int cliente[2500][2]; // f: id; c: (0,num), (1, cuil);
    string str_cliente[2500][2]; // c: (0, razon), (1, direccion);
    for(int i = 0; i < 5; i++){
        cout << "Ingrese numero de cliente (5 digitos)\n";
        cin >> cliente[i][0];
        cout << "Ingrese razon social\n";
        cin.get();
        getline(cin, str_cliente[i][0]);
        cout << "Ingrese direccion\n";
        getline(cin, str_cliente[i][1]);
        cout << "Ingrese CUIL\n";
        cin >> cliente[i][1];
    }
    cout << "Ingrese las ventas del mes 11, NOVIEMBRE\n";
   
    int cli[2500][3]; // c: (0, forma_pago), (1, dia), (2, cod);
    float total_ventas_coutas = 0;
    string cod_pedido[2500];
    float monto_venta[2500];
    int cc, index = 0; //cod_cli, contador
    cout << "Ingrese numero de cliente\n";
    cin >> cc;
    while (cc != 0) {
        cli[index][2]  = cc;
        cout << "Ingrese numero de pedido (alfanumerico)\n";
        cin >> cod_pedido[index];
        cout << "Ingrese monto total de venta\n";
        cin >> monto_venta[index];
        cout << "Ingrese forma de pago:\n";
        cout << "\t1 CONTADO -> Entrega Imediata\n";
        cout << "\t2 EFECTIVO Y UNA CUOTA -> Entrega 10 Dias\n";
        cout << "\t3 SEIS CUOTAS -> Entrega 30 Dias\n";
        cin >> cli[index][0];
        if(cli[index][0] == 3) //si la entrega es pagada en 6 cuotas
            total_ventas_coutas += monto_venta[index];
        cout << "Ingrese dia de la operacion\n";
        cin >> cli[index][1];
        index++;
        cout << "Ingrese numero de cliente\n";
        cin >> cc;
    }
    int cont_inmediata = 0;
    int cont_diez_dias = 0;
    string diez_dias[2500][4]; //columnas: CUIT, nro de pedido, dia de operacion, dia de entrega
    string inmediata[2500][3]; //columnas: razon social, monto, numero de pedido
    for(int i = 0; i < index; i++){
        if(cli[i][0] == 1){ //si la entrega es por contado e inmediata
            inmediata[i][0] = str_cliente[i][0];
            inmediata[i][1] = to_string(monto_venta[i]);
            inmediata[i][2] = cod_pedido[i];
            cont_inmediata++;
        }
        else if(cli[i][0] == 2){ //si la entrega es efectivo y de una cuota
            diez_dias[i][0] = 
            diez_dias[i][1] = 
            diez_dias[i][2] = 
            diez_dias[i][3] = 
            cont_diez_dias++;
        }
    }
    //punto 1
    ordenar(cont_inmediata, inmediata);
    cout << "PEDIDOS DE ENTREGA INMEDIATA\n";
    cout << "Razon Social" << setw(5) << "Monto de la Venta" << setw(5) << "Nro de Pedido" << setw(5) << "Forma de Pago"  << endl;
    for(int i = 0; i < cont_inmediata; i++){
        cout << inmediata[i][0] << setw(5) << inmediata[i][1] << setw(5) << inmediata[i][2] << setw(5) << "contado" << endl;
    }
    //punto 2
    //punto 3
    cout << endl << "Total de ventas realizadas en 6 cuotas: " << total_ventas_coutas << endl;
return 0;
}

void ordenar(int ci, string inm[][3]){ //cont_inmediata, inmediata
    for(int i = 0; i < ci-1; i++){
        for(int j = i+1; j < ci; j++){
            if(inm[i][0] > inm[j][0]){
                for(int k = 0; k < 3; k++){
                    string aux = inm[i][k];
                    inm[i][k] = inm[j][k];
                    inm[j][k] = aux;
                }
            }
        }
    }
}
