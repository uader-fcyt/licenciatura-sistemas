#include <iostream>
using namespace std;

int main(){
    int n = 25;
    int cod[25];
    int dni[25];
    char estado[25];
    int fechaPago[25][3]; //fechas de la forma aaaa, mm, dd en sus respectivas filas
    int fechaLimite[25][3];
    float monto[25];
    int cont[3]; //pagador, moroso, incobrable

    for(int i = 0; i < n; i++){
        monto[i] = 0;
        for(int j = 0; j < 3; j++){
            fechaPago[i][j] = 0;
            fechaLimite[i][j] = 0;
            cont[j] = 0;
        }
    }

    for(int i = 0; i < n; i++){
        cout << "Ingrese codigo de cliente\n";
        cin >> cod[i];
        cout << "Ingrese documento\n";
        cin >> dni[i];
        cout << "Ingrese estado (A: Pago, B: Moroso, C: Incobrable)\n";
        cin >> estado[i];
    }

    for(int i = 0; i < n; i++){
        int cod_aux;
        cout << "Ingrese codigo de cliente\n";
        cin >> cod_aux;
        for(int index = 0; index < n; index++){
		    if(cod[index] == cod_aux){
			    index = n;
                cout << "Ingrese fecha de pago como anio, mes, dia respectivamente\n";
                cin >> fechaPago[index][0];
                cin >> fechaPago[index][1];
                cin >> fechaPago[index][2];
                cout << "Ingrese fecha LIMITE de pago como anio, mes, dia respectivamente\n";
                cin >> fechaLimite[index][0];
                cin >> fechaLimite[index][1];
                cin >> fechaLimite[index][2];
                cout << "Ingrese monto\n";
                cin >> monto[index];
                if(fechaPago[index][0] <= fechaLimite[index][0] and fechaPago[index][1] <= fechaLimite[index][1] and \
                fechaPago[index][2] <= fechaLimite[index][2] and monto[index] != 0){
                    estado[index] = 'A';
                    cont[0] += 1;
                }else if(fechaPago[index][0] > fechaLimite[index][0] and fechaPago[index][1] > fechaLimite[index][1] and \
                fechaPago[index][2] > fechaLimite[index][2] and monto[index] != 0){
                    estado[index] = 'B';
                    cont[1] += 1;
                }else if(monto[index] == 0){
                    estado[index] = 'C';
                    cont[2] += 1;
                }
            }
	    }
    }
    for(int i = 0; i < n-1; i++){
        for(int j = i+1; j < n; j++){
            if(dni[i] > dni[j]){
                float aux = dni[i];
                dni[i] = dni[j];
                dni[j] = aux;

                aux = cod[i];
                cod[i] = cod[j];
                cod[j] = aux; 

                aux = monto[i];
                monto[i] = monto[j];
                monto[j] = aux;

                char caux = estado[i];
                estado[i] = estado[j];
                estado[j] = caux;
            }
        }
    }
    cout << "Clientes pagadores:\t" << cont[0] << endl;
    cout << "Clientes morosos:\t" << cont[1] << endl;
    cout << "Clientes incobrables:\t" << cont[2] << endl;
    cout << "INCOBRABLES DNI:\n";
    for(int i = 0; i < n; i++){
        if(estado[i] == 'C')
            cout << dni[i] << endl;
    }
    return 0;
}
