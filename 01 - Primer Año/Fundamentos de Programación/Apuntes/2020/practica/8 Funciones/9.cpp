#include <iostream>
using namespace std;

void veces_repetido(int vec[], int cant, int buscar, int &ocurrencias);

int main(int argc, char *argv[]) {
	int arr[100], n, b, o;
	cin >> n;
	for(int i = 0; i < n; i++){
		cin >> arr[i];
	}
	cin >> b;
	veces_repetido(arr, n, b, o);
	cout << "Repetido: " << o;
	return 0;
}

void veces_repetido(int vec[], int cant, int buscar, int &ocurrencias){
	ocurrencias = 0;
	for(int i = 0; i < cant; i++){
		if(buscar == vec[i])
			ocurrencias += 1;
	}
}
