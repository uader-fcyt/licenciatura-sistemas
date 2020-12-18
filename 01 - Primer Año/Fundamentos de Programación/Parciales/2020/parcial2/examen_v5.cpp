#include <iostream>
#include <fstream>
#include <iomanip>
using namespace std;

string Mostrar(string cVec[], int nTam, int cod);
void MayorConsumo(int Mat[][7], int nTamanio, int cod_bebida, int &nMay, int &cod_loc);

string MasConsumidas(int bebi[],string desc[],int cons[][7], int nCiu, int Beb);

int main(int argc, char *argv[]) {
	string ciudades[50],desc_bebidas[7];
	int bebidas[7], cod,nCantCiudades=0,nCantBebidas=0;
	int consumo[50][7];
	int etario[3][7];
	ifstream arch_ciu;
	arch_ciu.open("CIUDADES.TXT");
	if (arch_ciu.fail()){
		cout<<"El archivo no se pudo abrir"<<endl;
	}
	else{
		arch_ciu >> cod;
		nCantCiudades=0;
		while (!arch_ciu.eof()){
			arch_ciu.get();
			getline(arch_ciu,ciudades[cod-1]);
			arch_ciu >> cod;
			nCantCiudades++;
		}
	}	
	arch_ciu.close();	
	ifstream arch_bebi;
	arch_bebi.open("TIPOS_DE_BEBIDA.TXT");
	if (arch_bebi.fail()){
		cout<<"El archivo no se pudo abrir"<<endl;
	}
	else{
		arch_bebi >> cod;
		nCantBebidas=0;
		while (!arch_bebi.eof()){
			arch_bebi >> bebidas[cod-1];
			arch_bebi.get();
			getline(arch_bebi,desc_bebidas[cod-1]);
			arch_bebi >> cod;
			nCantBebidas++;
		}
	}	
	arch_bebi.close();	
	for (int i=0;i<nCantCiudades;i++){
		for (int j=0;j<nCantBebidas;j++){
			consumo[i][j]=0;
		}
	}
	int cod_ciu,cod_beb,litros;
	string cgrupo;
	cout << "Ingrese el codigo de ciudad: ";
	cin >>cod_ciu;
	int ngrupo;
	while (cod_ciu!=0){
		cout << Mostrar(ciudades,nCantCiudades,cod_ciu) <<endl;
		cout << "Ingrese el tipo de bebida: ";
		cin >>cod_beb;
		cout << Mostrar(desc_bebidas,nCantBebidas,cod_beb)<<endl;
		cout << "Ingrese los litros consumidos: ";
		cin >>litros;
		cin.ignore();
		cout << "Ingrese el grupo etario (G1,G2 o G3): ";
		cin >>cgrupo;
		if (cgrupo=="G1"){
			ngrupo=0;
		}
		else {
			if (cgrupo=="G2"){
				ngrupo=1;
			}
			else {
				ngrupo=2;
			}
		}
		consumo[cod_ciu-1][cod_beb-1]+=litros;
		etario[ngrupo][cod_beb-1]+=litros;
		cout << "Ingrese el codigo de ciudad: ";
		cin >>cod_ciu;
	}
	string nombre_bebida;
	nombre_bebida=MasConsumidas(bebidas,desc_bebidas,consumo,nCantCiudades,nCantBebidas);
	cout << "Bebida más consumida: "<<nombre_bebida<<endl;
	cout << setw(20)<<"Grupo/Tipo de Bebida";
	for (int i=1; i<8;i++){
		cout <<setw(5)<<i;
	}
	cout <<endl;
	for (int i=0;i<3;i++){
		switch (i){
		case 0: cout <<setw(20)<<"G1"; break;
		case 1: cout <<setw(20)<<"G2"; break;
		case 2: cout <<setw(20)<<"G3"; break;
		}
		for (int j=0;j<7;j++){
			cout <<setw(5) <<etario[i][j];
		}
		cout <<endl;
	}
	for (int i=0; i<nCantCiudades;i++){
		for (int j=0;j<nCantBebidas;j++){
			cout <<setw(5)<<consumo[i][j];
		}
		cout <<endl;
	}
	ofstream arch_salida;
	arch_salida.open("BEBIDAS.TXT");
	int nCodCiudad,nTotal;
	if (arch_salida.fail()){
		cout<<"El archivo no se pudo abrir"<<endl;
	}
	else{
		for (int i=0; i<nCantBebidas;i++){
			arch_salida << i+1 <<" ";
			arch_salida <<desc_bebidas[i]<<" ";
			MayorConsumo(consumo,nCantCiudades,i,nTotal,nCodCiudad);
			arch_salida << nCodCiudad+1 << " ";
			arch_salida << ciudades[nCodCiudad] << " ";
			arch_salida << nTotal <<endl;
		}
	}
	arch_salida.close();	
	return 0;
}

void MayorConsumo(int Mat[][7], int nTamanio, int cod_bebida, int &nMay, int &cod_loc){
	nMay=0;
	for (int i=0;i<nTamanio;i++){
		if (Mat[i][cod_bebida]>nMay){
			nMay=Mat[i][cod_bebida];
			cod_loc=i;
		}
	}
	
}

string MasConsumidas(int bebi[],string desc[],int cons[][7], int nCiu, int Beb){
	int acum=0,nMax=0,nMaxI=0;
	
	for (int i=0; i<Beb; i++){
		if (bebi[i]!=0){
			acum=0;
			for (int j=0; j<nCiu; j++){
				acum+=cons[j][i];
			}
			if (acum>nMax){
				nMax=acum;
				nMaxI=i;
			}
		}
		
	}
	return desc[nMaxI];
}

string Mostrar(string cVec[], int nTam, int cod){
	return cVec[cod-1];
}
