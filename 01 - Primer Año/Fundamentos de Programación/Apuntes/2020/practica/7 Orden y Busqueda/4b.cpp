//recordar que para realizar busqueda binaria, el arreglo debe estar ordenado
#include <iostream>
using namespace std;

int main(int argc, char *argv[]) {
	int n, cod_cliente[100];
	float saldo[100];
	
	cout << "Ingrese cantidad de clientes a procesar: \n";
	cin >> n;
	
	for(int i = 0; i < n; i++){
		cout << "Ingrese codigo de cliente: \n";
		cin >> cod_cliente[i];
		cout << "Ingrese saldo: \n";
		cin >> saldo[i];
	}

	//ordenamiento
	for(int i = 0; i < n-1; i++){
		for(int j = i+1; j < n; j++){
            if(cod_cliente[i] > cod_cliente[j]){
                int aux = cod_cliente[i];
                cod_cliente[i] = cod_cliente[j];
                cod_cliente[j] = aux;

                float f_aux =  saldo[i];
                saldo[i] = saldo[j];
                saldo[j] = f_aux;
            }
		}
	}
	
	//busqueda
    int cod_aux;
	cout << "Ingrese codigo de cliente a buscar:\n";
	cin >> cod_aux;
	int inf = 0, sup = n-1;
	int mid = (inf + sup) / 2;
	
	while((inf <= sup) and (cod_aux != cod_cliente[mid])){
		if(cod_aux < cod_cliente[mid])
			sup = mid -= 1;
		else
			inf = mid += 1;
		mid = (inf + mid) / 2;
	}

	if(inf > sup){
		cout << "CLIENTE INEXISTENTE" << endl;
	}
	else{
		cout << "Su saldo es: " << saldo[mid] << endl;
	}
	
	return 0;
}
