#include <iostream>
using namespace std;

int main(){
   int stock[501];
   int compras[501];
   int ventas[501];
   float precio[501];
   int cod[501];
   int totalVendidas = 0;
   float totalRecaudado = 0;

   for(int i = 0; i < 501; i++){
        compras[i] = 0;
        ventas[i] = 0;
   }

   for(int i = 1; i <= 500; i++){
       cout << "Ingrese codigo de botella " << i << "/500\n";
       int codigo;
       cin >> codigo;
       cod[i] = codigo;
       cout << "Ingrese precio de botella " << i << "/500\n";
       cin >> precio[i];
       cout << "Ingrese stock de botellas" << i << "/500\n";
       cin >> stock[i];
   }
   int codigo;
   cout << "Ingrese codigo de botella\n";
   cin >> codigo;
   while (codigo != 9999){
       for(int i = 0; i < 500; i++){
           if(codigo == cod[i]){
               codigo = cod[i];
               i = 500;
           }
        }
        cout << "Ingrese tipo de operacion: (1: Venta 2: Compra al proveedor)\n";
        int operacion;
        cin >> operacion;
        cout << "Ingrese cantidad de botellas\n";
        int aux_cant;
        cin >> aux_cant;
        if(operacion == 1){
            totalVendidas += aux_cant;
            totalRecaudado += (aux_cant*precio[codigo]);
            ventas[codigo] += aux_cant;
            stock[codigo] -= aux_cant;
        }else{
            compras[codigo] += aux_cant;
            stock[codigo] += aux_cant;
        }
        cout << "Ingrese codigo de botella\n";
        cin >> codigo;
   }

    for(int i = 1; i <= 500; i++){
        cout << "Codigo: " << i << " Botellas vendidas/compradas: " << ventas[i] << "/" << compras[i] << endl;
    }

    cout << "Total vendido/recaudado: " << totalVendidas << "/" << totalRecaudado << endl;

    for(int i = 1; i <= 500-1; i++){
        for(int j = i+1; j <= 500; j++){
           if(stock[i] < stock[j]){
                float aux = stock[i];
                stock[i] = stock[j];
                stock[j] = aux;

                aux = stock[i];
                stock[i] = stock[j];
                stock[j] = aux;

                aux = compras[i];
                compras[i] = compras[j];
                compras[j] = aux;

                aux = ventas[i];
                ventas[i] = ventas[j];
                ventas[j] = aux;

                aux = precio[i];
                precio[i] = precio[j];
                precio[j] = aux;
           }
        }
    }

    cout << "COD\tSTOCK\tARS\n";
    for(int i = 1; i <= 500; i++){
        cout << cod[i] << "\t" << stock[i] << "\t" << stock[i]*precio[i] << endl;
    }
    return 0;
}
