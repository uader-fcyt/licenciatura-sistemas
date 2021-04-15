//7 8 14 10 24 40 4 6
#include <iostream>
using namespace std;

int main(int argc, char *argv[]) {
	int n, num[100];
	
	cout << "Ingrese cantidad de numeros a ingresar\n";
	cin >> n;
	for(int i = 0; i < n; i++){
		cout << "Ingrese numero:\n";
		cin >> num[i];
	}
	
	for(int i = 0; i < (n-1); i++){
		for(int j = i+1; j < n; j++){
			if(num[i] > num[j]){
			 int aux = num[i];
			 num[i] = num[j];
			 num[j] = aux;
			}
		}
	}
	
	cout << "Ordenados:\n";
	for(int i = 0; i < n; i++){
		cout << num[i] << endl;
	}
	return 0;
}

