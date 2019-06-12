#include <iostream>
using namespace std;
struct pila {
	int dato;
    pila* link;
};
struct lista{
	int dato;
	lista* link;
};
bool vacia(pila* n_pila){
	return (n_pila==NULL);
}
void agregar_en_pila(pila*& n_pila,int dato){
	pila* aux=new(pila);
	aux->dato=dato;
	aux->link=n_pila;
	n_pila=aux;
	
}
void sacar_de_lista(lista*& n_lista,pila*& n_pila,int dato){
	lista* aux=n_lista,*aux1=n_lista,*aux2;
	if(vacia(n_pila)){
		while(aux!=NULL && n_lista!=NULL){
			if(n_lista->dato==dato){
				n_lista=n_lista->link;
				delete(aux1);
			    aux1=n_lista;
				aux=n_lista->link;
			}
			else
			   if(aux->dato==dato){
				agregar_en_pila(n_pila,aux->dato);
				aux=aux->link;
				delete(aux1->link);
				aux1->link=aux;
			   }
			   else{
				   aux=aux->link;
				   aux1=aux1->link;
			   }
		}
	}
}
void mostrar(lista* lis){
	while(lis!=NULL){
		cout<<lis->dato<<endl;
	   lis=lis->link;
	}
	cout<<endl;
}
void agregar(lista*& lis,int dato){
	lista* aux=new(lista);
	aux->dato=dato;
	if(lis==NULL){
		lis=aux;
	    lis->link=NULL;
	}
	else
	   {
		lista* aux1=lis;
		while(aux1->link!=NULL)
			aux1=aux1->link;
		aux1->link=aux;
		aux->link=NULL;
	}
}

int main(int argc, char *argv[]) {
	pila* st=NULL;
	lista* punt=NULL;
	agregar(punt,350);
	agregar(punt,150);
	agregar(punt,350);
	agregar(punt,9950);
	agregar(punt,5560);
	agregar(punt,350);
	agregar(punt,66150);
	agregar(punt,350);
	agregar(punt,99850);
	agregar(punt,350);
	agregar(punt,350);
	mostrar(punt);
	cout<<endl;
	sacar_de_lista(punt,st,350);
	mostrar(punt);
	return 0;
}

