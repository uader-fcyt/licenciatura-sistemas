#include <iostream>
using namespace std;
void mayor(int a, int b, int c, int &m);

int main(int argc, char *argv[]) {
	int a, b, c, M;
	cin >> a >> b >> c;
	mayor(a, b, c, M);
	cout << M;
	return 0;
}

void mayor(int a, int b, int c, int &m){
	if(a > b && a > c)
		m = a;
	else
		if(b > a && b > c)
			m = b;
		else
			m = c;
}
