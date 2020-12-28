#include <iostream>
using namespace std;

bool es_mayor(int vec[], int dim);

int main(int argc, char *argv[]) {
	int arr[100], m;
	cin >> m;
	for(int i = 0; i < m; i++){
		cin >> arr[i];
	}
	if(es_mayor(arr, m) == true)
		cout << "AVG en posiciones pares es mayor\n";
	else
		cout << "AVG en posiciones impares es mayor\n";
	return 0;
}

bool es_mayor(int vec[], int dim){
	int pares = 0, impares = 0;
	for(int p = 0; p < dim; p += 2){
		pares += vec[p];
	}
	for(int i = 1; i < dim; i += 2){
		impares += vec[i];
	}
	if(pares > impares)
		return true;
	else
		return false;
}
