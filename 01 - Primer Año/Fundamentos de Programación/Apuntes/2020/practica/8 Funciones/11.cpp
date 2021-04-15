#include <iostream>
using namespace std;
void formalinea(int largo, char caracter = '#');

int main(int argc, char *argv[]) {
	int l; char c;
	cin >> l;
	cin >> c;
	formalinea(l, c);
	return 0;
}

void formalinea(int largo, char caracter){
	for(int i = 0; i < largo; i++){
		cout << caracter;
	}
}
