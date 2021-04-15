#include <iostream>
using namespace std;
bool evalua(int n1, int n2, int n3);

int main(int argc, char *argv[]) {
	int a, b, c;
	cin >> a >> b >> c;
	bool band = evalua(a, b, c);
	if(band == true)
		cout << "promocion";
	else
		cout << "no promocion";
	return 0;
}

bool evalua(int n1, int n2, int n3){
	if((n3 >= 25) and (n1 + n2 + n3) >= 75)
		return true;
	else
		return false;
}
