#include <iostream>
using namespace std;

bool es_primo(int x);

int main(int argc, char *argv[]) {
	int a;
	cout << "Ingrese un numero: \n";
	cin >> a;
	cout << es_primo(a);
	return 0;
}

bool es_primo(int x){
	bool primo = true;
	for(int i = 2; i < x; i++){
		if(x % i == 0)
			primo = false;
	}
	return primo;
}
