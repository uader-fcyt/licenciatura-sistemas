#include <iostream>
using namespace std;

bool es_par(int x);

int main(int argc, char *argv[]) {
	int a;
	cout << "Ingrese un numero: \n";
	cin >> a;
	cout << es_par(a);
	return 0;
}

bool es_par(int x){
	if(x % 2 == 0)
		return true;
	else
		return false;
}
