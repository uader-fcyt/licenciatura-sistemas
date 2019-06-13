#include <iostream>
using namespace std;

struct Nodo_Pila{
	int codigo;
	string descripcion;
	float precio;
	Nodo_Pila *siguiente;
};
typedef Nodo_Pila NPila;

struct Nodo_Lista{
	int codigo;
	string rubro;
	string descripcion;
	float precio;
	Nodo_Lista *siguiente;
};
typedef Nodo_Lista NLista;

void agregarAPila(NPila*& S, NLista*& L){
	NPila* nuevo = new NPila();
	nuevo->codigo = L->codigo;
	nuevo->descripcion = L->descripcion;
	float aux_precio;
	aux_precio += (aux_precio*0.15);
	nuevo->precio = aux_precio;
	nuevo->siguiente = S;
	S = nuevo;
}

bool eliminar(NLista*& L,NPila*& p){
	if (L != NULL)
	{
		NLista*aux,*anterior;
		aux = L;
		while((aux != NULL) && (aux->rubro != "Relojeria")){
			anterior = aux;
			aux = aux->siguiente;
		}
	}
	if (aux == NULL)
	{
		return false;
	}
	else if((anterior == NULL)&&(aux->precio < 500)){
		agregarAPila(p,aux);
		L = L->siguiente;
		delete aux;
		return true;
	}
	else{
		if (aux->precio < 500)
		{
			agregarAPila(p,aux);
		}
		anterior->siguiente = aux->siguiente;
		delete aux;
		return true;
	}
}

int main(){
	NPila *p = NULL;
	NLista *L = NULL;


	return 0;
}